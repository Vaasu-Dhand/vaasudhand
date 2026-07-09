import React, { useEffect, useState } from 'react'
import { Nav, Hero, Marquee, About, Experience, Projects, Certifications, Contact, Footer, Blog } from './components'
import { useScrollReveal } from './hooks'

type Theme = 'light' | 'dark'

function HomeView() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </>
  )
}

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    try { return (localStorage.getItem('vd-theme') as Theme) || 'light' } catch { return 'light' }
  })
  const [view, setView] = useState<'home' | 'blog'>('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useScrollReveal()

  useEffect(() => {
    const apply = () => {
      setView(location.hash.includes('/blog') ? 'blog' : 'home')
      setMenuOpen(false)
    }
    window.addEventListener('hashchange', apply)
    apply()
    return () => window.removeEventListener('hashchange', apply)
  }, [])

  const toggleTheme = () => {
    setTheme(prev => {
      const next: Theme = prev === 'light' ? 'dark' : 'light'
      try { localStorage.setItem('vd-theme', next) } catch {}
      return next
    })
  }

  const toggleMenu = () => setMenuOpen(prev => !prev)

  return (
    <div id="vd-site" data-theme={theme} {...(menuOpen ? { 'data-menu': 'open' } : {})}>
      <Nav toggleTheme={toggleTheme} toggleMenu={toggleMenu} closeMenu={() => setMenuOpen(false)} />
      {view === 'home' ? <HomeView /> : <Blog />}
    </div>
  )
}

export default App
