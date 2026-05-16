import React from 'react';
import ReactDOM from 'react-dom/client';
import { DesignCanvas, DCSection, DCArtboard } from './design-canvas.jsx';
import { useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle } from './tweaks-panel.jsx';
import { ArtboardOriginal } from './artboard-original.jsx';
import { ArtboardSignal } from './artboard-signal.jsx';
import { ArtboardTimeline } from './artboard-timeline.jsx';
import { ArtboardOutcomes } from './artboard-outcomes.jsx';
import './styles.css';

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "tone": "default",
  "products": "on"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  return (
    <>
      <DesignCanvas
        title="LXP — Journey-centred reframe"
        subtitle="Three lenses on Getting Married, one progression of advisor posture."
        background="#EDE9E1"
      >
        <DCSection
          id="current"
          title="Current — the product-centric original"
          subtitle="What the LXP looks like today. Life event → four quadrants → product list."
        >
          <DCArtboard id="original" label="0 · Current (for comparison)" width={1320} height={1180}>
            <ArtboardOriginal />
          </DCArtboard>
        </DCSection>

        <DCSection
          id="getting-married"
          title="Reframed — three journey-centred concepts"
          subtitle="From reactive (junior) → observer (mid) → guide (senior). Tweak tone & product visibility live."
        >
          <DCArtboard id="signal" label="A · Signal → Move (reactive)" width={1320} height={1300}>
            <ArtboardSignal tone={t.tone} products={t.products} />
          </DCArtboard>
          <DCArtboard id="timeline" label="B · The Client's Year (vantage)" width={1320} height={1300}>
            <ArtboardTimeline tone={t.tone} products={t.products} />
          </DCArtboard>
          <DCArtboard id="outcomes" label="C · Outcomes & Consequences (guide)" width={1320} height={1300}>
            <ArtboardOutcomes tone={t.tone} products={t.products} />
          </DCArtboard>
        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Treatment">
          <TweakRadio
            label="Visual register"
            value={t.tone}
            onChange={(v) => setTweak('tone', v)}
            options={[
              { value: 'default', label: 'Default' },
              { value: 'quiet', label: 'Quiet' },
              { value: 'dense', label: 'Dense' },
            ]}
          />
          <p style={{ fontSize: 11.5, color: '#7a7a7a', marginTop: 8, lineHeight: 1.5 }}>
            Subtle variations within the same design language — not a different look.
          </p>
        </TweakSection>

        <TweakSection label="Product mentions">
          <TweakToggle
            label="Show product references"
            value={t.products === 'on'}
            onChange={(v) => setTweak('products', v ? 'on' : 'off')}
          />
          <p style={{ fontSize: 11.5, color: '#7a7a7a', marginTop: 8, lineHeight: 1.5 }}>
            When off, products are hidden everywhere — proves the journey stands on its own without the SKU list.
          </p>
        </TweakSection>

        <TweakSection label="Lens (intrinsic)">
          <p style={{ fontSize: 11.5, color: '#7a7a7a', lineHeight: 1.5, margin: 0 }}>
            The three artboards <em>are</em> the three lenses, mapped to advisor seniority:
          </p>
          <ul style={{ fontSize: 11.5, color: '#555', lineHeight: 1.6, paddingLeft: 16, marginTop: 8 }}>
            <li><strong>A</strong> Reactive · junior — responds to a cue</li>
            <li><strong>B</strong> Observer · mid — inhabits client's year</li>
            <li><strong>C</strong> Guide · senior — frames consequences</li>
          </ul>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
