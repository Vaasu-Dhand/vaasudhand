import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('revealed'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            en.target.classList.add('revealed')
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )

    const observe = (root: Element | Document) => {
      ;(root instanceof Element ? root : document).querySelectorAll('[data-reveal]').forEach(el => {
        if (!el.classList.contains('revealed')) io.observe(el)
      })
    }

    observe(document)

    // Watch for elements added after async data loads
    const mo = new MutationObserver(() => observe(document))
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
