import React, { CSSProperties, useEffect, useState } from 'react'

interface Role {
  title: string
  dates: string
  dur: string
  summary: string
  skills: string[]
}

interface Company {
  company: string
  idx: string
  location: string
  duration: string
  logo: string
  bg: string
  ink: string
  mut: string
  roles: Role[]
}

export default function Experience() {
  const [experience, setExperience] = useState<Company[]>([])

  useEffect(() => {
    fetch('/json/experience.json').then(r => r.json()).then(setExperience).catch(() => {})
  }, [])

  return (
    <section id="work" style={{ background: 'var(--surface)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '12vh 6vw' }}>
      <div data-reveal style={{ marginBottom: 64 }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 20 }}>
          / Experience
        </div>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: 'clamp(34px, 5vw, 64px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: 0 }}>
          Where I've worked
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {experience.map((co) => (
          <div
            key={co.company}
            data-flood
            data-reveal
            style={{
              '--flood': co.bg,
              '--flood-ink': co.ink,
              '--flood-mut': co.mut,
              position: 'relative', overflow: 'hidden',
              border: '1px solid var(--line)', borderRadius: 18,
              background: 'var(--surface)', padding: '34px 32px',
              cursor: 'default', transition: 'background 0.55s cubic-bezier(0.4, 0, 0.1, 1)',
            } as CSSProperties}
          >
            <span
              data-ghost
              style={{
                position: 'absolute', right: 26, top: '50%', transform: 'translateY(-50%)',
                fontFamily: "'Instrument Serif', serif", fontSize: 180, lineHeight: 1,
                opacity: 0, color: 'var(--flood-ink)', pointerEvents: 'none',
              } as CSSProperties}
            >
              {co.idx}
            </span>

            <div style={{ position: 'relative', display: 'flex', gap: 24, alignItems: 'flex-start' }}>
              <div
                data-logoimg
                role="img"
                aria-label={`${co.company} logo`}
                style={{
                  flex: 'none', width: 64, height: 64, borderRadius: 15,
                  background: `#fff url('${co.logo}') center/cover no-repeat`,
                  boxShadow: '0 6px 20px -8px rgba(0,0,0,0.3)',
                }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '8px 16px' }}>
                  <h3
                    data-dim
                    style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: 32, margin: 0, letterSpacing: '-0.015em', color: 'var(--ink)' } as CSSProperties}
                  >
                    {co.company}
                  </h3>
                  <span data-mut style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--muted)' } as CSSProperties}>
                    {co.location} · {co.duration}
                  </span>
                </div>

                <div data-rolewrap>
                  <div style={{ paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 18 }}>
                    {co.roles.map((role) => (
                      <div key={role.title} style={{ borderLeft: '2px solid var(--flood-mut)', paddingLeft: 18 } as CSSProperties}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '6px 12px' }}>
                          <span data-dim style={{ fontSize: 16, fontWeight: 600, color: 'var(--ink)' } as CSSProperties}>
                            {role.title}
                          </span>
                          <span data-mut style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--muted)' } as CSSProperties}>
                            {role.dates} · {role.dur}
                          </span>
                        </div>
                        <p data-mut style={{ fontSize: 14, lineHeight: 1.6, margin: '8px 0 12px', maxWidth: '68ch', color: 'var(--muted)' } as CSSProperties}>
                          {role.summary}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                          {role.skills.map(sk => (
                            <span
                              key={sk}
                              data-chip
                              style={{
                                fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                                letterSpacing: '0.04em', padding: '4px 10px',
                                border: '1px solid var(--line)', borderRadius: 20, color: 'var(--muted)',
                              } as CSSProperties}
                            >
                              {sk}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div data-hint data-mut style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--muted)', marginTop: 14 } as CSSProperties}>
                  Hover to expand →
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
