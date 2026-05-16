import React from 'react';
import { LXPShell } from './shell.jsx';

/* ─────────────────────────────────────────────────────────────
   ARTBOARD 3 — Outcomes & Consequences
   Guide lens. Senior advisor. SAME design language.
   ───────────────────────────────────────────────────────────── */

function ArtboardOutcomes({ tone = 'default', products = 'on' }) {
  const paths = [
    {
      letter: 'A', title: 'Do nothing',
      sub: 'Same advisor relationship, no admin changes after the wedding.',
      yr1: 'No change.',
      yr5: 'Stale beneficiaries. One partner\'s RA still pays out to a parent.',
      yr10: 'Will still names ex-partner from first marriage. Estate enters dispute.',
      yr20: 'R 2.4m of avoidable estate friction; surviving partner waits 19 months for liquidity.',
      tone: 'red',
    },
    {
      letter: 'B', title: 'Light touch',
      sub: 'Beneficiary updates and a single will refresh in the first 90 days.',
      yr1: 'Documents aligned to current marriage.',
      yr5: 'Annual review picks up the first child; one cover top-up.',
      yr10: 'Family of four. Cover adequate; no offshore exposure; education unfunded.',
      yr20: 'R 1.1m education shortfall when twins reach varsity in the same year.',
      tone: 'amber',
    },
    {
      letter: 'C', title: 'Full review',
      sub: 'A 90-minute joint financial picture before the first anniversary.',
      yr1: 'Single shared dashboard. Both partners can answer "what happens if".',
      yr5: 'Education plan in motion. Cover stress-tested for one income loss.',
      yr10: 'Bond paid 4 yrs early. Offshore allocation hedges currency.',
      yr20: 'Surviving partner retires on schedule. Estate clears in 8 weeks, not 19 months.',
      tone: 'green',
    },
  ];

  const colorFor = (t) => ({
    red: 'var(--red)', amber: 'var(--amber)', green: 'var(--green)', blue: 'var(--blue)'
  })[t] || 'var(--ink-3)';
  const bgFor = (t) => ({
    red: 'var(--red-soft)', amber: 'var(--amber-soft)', green: 'var(--green-soft)', blue: 'var(--blue-soft)'
  })[t] || 'var(--bg)';

  return (
    <LXPShell tone={tone} products={products} sidebarActive="journeys"
      crumbs={['Home', 'Life Journeys', 'Getting Married', 'Outcomes & Consequences']}
      role="Adviser · L3 Guide">

      {/* Hero */}
      <div className="hero">
        <div className="lbl">GUIDE LENS · MODULE 09 · TEACHING THE 90-SECOND FRAMING</div>
        <h1>
          <span className="badge">💍</span>
          Don't sell the cover. Show them the year they didn't have it.
        </h1>
        <blockquote>
          The senior posture is not "what should we buy?" — it is "here is what your future will say to you, and which of these three doors makes it nicer."
        </blockquote>
        <div className="hero-actions">
          <button className="btn">Show three doors</button>
          <button className="btn ghost">Rehearse the framing</button>
        </div>
      </div>

      {/* Three doors × four horizons */}
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
          <div>
            <div className="eyebrow blue">Three doors, four checkpoints</div>
            <h2 className="h-quad" style={{ marginTop: 4, marginBottom: 0 }}>Show all three. Never show one.</h2>
          </div>
          <span className="meta-caps">A single recommendation feels like a sale. Three doors feel like counsel.</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '110px repeat(3, 1fr)', borderTop: '1px solid var(--rule)', borderLeft: '1px solid var(--rule)', borderRadius: 12, overflow: 'hidden' }}>
          {/* header row */}
          <div style={{ borderRight: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', padding: '14px 14px', background: 'var(--bg)' }}>
            <div className="meta-caps">Horizon</div>
          </div>
          {paths.map((p) => (
            <div key={p.letter} style={{ borderRight: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', padding: '16px 18px', background: bgFor(p.tone) }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                <span style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: colorFor(p.tone), color: 'white',
                  display: 'grid', placeItems: 'center',
                  fontSize: 17, fontWeight: 700,
                }}>{p.letter}</span>
                <span style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)' }}>{p.title}</span>
              </div>
              <p className="body" style={{ fontSize: 12.8 }}>{p.sub}</p>
            </div>
          ))}

          {/* rows */}
          {['yr1', 'yr5', 'yr10', 'yr20'].map((key, ri) => {
            const horizon = { yr1: '1 year', yr5: '5 years', yr10: '10 years', yr20: '20 years' }[key];
            return (
              <React.Fragment key={key}>
                <div style={{ borderRight: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', padding: '18px 14px', background: 'var(--bg)' }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)' }}>{horizon}</div>
                  <div className="meta-caps" style={{ fontSize: 9.5, marginTop: 4 }}>From today</div>
                </div>
                {paths.map((p) => (
                  <div key={p.letter} style={{ borderRight: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', padding: '16px 18px', background: 'var(--paper)' }}>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <div style={{ width: 3, alignSelf: 'stretch', background: colorFor(p.tone), borderRadius: 2, flexShrink: 0 }} />
                      <p style={{ fontSize: 13.5, lineHeight: 1.5, color: 'var(--ink)' }}>{p[key]}</p>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Bottom: AI co-pilot framing + lesson takeaways */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 18 }}>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
            <div>
              <div className="eyebrow blue">The 90-second framing</div>
              <h2 className="h-quad" style={{ marginTop: 4, marginBottom: 0 }}>AI drafts. Adviser owns.</h2>
            </div>
            <span className="pill"><span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--blue)' }} />Draft v3 · 12s ago</span>
          </div>
          <div style={{ background: 'var(--blue-soft)', borderRadius: 12, padding: '20px 24px' }}>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink)' }}>
              "I'm not going to ask you to pick a product today. I am going to ask you to look at three doors. <mark style={{ background: '#FFE9B8', padding: '1px 2px' }}>Door A is doing nothing</mark> — most couples do this and most are fine, until they aren't. <mark style={{ background: '#FFE9B8', padding: '1px 2px' }}>Door B is the quiet 90 minutes</mark> we'd spend updating four documents so your wedding doesn't accidentally undo your last decade. <mark style={{ background: '#FFE9B8', padding: '1px 2px' }}>Door C is the full picture</mark> — once, together — so that in 20 years you can answer 'what happens if' with one sentence instead of a phone tree. Which one would you like me to walk you through first?"
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
            <button className="btn">Accept &amp; rehearse</button>
            <button className="btn ghost">Re-tone: softer</button>
            <button className="btn ghost">Re-tone: more direct</button>
            <button className="btn ghost">Write own</button>
          </div>
        </div>

        <div className="card">
          <div className="eyebrow green" style={{ marginBottom: 4 }}>Adviser checklist</div>
          <h2 className="h-quad">What this module teaches</h2>
          <ul className="check-list">
            {[
              ['Consequence over feature', 'Frame in outcomes the client feels in 20 years, not benefits forgotten in 20 minutes.'],
              ['Three doors, never one', 'One recommendation feels like a sale.'],
              ['AI drafts, adviser owns', 'Co-pilot writes. You sharpen, soften, sign.'],
              ['Permission to choose A', '"Do nothing" must be on the table or the room closes.'],
            ].map(([k, v], i) => (
              <li key={i} className={i < 2 ? 'on' : ''}>
                <div>
                  <div className="h-card">{k}</div>
                  <div className="body" style={{ fontSize: 12.5, marginTop: 2 }}>{v}</div>
                </div>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap' }}>
            <span className="pill ghost">CPD 1.0h</span>
            <span className="pill ghost">Peer review unlocks at 80%</span>
          </div>
        </div>
      </div>

    </LXPShell>
  );
}

export { ArtboardOutcomes };
