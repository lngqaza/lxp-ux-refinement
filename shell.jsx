import React from 'react';

/* Shared LXP shell — matches the existing LXP design language. */

function Sidebar({ active = 'journeys' }) {
  const main = [
    ['home', 'Home'],
    ['learn', 'Learn'],
    ['live', 'Live Classes', 'live'],
    ['vrlab', 'VR Lab', 'vr'],
    ['journeys', 'Life Journeys'],
    ['programs', 'Programs'],
    ['communities', 'Communities'],
  ];
  const me = [
    ['skills', 'Skills'],
    ['learning', 'My Learning'],
    ['compliance', 'Compliance', '2'],
    ['certs', 'Certificates'],
  ];
  const tools = [
    ['ai', 'AI Co-pilot'],
  ];
  const item = ([k, label, pill]) => (
    <a key={k} href="#" className={k === active ? 'on' : ''}>
      <span className="ic" />
      <span>{label}</span>
      {pill ? (
        <span className={
          'pill ' + (pill === 'live' ? 'live' : pill === 'vr' ? 'vr' : '')
        }>{pill === 'live' ? 'LIVE' : pill === 'vr' ? 'VR' : pill}</span>
      ) : null}
    </a>
  );
  return (
    <aside className="sb">
      <div className="brand">
        <img src="assets/sanlam-logo.png" alt="" />
        <div className="wm">
          <b>Sanlam</b>
          <small>Connect · Learning</small>
        </div>
      </div>
      <div className="search">
        <span>⌕</span>
        <span>Search...</span>
        <span style={{marginLeft: 'auto'}}>⌘K</span>
      </div>
      <div className="group">
        <h6>Main Menu</h6>
        {main.map(item)}
      </div>
      <div className="group">
        <h6>My Progress</h6>
        {me.map(item)}
      </div>
      <div className="group">
        <h6>Tools</h6>
        {tools.map(item)}
      </div>
    </aside>
  );
}

function TopBar({ crumbs = ['Home', 'Life Journeys', 'Getting Married'], role = 'Adviser · L2' }) {
  return (
    <div className="topbar">
      <div className="crumb">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <React.Fragment key={i}>
              <span className={last ? 'now' : ''}>{c}</span>
              {!last && <span className="sep">/</span>}
            </React.Fragment>
          );
        })}
      </div>
      <div className="spacer" />
      <div className="search-box">
        <span>⌕</span><span>Search</span>
        <span style={{marginLeft: 'auto'}}>⌘K</span>
      </div>
      <div className="role">{role}</div>
      <div className="bell">🔔</div>
      <div className="av">TN</div>
    </div>
  );
}

function LXPShell({ tone = 'default', products = 'on', sidebarActive, crumbs, role, children }) {
  return (
    <div className={`lxp tone-${tone}`} data-tone={tone} data-products={products} style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <div className="shell">
        <Sidebar active={sidebarActive} />
        <div className="main">
          <TopBar crumbs={crumbs} role={role} />
          <div style={{ flex: 1, overflow: 'auto', position: 'relative' }}>
            <div className="page">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Sidebar, TopBar, LXPShell };
