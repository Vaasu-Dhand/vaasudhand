import React, { useEffect, useRef, useState } from 'react'

interface AboutData {
  startYear: number
  para1: string
  para2: string
  stats: { label: string; value: string }[]
}

function CountUp({ target }: { target: number }) {
  const [count, setCount] = useState(1)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    if (!ref.current || !('IntersectionObserver' in window)) {
      setCount(target)
      return
    }
    const el = ref.current
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        io.unobserve(el)
        const dur = 1200
        const t0 = performance.now()
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / dur)
          const eased = 1 - Math.pow(1 - p, 3)
          setCount(Math.round(1 + (target - 1) * eased))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.6 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target])

  return <span ref={ref} style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{count}</span>
}

export default function About() {
  const [data, setData] = useState<AboutData | null>(null)

  useEffect(() => {
    fetch('/json/about.json').then(r => r.json()).then(setData).catch(() => {})
  }, [])

  return (
    <section id="about" style={{ maxWidth: 1180, margin: '0 auto', padding: '14vh 6vw' }}>
      <div data-reveal>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 28 }}>
          / About
        </div>
        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: 'clamp(34px, 5.2vw, 74px)', lineHeight: 1.04, letterSpacing: '-0.02em', margin: 0, maxWidth: '19ch' }}>
          <CountUp target={new Date().getFullYear() - (data?.startYear ?? 2019)} /> years turning ideas into things people use.
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '36px 8vw', marginTop: 56, maxWidth: 920 }}>
        <p data-reveal style={{ fontSize: 18, lineHeight: 1.75, color: 'var(--muted)', margin: 0 }}>
          {data?.para1 ?? ''}
        </p>
        <p data-reveal style={{ fontSize: 18, lineHeight: 1.75, color: 'var(--muted)', margin: 0, transitionDelay: '0.08s' }}>
          {data?.para2 ?? ''}
        </p>
      </div>

      <div
        data-reveal
        style={{ display: 'flex', flexWrap: 'wrap', gap: '26px 64px', marginTop: 60, paddingTop: 34, borderTop: '1px solid var(--line)', transitionDelay: '0.12s' }}
      >
        {(data?.stats ?? []).map(({ label, value }) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              {label}
            </span>
            <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22 }}>
              {value}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
