import React from 'react'

export default function Hero() {
  return (
    <header style={{ padding: '11vh 6vw 8vh', maxWidth: 1400, margin: '0 auto' }}>
      <div style={{ animation: 'fadeUp .9s both' }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 13,
          letterSpacing: '0.16em', textTransform: 'uppercase',
          color: 'var(--muted)', marginBottom: 26,
        }}>
          Software Engineer — Vancouver, BC
        </div>
        <h1 style={{
          fontFamily: "'Instrument Serif', serif", fontWeight: 400,
          fontSize: 'clamp(52px, 8vw, 116px)', lineHeight: 0.97,
          letterSpacing: '-0.025em', margin: 0, maxWidth: '15ch',
        }}>
          Building{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>calm</span>
          , considered software.
        </h1>
        <p style={{
          maxWidth: '56ch', margin: '34px 0 40px',
          fontSize: 'clamp(17px, 1.5vw, 20px)', lineHeight: 1.6, color: 'var(--muted)',
        }}>
          I build end-to-end solutions from the pixels users touch to the infrastructure underneath.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
          <a
            href="#work"
            style={{
              background: 'var(--ink)', color: 'var(--bg)',
              padding: '14px 28px', borderRadius: 32, fontSize: 15,
              opacity: 1,
            }}
          >
            View work →
          </a>
        </div>
      </div>
    </header>
  )
}
