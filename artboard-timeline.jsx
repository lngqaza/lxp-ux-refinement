import React from 'react';
import { LXPShell } from './shell.jsx';

/* ─────────────────────────────────────────────────────────────
   ARTBOARD 2 — The Client's Year
   Client-vantage timeline. Mid posture. SAME design language.
   ───────────────────────────────────────────────────────────── */

function ArtboardTimeline({ tone = 'default', products = 'on' }) {
  const ticks = [
    { t: '−3 m',  label: 'Proposal',     emo: 'Elation',      sat: 0.95 },
    { t: '−2 m',  label: 'Family told',  emo: 'Validation',   sat: 0.85 },
    { t: '−1 m',  label: 'Venue booked', emo: 'Spreadsheet',  sat: 0.55 },
    { t: '0',     label: 'Wedding day',  emo: 'Threshold',    sat: 1.00 },
    { t: '+1 m',  label: 'Honeymoon',    emo: 'Bubble',       sat: 0.78 },
    { t: '+3 m',  label: 'Name change',  emo: 'Admin grind',  sat: 0.30 },
    { t: '+6 m',  label: 'First fight $', emo: 'Misalignment', sat: 0.20 },
    { t: '+12 m', label: 'Anniversary',  emo: 'Reflection',   sat: 0.62 },
    { t: '+18 m', label: 'House offer',  emo: 'Compounding',  sat: 0.72 },
  ];
  const focusIdx = 5;

  return (
    <LXPShell tone={tone} products={products} sidebarActive="journeys"
      crumbs={['Home', 'Life Journeys', 'Getting Married', "The Client's Year"]}
      role="Adviser · L2 Observer">

      {/* Hero */}
      <div className="hero">
        <div className="lbl">CLIENT VANTAGE · 21-MONTH CHAPTER · MODULE 06</div>
        <h1>
          <span className="badge">💍</span>
          Sit beside her, not across from her.
        </h1>
        <blockquote>
          The months from "yes" to settled-in are not a product window. They are a chapter — with peaks, valleys and one quiet stretch in month six where most advisers lose the room.
        </blockquote>
        <div className="hero-actions">
          <button className="btn">Walk the year</button>
          <button className="btn ghost">Jump to a moment</button>
        </div>
      </div>

      {/* Timeline card */}
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <div>
            <div className="eyebrow blue">Emotional weather · month by month</div>
            <h2 className="h-quad" style={{ marginTop: 4, marginBottom: 0 }}>What she's feeling, what she's Googling</h2>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <span className="pill">Emotion</span>
            <span className="pill ghost">What she's searching</span>
            <span className="pill ghost">What you'd say</span>
          </div>
        </div>

        {/* Weather chart */}
        <div style={{ position: 'relative', height: 200, background: 'var(--bg)', borderRadius: 10, padding: '20px 24px 36px' }}>
          {[0.25, 0.5, 0.75].map((y) => (
            <div key={y} style={{ position: 'absolute', left: 24, right: 24, top: `${20 + y * 130}px`, height: 1, background: 'var(--rule)' }} />
          ))}
          <svg viewBox="0 0 900 150" preserveAspectRatio="none" style={{ position: 'absolute', inset: '20px 24px 36px', width: 'calc(100% - 48px)', height: 130 }}>
            <defs>
              <linearGradient id="weather" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d={ticks.map((tk, i) => {
                const x = (i / (ticks.length - 1)) * 900;
                const y = 150 - tk.sat * 138;
                return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
              }).join(' ') + ' L 900 150 L 0 150 Z'}
              fill="url(#weather)"
            />
            <path
              d={ticks.map((tk, i) => {
                const x = (i / (ticks.length - 1)) * 900;
                const y = 150 - tk.sat * 138;
                return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
              }).join(' ')}
              fill="none"
              stroke="#1D4ED8"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
            {ticks.map((tk, i) => {
              const x = (i / (ticks.length - 1)) * 900;
              const y = 150 - tk.sat * 138;
              const isF = i === focusIdx;
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r={isF ? 7 : 4}
                          fill={isF ? '#D97706' : '#1D4ED8'} stroke="#FFFFFF" strokeWidth="2.5" />
                </g>
              );
            })}
          </svg>
          <div style={{ position: 'absolute', left: 24, right: 24, bottom: 12, display: 'flex', justifyContent: 'space-between' }}>
            {ticks.map((tk, i) => (
              <div key={i} style={{ width: 0, position: 'relative', textAlign: 'center' }}>
                <div style={{ position: 'absolute', transform: 'translateX(-50%)', whiteSpace: 'nowrap', fontSize: 10.5, fontWeight: 600, letterSpacing: '0.06em', color: i === focusIdx ? 'var(--amber)' : 'var(--ink-3)' }}>
                  {tk.t}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* moment chips */}
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${ticks.length}, 1fr)`, gap: 6, marginTop: 14 }}>
          {ticks.map((tk, i) => (
            <div key={i} style={{
              padding: '10px 10px',
              borderRadius: 8,
              background: i === focusIdx ? 'var(--amber-soft)' : 'var(--bg)',
              border: i === focusIdx ? '1px solid #F59E0B' : '1px solid transparent',
            }}>
              <div className="meta-caps" style={{ fontSize: 9.5, color: i === focusIdx ? 'var(--amber)' : 'var(--ink-3)' }}>{tk.label}</div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--ink)', marginTop: 4 }}>{tk.emo}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Focus moment — 3 cards */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', margin: '6px 4px 14px' }}>
          <div>
            <div className="eyebrow amber">Month +3 · The admin grind</div>
            <h2 className="h-section" style={{ marginTop: 4 }}>She's changing her name at five institutions. You should be one.</h2>
          </div>
          <span className="meta-caps">Focus moment · 1 of 9</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18 }}>

          <div className="card">
            <div className="eyebrow blue" style={{ marginBottom: 10 }}>Inside her head</div>
            <p style={{ fontStyle: 'italic', fontSize: 15, lineHeight: 1.5, color: 'var(--ink)', marginBottom: 16, paddingLeft: 14, borderLeft: '2px solid var(--blue-soft-2)' }}>
              "I love him. I'm also exhausted. Why does the bank need a certified copy of <em>everything</em>?"
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                ['Searched at 23:14', 'how to change surname on RA south africa'],
                ['Searched at 09:02', 'is my will still valid after marriage'],
                ['Asked her mom', '"did dad and you ever combine accounts?"'],
              ].map(([when, what], i) => (
                <div key={i} style={{ padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid var(--rule)' }}>
                  <div className="meta-caps" style={{ fontSize: 10 }}>{when}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 12.5, color: 'var(--ink)', marginTop: 4 }}>{what}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="eyebrow amber" style={{ marginBottom: 10 }}>What you observe</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                ['Decision fatigue', 'She has signed her name 38 times this month. Lead with one decision, not three.'],
                ['Shifted identity', 'New surname on email signature. New self in formation. Mirror it; don\'t correct it.'],
                ['Open question', 'Beneficiary on her RA is still her father. She has not noticed. Yet.'],
              ].map(([k, v], i) => (
                <li key={i} style={{ padding: '12px 0', borderTop: i === 0 ? 'none' : '1px solid var(--rule)' }}>
                  <div className="h-card" style={{ marginBottom: 4 }}>{k}</div>
                  <div className="body">{v}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <div className="eyebrow green" style={{ marginBottom: 10 }}>Your move — at this moment</div>
            <div style={{ background: 'var(--green-soft)', padding: '14px 16px', borderRadius: 10, marginBottom: 12 }}>
              <div className="meta-caps" style={{ color: 'var(--green)', marginBottom: 6 }}>Open with</div>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--ink)', fontStyle: 'italic' }}>
                "One quick thing, and we don't have to do anything today — your RA beneficiary. Want me to handle the form so you don't add it to your pile?"
              </p>
            </div>
            <div style={{ background: 'var(--red-soft)', padding: '14px 16px', borderRadius: 10 }}>
              <div className="meta-caps" style={{ color: 'var(--red)', marginBottom: 6 }}>Do not</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  'Open with three product names.',
                  'Use "estate planning" before month +6.',
                  'Send a 12-question fact-find PDF this week.',
                ].map((s, i) => (
                  <li key={i} style={{ fontSize: 13, color: 'var(--ink)', display: 'flex', gap: 8 }}>
                    <span style={{ color: 'var(--red)', fontWeight: 700 }}>×</span>{s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="product-mention" style={{ marginTop: 14, paddingTop: 14, borderTop: '1px dashed var(--rule)' }}>
              <div className="meta-caps" style={{ marginBottom: 6 }}>Quiet, if asked</div>
              <div className="pills">
                <span className="pill">RA beneficiary form</span>
                <span className="pill">Will refresh</span>
                <span className="pill ghost">Joint life cover (only if children raised)</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </LXPShell>
  );
}

export { ArtboardTimeline };
