import React, { FormEventHandler, useState } from 'react'

const INPUT_STYLE: React.CSSProperties = {
  fontFamily: "'Instrument Sans', sans-serif", fontSize: 16,
  color: 'var(--ink)', background: 'var(--surface)',
  border: '1px solid var(--line)', borderRadius: 10,
  padding: '13px 15px', outline: 'none', width: '100%',
  transition: 'border-color 0.25s',
}

const LABEL_STYLE: React.CSSProperties = {
  display: 'flex', flexDirection: 'column', gap: 8,
  fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
  letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)',
}

export default function Contact() {
  const [status, setStatus] = useState<'' | 'sent' | 'error'>('')

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" style={{ maxWidth: 1400, margin: '0 auto', padding: '14vh 6vw 10vh' }}>
      <div id="vd-contact-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '7vw', alignItems: 'start' }}>
        <div data-reveal>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 26 }}>
            / Contact
          </div>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: 'clamp(40px, 6vw, 84px)', lineHeight: 0.98, letterSpacing: '-0.025em', margin: '0 0 30px', maxWidth: '13ch' }}>
            Let's build something{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>good</span>.
          </h2>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          data-reveal
          style={{ display: 'flex', flexDirection: 'column', gap: 16, transitionDelay: '0.1s' }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <label style={LABEL_STYLE}>
            Name
            <input type="text" name="name" required placeholder="Your name" style={INPUT_STYLE} />
          </label>
          <label style={LABEL_STYLE}>
            Email
            <input type="email" name="email" required placeholder="you@email.com" style={INPUT_STYLE} />
          </label>
          <label style={LABEL_STYLE}>
            Message
            <textarea name="message" rows={4} required placeholder="Tell me about your project" style={{ ...INPUT_STYLE, resize: 'vertical' }} />
          </label>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <button
              type="submit"
              style={{
                background: 'var(--ink)', color: 'var(--bg)', border: 'none',
                padding: '14px 30px', borderRadius: 30, fontSize: 15,
                fontFamily: "'Instrument Sans', sans-serif", cursor: 'pointer',
              }}
            >
              Send message →
            </button>
            {status === 'sent' && (
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--accent)' }}>
                Thanks — I'll be in touch soon.
              </span>
            )}
            {status === 'error' && (
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: 'var(--accent)' }}>
                Something went wrong, try again.
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
