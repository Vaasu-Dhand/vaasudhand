import React from 'react'

interface NavProps {
  toggleTheme: () => void
  toggleMenu: () => void
  closeMenu: () => void
}

export default function Nav({ toggleTheme, toggleMenu, closeMenu }: NavProps) {
  const navStyle: React.CSSProperties = {
    position: 'sticky', top: 0, zIndex: 50,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '20px 6vw',
    background: 'color-mix(in srgb, var(--bg) 82%, transparent)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--line)',
  }

  const links = [
    { label: 'Work', href: '#work' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#/blog' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav style={navStyle}>
      <a
        href="#/"
        style={{ fontFamily: "'Instrument Serif', serif", fontSize: 24, color: 'var(--ink)', letterSpacing: '-0.01em' }}
      >
        Vaasu Dhand
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div id="vd-navlinks" style={{ alignItems: 'center', gap: 30 }}>
          {links.map(({ label, href }) => (
            <a key={href} href={href} onClick={closeMenu} style={{ fontSize: 14, color: 'var(--ink)' }}>{label}</a>
          ))}
        </div>

        <button
          onClick={toggleTheme}
          title="Toggle theme"
          aria-label="Toggle theme"
          data-theme-btn
          style={{
            cursor: 'pointer', width: 40, height: 40, borderRadius: '50%',
            border: '1px solid var(--line)', background: 'var(--surface)',
            color: 'var(--ink)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', padding: 0,
          }}
        >
          <svg data-icon-moon width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          <svg data-icon-sun width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        </button>

        <button
          id="vd-menu-btn"
          onClick={toggleMenu}
          title="Menu"
          aria-label="Menu"
          style={{
            cursor: 'pointer', width: 40, height: 40, borderRadius: '50%',
            border: '1px solid var(--line)', background: 'var(--surface)',
            color: 'var(--ink)', alignItems: 'center',
            justifyContent: 'center', padding: 0,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
