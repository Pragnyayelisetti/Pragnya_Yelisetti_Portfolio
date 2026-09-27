import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import StatusPill from './StatusPill'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'border-b border-void-600/50 bg-void-950/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-sm font-semibold tracking-tight text-star-50">
          PY<span className="text-cosmic-violet">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-star-300 transition-colors hover:text-star-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <StatusPill label="Online" />
          <a
            href="/Pragnya_Yelisetti_Resume.pdf"
            download="Pragnya_Yelisetti_Resume.pdf"
            className="text-sm text-star-300 transition-colors hover:text-cosmic-cyan"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="rounded-full border border-void-600 px-4 py-2 text-sm text-star-100 transition-colors hover:border-cosmic-cyan/60 hover:text-white"
          >
            Contact
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`h-px w-5 bg-star-100 transition-transform duration-300 ${
              open ? 'translate-y-[6px] rotate-45' : ''
            }`}
          />
          <span className={`h-px w-5 bg-star-100 transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span
            className={`h-px w-5 bg-star-100 transition-transform duration-300 ${
              open ? '-translate-y-[6px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-void-600/50 bg-void-950/95 md:hidden"
          >
            {links.map((link) => (
              <li key={link.href} className="border-b border-void-700/60">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-5 py-3.5 text-sm text-star-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Pragnya_Yelisetti_Resume.pdf"
                download="Pragnya_Yelisetti_Resume.pdf"
                className="block px-5 py-3.5 text-sm text-cosmic-cyan"
              >
                Download Resume
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
