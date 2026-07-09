import React, { useEffect, useState } from 'react'

export default function Marquee() {
  const [skills, setSkills] = useState<string[]>([])

  useEffect(() => {
    fetch('/json/meta.json')
      .then(r => r.json())
      .then(d => setSkills(d.skills || []))
      .catch(() => {})
  }, [])

  if (!skills.length) return null

  const doubled = [...skills, ...skills]

  return (
    <div style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', overflow: 'hidden', padding: '18px 0' }}>
      <div style={{
        display: 'flex', gap: 44, width: 'max-content',
        animation: 'marquee 30s linear infinite',
        fontFamily: "'JetBrains Mono', monospace", fontSize: 15,
        color: 'var(--muted)', whiteSpace: 'nowrap',
      }}>
        {doubled.map((s, i) => (
          <React.Fragment key={i}>
            <span>{s}</span>
            <span style={{ color: 'var(--accent)' }}>·</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
