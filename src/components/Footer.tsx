import React, { useEffect, useState } from 'react'

interface Meta {
  email: string
  github: string
  linkedin: string
  footerMarquee: string[]
}

export default function Footer() {
  const [meta, setMeta] = useState<Meta | null>(null)

  useEffect(() => {
    fetch('/json/meta.json').then(r => r.json()).then(setMeta).catch(() => {})
  }, [])

  const email = meta?.email || 'hello@vaasudhand.com'
  const github = meta?.github || 'https://github.com/Vaasu-Dhand'
  const linkedin = meta?.linkedin || 'https://www.linkedin.com/in/vaasu-dhand/'
  const marqueeItems = meta?.footerMarquee || []
  const doubled = [...marqueeItems, ...marqueeItems, ...marqueeItems]

  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--bg)', transition: 'background 0.5s' }}>
      {doubled.length > 0 && (
        <div style={{ overflow: 'hidden', borderBottom: '1px solid color-mix(in srgb, var(--bg) 20%, transparent)', padding: '14px 0' }}>
          <div style={{
            display: 'flex', gap: 34, width: 'max-content',
            animation: 'marquee 26s linear infinite',
            fontFamily: "'JetBrains Mono', monospace", fontSize: 13,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            whiteSpace: 'nowrap', opacity: 0.8,
          }}>
            {doubled.map((m, i) => (
              <React.Fragment key={i}>
                <span>{m}</span>
                <span style={{ color: 'var(--accent)' }}>✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      <div style={{ padding: '7vh 6vw', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
          <a data-soc href={github} target="_blank" rel="noreferrer" title="GitHub" style={{ width: 54, height: 54, borderRadius: '50%', border: '1px solid color-mix(in srgb, var(--bg) 32%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" style={{ fill: 'var(--bg)' }}>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a data-soc href={linkedin} target="_blank" rel="noreferrer" title="LinkedIn" style={{ width: 54, height: 54, borderRadius: '50%', border: '1px solid color-mix(in srgb, var(--bg) 32%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" style={{ fill: 'var(--bg)' }}>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.2 23.227 23.2 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a data-soc href={`mailto:${email}`} title="Email" style={{ width: 54, height: 54, borderRadius: '50%', border: '1px solid color-mix(in srgb, var(--bg) 32%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" style={{ fill: 'var(--bg)' }}>
              <path d="M1.5 4.5h21A1.5 1.5 0 0 1 24 6v12a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 18V6a1.5 1.5 0 0 1 1.5-1.5Zm.9 2.1L12 12.9l9.6-6.3H2.4Zm-.9 1.8V18h21V8.4l-9.03 5.93a1.5 1.5 0 0 1-1.64 0L1.5 8.4Z" />
            </svg>
          </a>
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '22px 6vw', fontSize: 13, opacity: 0.65 }}>
        <span>© 2026 Vaasu Dhand</span>
      </div>
    </footer>
  )
}
