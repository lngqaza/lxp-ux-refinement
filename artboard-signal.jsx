import React from 'react';
import { LXPShell } from './shell.jsx';

/* ─────────────────────────────────────────────────────────────
   ARTBOARD 1 — Signal → Move
   Reactive playbook. Junior posture. SAME design language as the
   current LXP (hero card, white quadrant cards, blue accents).
   ───────────────────────────────────────────────────────────── */

function ArtboardSignal({ tone = 'default', products = 'on' }) {
  return (
    <LXPShell tone={tone} products={products} sidebarActive="journeys"
      crumbs={['Home', 'Life Journeys', 'Getting Married', 'Signal → Move']}
      role="Adviser · L1 Reactive">

      {/* Hero — the client signal */}
      <div className="hero">
        <div className="lbl">CLIENT MOMENT · AGE 25 – 40 · PLAY 04 of 11</div>
        <h1>
          <span className="badge">💍</span>
          Getting Married — Signal → Move
        </h1>
        <blockquote>
          “We just got engaged. We were thinking… should we maybe combine our bank accounts?”
        </blockquote>
        <div className="hero-actions">
          <button className="btn">Begin play →</button>
          <button className="btn ghost">Practice in role-play</button>
          <button className="btn ghost">Skip to debrief</button>
        </div>
      </div>

      {/* What you're looking at — strip card */}
      <div className="card">
        <div className="eyebrow blue" style={{ marginBottom: 14 }}>What you are looking at</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {[
            ['Surface cue', '"Combine bank accounts" — operational language.'],
            ['Real question', 'How do we share a life without losing ourselves?'],
            ['Risk if missed', 'Beneficiaries, tax bracket, wills left stale 5–10 years.'],
            ['Window', '~3 months from engagement. Closes after wedding admin fatigue.'],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="meta-caps" style={{ marginBottom: 6 }}>{k}</div>
              <p className="body" style={{ color: 'var(--ink)' }}>{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Three rungs */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', margin: '6px 4px 14px' }}>
          <h2 className="h-section">The play, three rungs</h2>
          <span className="meta-caps">Est. 18 min · CPD 0.5h</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {[
            {
              num: '01', eyebrow: 'Diagnose', tone: 'amber',
              heading: 'Hear what wasn\'t said.',
              ask: [
                'How are you each feeling about wedding admin?',
                'Whose name is on the bond / rental?',
                'What does each of you owe — and to whom?',
                'Have either of you been married before?',
              ],
              watch: 'Pauses, glances between partners, the word "their" vs "our".'
            },
            {
              num: '02', eyebrow: 'Frame', tone: 'blue',
              heading: 'Name the next 10 years, gently.',
              ask: [
                'Lead with consequence, not product.',
                'Surface 3 forks: do nothing, light touch, full review.',
                'Anchor on one shared outcome — not five products.',
              ],
              watch: 'When the couple finishes each other\'s sentences. That\'s the open door.'
            },
            {
              num: '03', eyebrow: 'Move', tone: 'green',
              heading: 'Leave with one concrete next.',
              ask: [
                'A single 30-minute follow-up booked, not five.',
                'A written summary of what you heard, in their words.',
                'Permission to revisit beneficiaries before honeymoon.',
              ],
              watch: 'If you mentioned more than two products, you went too fast.'
            },
          ].map((p) => (
            <div key={p.num} className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                <span className="num">{p.num}</span>
                <span className={`eyebrow ${p.tone}`}>{p.eyebrow}</span>
              </div>
              <h3 className="h-quad">{p.heading}</h3>
              <ul className={`dot-list ${p.tone === 'blue' ? 'blue' : p.tone === 'green' ? 'green' : ''}`}>
                {p.ask.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
              <div style={{ marginTop: 16, padding: '12px 14px', background: 'var(--amber-soft)', borderRadius: 10 }}>
                <div className="eyebrow amber" style={{ marginBottom: 4 }}>Watch for</div>
                <p className="body" style={{ color: 'var(--ink)' }}>{p.watch}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row: outcome ladder + products */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 18 }}>
        <div className="card">
          <div className="eyebrow green" style={{ marginBottom: 4 }}>If the play lands</div>
          <h2 className="h-quad">Outcomes — across time</h2>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              ['In the meeting', 'A shared definition of what "ours" means — written down, by them, in their words.'],
              ['Within 7 days', 'Beneficiary forms reviewed on both sides. Wills flagged for refresh.'],
              ['Within 90 days', 'A single joint financial picture — not five accounts, one conversation.'],
              ['At 1 year', 'You are the call they make before the bank, not after.'],
            ].map(([when, what], i) => (
              <li key={i} style={{
                display: 'grid', gridTemplateColumns: '150px 1fr', gap: 18,
                padding: '12px 0', borderTop: i === 0 ? 'none' : '1px solid var(--rule)',
              }}>
                <span className="meta-caps" style={{ color: 'var(--blue)' }}>{when}</span>
                <span style={{ fontSize: 14, color: 'var(--ink)', lineHeight: 1.5 }}>{what}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="card product-mention">
          <div className="eyebrow green" style={{ marginBottom: 4 }}>If — and only if — outcome warrants</div>
          <h2 className="h-quad">Products that may follow</h2>
          <p className="body" style={{ marginBottom: 14 }}>
            Recommended <em>after</em> the conversation lands, never as its opener.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              ['Sanlam Premier Life Cover', 'If joint dependency emerges in diagnosis.'],
              ['Sanlam Wills & Trusts',     'If second marriage or step-children surface.'],
              ['Cumulus Education Plan',    'If "kids in the next two years" is volunteered.'],
            ].map(([n, why]) => (
              <div key={n} style={{ padding: '10px 12px', background: 'var(--blue-soft)', borderRadius: 10 }}>
                <div className="h-card" style={{ color: 'var(--blue)' }}>{n}</div>
                <div className="body" style={{ fontSize: 12.5, marginTop: 2 }}>{why}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </LXPShell>
  );
}

export { ArtboardSignal };
