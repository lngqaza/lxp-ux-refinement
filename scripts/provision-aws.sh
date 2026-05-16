#!/usr/bin/env bash
# One-time setup: S3 bucket + CloudFront distribution for static hosting.
# Run once, then add the printed values as GitHub secrets.
# Usage: bash scripts/provision-aws.sh [bucket-name]
set -euo pipefail

BUCKET=${1:-"lxp-ux-refinement-$(openssl rand -hex 4)"}
REGION="eu-west-1"
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)

echo "▶ Creating S3 bucket: $BUCKET"
aws s3api create-bucket \
  --bucket "$BUCKET" \
  --region "$REGION" \
  --create-bucket-configuration LocationConstraint="$REGION"

aws s3api put-bucket-versioning \
  --bucket "$BUCKET" \
  --versioning-configuration Status=Enabled

aws s3api put-public-access-block \
  --bucket "$BUCKET" \
  --public-access-block-configuration \
    BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true

echo "   ✓ Bucket created (public access blocked — CloudFront only)"

# Origin Access Control
echo "▶ Creating CloudFront Origin Access Control..."
OAC_ID=$(aws cloudfront create-origin-access-control \
  --origin-access-control-config \
    Name="${BUCKET}-oac",Description="OAC for ${BUCKET}",SigningProtocol=sigv4,SigningBehavior=always,OriginAccessControlOriginType=s3 \
  --query "OriginAccessControl.Id" --output text)
echo "   ✓ OAC: $OAC_ID"

# CloudFront distribution
echo "▶ Creating CloudFront distribution..."
DIST_JSON=$(aws cloudfront create-distribution --distribution-config "{
  \"CallerReference\": \"${BUCKET}-$(date +%s)\",
  \"Origins\": {
    \"Quantity\": 1,
    \"Items\": [{
      \"Id\": \"s3-${BUCKET}\",
      \"DomainName\": \"${BUCKET}.s3.${REGION}.amazonaws.com\",
      \"OriginAccessControlId\": \"${OAC_ID}\",
      \"S3OriginConfig\": {\"OriginAccessIdentity\": \"\"}
    }]
  },
  \"DefaultCacheBehavior\": {
    \"TargetOriginId\": \"s3-${BUCKET}\",
    \"ViewerProtocolPolicy\": \"redirect-to-https\",
    \"CachePolicyId\": \"658327ea-f89d-4fab-a63d-7e88639e58f6\",
    \"Compress\": true
  },
  \"CustomErrorResponses\": {
    \"Quantity\": 1,
    \"Items\": [{
      \"ErrorCode\": 403,
      \"ResponseCode\": \"200\",
      \"ResponsePagePath\": \"/index.html\",
      \"ErrorCachingMinTTL\": 0
    }]
  },
  \"DefaultRootObject\": \"index.html\",
  \"Comment\": \"${BUCKET}\",
  \"Enabled\": true,
  \"HttpVersion\": \"http2and3\",
  \"PriceClass\": \"PriceClass_100\"
}")

DIST_ID=$(echo "$DIST_JSON" | python3 -c "import sys,json; print(json.load(sys.stdin)['Distribution']['Id'])")
DIST_DOMAIN=$(echo "$DIST_JSON" | python3 -c "import sys,json; print(json.load(sys.stdin)['Distribution']['DomainName'])")
echo "   ✓ Distribution: $DIST_ID  →  https://$DIST_DOMAIN"

# Bucket policy — allow CloudFront OAC only
echo "▶ Attaching bucket policy for CloudFront OAC..."
aws s3api put-bucket-policy --bucket "$BUCKET" --policy "{
  \"Version\": \"2012-10-17\",
  \"Statement\": [{
    \"Sid\": \"AllowCloudFrontOAC\",
    \"Effect\": \"Allow\",
    \"Principal\": {\"Service\": \"cloudfront.amazonaws.com\"},
    \"Action\": \"s3:GetObject\",
    \"Resource\": \"arn:aws:s3:::${BUCKET}/*\",
    \"Condition\": {
      \"StringEquals\": {
        \"AWS:SourceArn\": \"arn:aws:cloudfront::${ACCOUNT_ID}:distribution/${DIST_ID}\"
      }
    }
  }]
}"
echo "   ✓ Bucket policy set"

echo ""
echo "╔══════════════════════════════════════════════════════╗"
echo "║  Add these as GitHub repository secrets:             ║"
echo "╠══════════════════════════════════════════════════════╣"
echo "║  S3_BUCKET                = $BUCKET"
echo "║  CLOUDFRONT_DISTRIBUTION_ID = $DIST_ID"
echo "║  AWS_ACCESS_KEY_ID        = (codebreaker-dev key)"
echo "║  AWS_SECRET_ACCESS_KEY    = (codebreaker-dev secret)"
echo "╚══════════════════════════════════════════════════════╝"
echo ""
echo "  Site URL: https://$DIST_DOMAIN"
echo "  (CloudFront takes ~5 min to fully propagate)"
