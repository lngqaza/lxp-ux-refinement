import React from 'react';

/* ─────────────────────────────────────────────────────────────
   ARTBOARD 0 — The Original
   A faithful recreation of the current LXP "Getting Married" screen
   so the three reframes can be compared against the status quo.
   Product-centric: four quadrants, products as the toolkit.
   ───────────────────────────────────────────────────────────── */

function ArtboardOriginal() {
  // Pure recreation — uses its own scoped styles so tone tweaks
  // don't muddy the comparison. This is the "before".
  const css = `
    .og { font-family: -apple-system, 'Segoe UI', system-ui, sans-serif; color: #0F2540; background: #F6F8FA; height: 100%; display: grid; grid-template-columns: 232px 1fr; }
    .og *, .og *::before, .og *::after { box-sizing: border-box; }
    .og .sb { background: #FFFFFF; border-right: 1px solid #E6EAF0; padding: 18px 14px; display: flex; flex-direction: column; gap: 18px; }
    .og .brand { display: flex; gap: 10px; align-items: center; }
    .og .brand img { width: 30px; height: 30px; }
    .og .brand b { font-size: 16px; font-weight: 700; color: #0F2540; line-height: 1; }
    .og .brand small { display: block; color: #6B7A8C; font-size: 11px; margin-top: 3px; }
    .og .search { display: flex; align-items: center; gap: 8px; padding: 8px 10px; background: #F6F8FA; border-radius: 8px; color: #93A1B4; font-size: 12.5px; }
    .og .grp h6 { font-size: 10.5px; color: #93A1B4; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; margin: 0 0 8px 6px; }
    .og .grp { display: flex; flex-direction: column; gap: 2px; }
    .og .na { display: flex; align-items: center; gap: 10px; padding: 9px 10px; border-radius: 8px; color: #4F5D72; font-size: 13.5px; text-decoration: none; }
    .og .na .ic { width: 16px; height: 16px; border-radius: 3px; background: #E1E7F0; display: inline-block; flex-shrink: 0; }
    .og .na:hover { background: #F6F8FA; }
    .og .na.on { background: #EAF1FD; color: #0F2540; font-weight: 600; }
    .og .na .pill { margin-left: auto; font-size: 9.5px; padding: 2px 5px; background: #FFE3D6; color: #C2410C; border-radius: 3px; font-weight: 700; letter-spacing: 0.04em; }
    .og .na .pill.vr { background: #DBE9FF; color: #1D4ED8; }
    .og .na .pill.n { background: #F1F4F9; color: #6B7A8C; }
    .og .main { display: flex; flex-direction: column; min-width: 0; }
    .og .tb { display: flex; align-items: center; padding: 16px 28px; gap: 14px; }
    .og .tb .cr { color: #6B7A8C; font-size: 13px; }
    .og .tb .cr b { color: #0F2540; }
    .og .tb .sp { flex: 1; }
    .og .tb .sr { background: #FFFFFF; border-radius: 8px; padding: 7px 12px; font-size: 12px; color: #93A1B4; display: flex; gap: 8px; align-items: center; }
    .og .tb .ic-bell { width: 28px; height: 28px; border-radius: 50%; background: #FFFFFF; display: grid; place-items: center; position: relative; font-size: 14px; }
    .og .tb .ic-bell::after { content: '2'; position: absolute; top: -2px; right: -2px; background: #DC2626; color: white; font-size: 9px; font-weight: 700; padding: 1px 4px; border-radius: 8px; }
    .og .av { width: 30px; height: 30px; border-radius: 50%; background: #1D4ED8; color: white; display: grid; place-items: center; font-size: 11px; font-weight: 700; letter-spacing: 0.04em; }

    .og .body { padding: 0 28px 28px; display: grid; grid-template-columns: 360px 1fr; gap: 24px; min-height: 0; flex: 1; }

    .og .listcol h5 { font-size: 11.5px; color: #93A1B4; font-weight: 600; letter-spacing: 0.08em; margin: 0 0 14px 6px; }
    .og .le { display: flex; align-items: center; gap: 12px; background: #FFFFFF; border-radius: 12px; padding: 14px 14px; margin-bottom: 10px; cursor: pointer; border: 1px solid transparent; }
    .og .le.on { border-color: #1D4ED8; box-shadow: 0 1px 0 #1D4ED8 inset, 0 0 0 1px #1D4ED8; }
    .og .le .ico { width: 40px; height: 40px; border-radius: 10px; background: #EFF3FA; display: grid; place-items: center; font-size: 20px; flex-shrink: 0; }
    .og .le .meta { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
    .og .le .age { font-size: 10.5px; color: #93A1B4; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
    .og .le .name { font-size: 14.5px; font-weight: 600; color: #0F2540; }
    .og .le .cpd { font-size: 11.5px; color: #93A1B4; }

    .og .hero { background: linear-gradient(135deg, #0B3D91 0%, #1457C9 60%, #1E70E0 100%); color: white; border-radius: 14px; padding: 24px 28px; position: relative; overflow: hidden; }
    .og .hero::after { content: ''; position: absolute; right: -80px; top: -80px; width: 240px; height: 240px; border-radius: 50%; background: rgba(255,255,255,0.06); }
    .og .hero .lbl { font-size: 11px; letter-spacing: 0.16em; color: rgba(255,255,255,0.7); font-weight: 600; margin-bottom: 10px; }
    .og .hero h1 { font-size: 30px; font-weight: 700; margin: 0; display: flex; align-items: center; gap: 14px; }
    .og .hero h1 .badge { width: 44px; height: 44px; border-radius: 12px; background: rgba(255,255,255,0.14); display: grid; place-items: center; font-size: 22px; }
    .og .hero blockquote { margin: 18px 0 0; padding: 10px 14px; border-left: 3px solid rgba(255,255,255,0.5); font-style: italic; font-size: 14.5px; color: rgba(255,255,255,0.95); }

    .og .quads { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 18px; }
    .og .qd .qlbl { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 4px; }
    .og .qd.t1 .qlbl { color: #D97706; }
    .og .qd.t2 .qlbl { color: #1D4ED8; }
    .og .qd.t3 .qlbl { color: #047857; }
    .og .qd.t4 .qlbl { color: #047857; }
    .og .qd h3 { font-size: 19px; font-weight: 700; color: #0F2540; margin: 0 0 12px; }
    .og .qd ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 9px; }
    .og .qd ul li { font-size: 14px; color: #0F2540; display: flex; gap: 10px; align-items: baseline; }
    .og .qd.t1 ul li::before { content: ''; width: 7px; height: 7px; background: #D97706; border-radius: 50%; flex-shrink: 0; margin-top: 6px; }
    .og .qd.t2 ul li { color: #0F2540; font-style: italic; padding-left: 12px; border-left: 2px solid #DBE9FF; }
    .og .qd .pills { display: flex; flex-wrap: wrap; gap: 8px; }
    .og .qd .pills span { font-size: 12.5px; padding: 7px 13px; background: #EAF1FD; color: #1D4ED8; border-radius: 999px; font-weight: 500; }
    .og .qd.t4 ul li { display: flex; gap: 10px; align-items: center; }
    .og .qd.t4 ul li::before { content: ''; width: 16px; height: 16px; border: 1.5px solid #93A1B4; border-radius: 4px; flex-shrink: 0; }
  `;

  const events = [
    { age: 'Age 25 – 40', name: 'Getting Married',     cpd: '1.00h CPD', icon: '💍', on: true },
    { age: 'Age 28 – 42', name: 'New Baby',            cpd: '2.00h CPD', icon: '👶' },
    { age: 'Age 28 – 45', name: 'Buying a Home',       cpd: '1.50h CPD', icon: '🏠' },
    { age: 'Age 50 – 65', name: 'Approaching Retirement', cpd: '2.50h CPD', icon: '🌅' },
    { age: 'Age 30 – 55', name: 'Retrenchment',        cpd: '1.50h CPD', icon: '📋' },
    { age: 'Age 55+',     name: 'Death of a Spouse',   cpd: '2.00h CPD', icon: '🕊️' },
  ];

  return (
    <div className="og">
      <style>{css}</style>

      <aside className="sb">
        <div className="brand">
          <img src="assets/sanlam-logo.png" alt="" />
          <div><b>Sanlam</b><small>Connect · Learning</small></div>
        </div>
        <div className="search"><span>⌕</span><span>Search...</span><span style={{marginLeft:'auto'}}>⌘K</span></div>
        <div className="grp">
          <h6>Main Menu</h6>
          <a className="na" href="#"><span className="ic" />Home</a>
          <a className="na" href="#"><span className="ic" />Learn</a>
          <a className="na" href="#"><span className="ic" />Live Classes<span className="pill">LIVE</span></a>
          <a className="na" href="#"><span className="ic" />VR Lab<span className="pill vr">VR</span></a>
          <a className="na on" href="#"><span className="ic" style={{background:'#1D4ED8'}} />Life Events</a>
          <a className="na" href="#"><span className="ic" />Programs</a>
          <a className="na" href="#"><span className="ic" />Communities</a>
        </div>
        <div className="grp">
          <h6>My Progress</h6>
          <a className="na" href="#"><span className="ic" />Skills</a>
          <a className="na" href="#"><span className="ic" />My Learning</a>
          <a className="na" href="#"><span className="ic" />Compliance<span className="pill n">2</span></a>
          <a className="na" href="#"><span className="ic" />Certificates</a>
        </div>
        <div className="grp">
          <h6>Tools</h6>
          <a className="na" href="#"><span className="ic" />AI Assistant</a>
        </div>
      </aside>

      <div className="main">
        <div className="tb">
          <div className="cr">Home  /  <b>Life Events</b></div>
          <div className="sp" />
          <div className="sr"><span>⌕</span><span>Search</span><span style={{marginLeft:8}}>⌘K</span></div>
          <div className="ic-bell">🔔</div>
          <div className="av">TN</div>
        </div>

        <div className="body">
          <div className="listcol">
            <h5>LIFE EVENTS</h5>
            {events.map((e, i) => (
              <div key={i} className={`le ${e.on ? 'on' : ''}`}>
                <div className="ico">{e.icon}</div>
                <div className="meta">
                  <div className="age">{e.age}</div>
                  <div className="name">{e.name}</div>
                  <div className="cpd">{e.cpd}</div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="hero">
              <div className="lbl">CLIENT MOMENT · AGE 25 – 40</div>
              <h1><span className="badge">💍</span>Getting Married</h1>
              <blockquote>"Update beneficiaries, review joint cover, start a joint budget plan, and update your will."</blockquote>
            </div>

            <div className="quads">
              <div className="qd t1">
                <div className="qlbl">Triggers — When to reach out</div>
                <h3>Watch for these moments</h3>
                <ul>
                  <li>Engagement announcement</li>
                  <li>Wedding date set</li>
                  <li>Joint account opened</li>
                  <li>Name change (ID update)</li>
                </ul>
              </div>
              <div className="qd t2">
                <div className="qlbl">Conversations they'll start</div>
                <h3>Be ready to answer</h3>
                <ul>
                  <li>"Should we combine our finances?"</li>
                  <li>"Do I need to update my RA beneficiaries?"</li>
                  <li>"How does marriage affect my tax?"</li>
                  <li>"Does my spouse need their own life cover?"</li>
                </ul>
              </div>
              <div className="qd t3 product-mention">
                <div className="qlbl">Sanlam products that fit</div>
                <h3>Your toolkit for this moment</h3>
                <div className="pills">
                  <span>Sanlam Premier Life Cover</span>
                  <span>Sanlam Wills &amp; Trusts</span>
                  <span>Cumulus Education Plan</span>
                  <span>Stratus Offshore</span>
                </div>
              </div>
              <div className="qd t4">
                <div className="qlbl">Adviser checklist</div>
                <h3>Actions to take</h3>
                <ul>
                  <li>Review RA beneficiary nominations</li>
                  <li>Update life cover</li>
                  <li>Consider a prenuptial agreement</li>
                  <li>Update your will</li>
                  <li>Combine household budgets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ArtboardOriginal };
