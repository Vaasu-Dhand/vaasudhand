import React, { useEffect, useState } from 'react'

interface Cert {
  issuer: string
  title: string
  year: string
  tint: string
  file: string
  preview: string
}

function CertCard({ cert }: { cert: Cert }) {
  return (
    <a
      href={cert.file}
      target="_blank"
      rel="noreferrer"
      className="cert-card"
    >
      <div style={{ width: '100%', aspectRatio: '297/210', borderRadius: 4, overflow: 'hidden', background: '#f0ede6' }}>
        <img
          src={cert.preview}
          alt={`${cert.issuer} — ${cert.title}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginTop: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, minWidth: 0 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: cert.tint, flexShrink: 0, display: 'block' }} />
          <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 16, color: '#1B1917', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {cert.title}
          </span>
        </div>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#6E675C', flexShrink: 0 }}>
          {cert.year}
        </span>
      </div>
    </a>
  )
}

export default function Certifications() {
  const [certs, setCerts] = useState<Cert[]>([])

  useEffect(() => {
    fetch('/json/certifications.json').then(r => r.json()).then(setCerts).catch(() => {})
  }, [])

  if (!certs.length) return null

  const row1 = [...certs, ...certs] // duplicate for seamless loop

  return (
    <section id="certifications" style={{ background: 'var(--surface)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '12vh 0' }}>

        <div data-reveal style={{ padding: '0 6vw', marginBottom: 52 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 20 }}>
            / Certifications
          </div>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: 'clamp(34px, 5vw, 64px)', lineHeight: 1.02, letterSpacing: '-0.02em', margin: 0 }}>
            On the wall
          </h2>
        </div>

        <div data-reveal className="cert-track" style={{ overflow: 'hidden', paddingBlock: 20, marginBlock: -20 }}>
          <div className="cert-row cert-row-left">
            {row1.map((cert, i) => <CertCard key={i} cert={cert} />)}
          </div>
        </div>

      </div>
    </section>
  )
}
