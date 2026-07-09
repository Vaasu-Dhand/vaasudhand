import React from 'react'

export default function Blog() {
  return (
    <div>
      <header style={{ maxWidth: 1080, margin: '0 auto', padding: '11vh 6vw 6vh' }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 22 }}>
          / Writing
        </div>
        <h1 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: 'clamp(44px, 7vw, 92px)', lineHeight: 0.98, letterSpacing: '-0.025em', margin: '0 0 24px' }}>
          The blog
        </h1>
        <p style={{ maxWidth: '56ch', fontSize: 18, lineHeight: 1.6, color: 'var(--muted)', margin: 0 }}>
          Notes on engineering, design and the things I'm learning.
        </p>
      </header>

      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 6vw 14vh' }}>
        <iframe
          src="https://irradiated-joggers-3b0.notion.site/ebd//2a929e596a4080babd04fb0a67ba341a?v=2a929e596a4080e9bb4a000cd0faefe0"
          width="100%"
          height="800"
          frameBorder={0}
          allowFullScreen
          style={{ borderRadius: 12, border: '1px solid var(--line)', display: 'block' }}
        />
        <div style={{ paddingTop: 30, marginTop: 6 }}>
          <a href="#/" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: 'var(--muted)' }}>← Back home</a>
        </div>
      </div>
    </div>
  )
}
