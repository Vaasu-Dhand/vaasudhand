import React, { useEffect, useState } from 'react'

interface Project {
  name: string
  key: string
  tags: string[]
  links: { live?: string; github: string }
  description: string
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch('/json/projects.json')
      .then(r => r.json())
      .then(d => setProjects(d.projects || []))
      .catch(() => {})
  }, [])

  return (
    <section id="projects">
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '12vh 6vw' }}>
        <div data-reveal style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'end', justifyContent: 'space-between', gap: 20, marginBottom: 56 }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 20 }}>
              / Selected work
            </div>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: 'clamp(34px, 5vw, 64px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: 0 }}>
              Projects
            </h2>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
          {projects.map(({ name, key, tags, links: { live, github }, description }) => (
            <div key={name} data-reveal style={{ color: 'var(--ink)', display: 'flex', flexDirection: 'column' }}>
              <div style={{
                position: 'relative', width: '100%', aspectRatio: '4/3',
                borderRadius: 14, overflow: 'hidden',
                border: '1px solid var(--line)', marginBottom: 20,
                background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <video
                  src={`/video/${key}-rec.mov`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loop
                  autoPlay
                  muted
                  playsInline
                  onMouseEnter={e => { (e.currentTarget as HTMLVideoElement).controls = true }}
                  onMouseLeave={e => { (e.currentTarget as HTMLVideoElement).controls = false }}
                />
              </div>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: 25, margin: '0 0 10px', letterSpacing: '-0.01em' }}>
                {name}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.62, color: 'var(--muted)', margin: '0 0 18px' }}>
                {description.replace(/<[^>]+>/g, '')}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 20 }}>
                {tags.map(t => (
                  <span key={t} style={{
                    fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                    letterSpacing: '0.06em', padding: '4px 9px',
                    border: '1px solid var(--line)', borderRadius: 20, color: 'var(--muted)',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 18, marginTop: 'auto' }}>
                {live && <a href={live} target="_blank" rel="noreferrer" style={{ fontSize: 14, color: 'var(--accent)' }}>Live →</a>}
                <a href={github} target="_blank" rel="noreferrer" style={{ fontSize: 14, color: 'var(--ink)', borderBottom: '1px solid var(--line)', paddingBottom: 2 }}>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
