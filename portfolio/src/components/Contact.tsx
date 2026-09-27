import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/portfolio'

type Status = 'idle' | 'sending' | 'sent' | 'error'

// Reads from a .env file — see .env.example for setup instructions.
// Without these set, the form still works: it falls back to opening the
// visitor's mail app with the message pre-filled.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined
const isEmailJsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

export default function Contact() {
  const [name, setName] = useState('')
  const [fromEmail, setFromEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const openMailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio message from ${name || 'a visitor'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${fromEmail})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !fromEmail.trim() || !message.trim()) return

    if (!isEmailJsConfigured) {
      // No EmailJS keys configured yet — send via the visitor's mail app instead.
      openMailtoFallback()
      return
    }

    setStatus('sending')
    setErrorMsg('')
    try {
      const emailjs = (await import('@emailjs/browser')).default
      await emailjs.send(
        SERVICE_ID as string,
        TEMPLATE_ID as string,
        {
          from_name: name,
          from_email: fromEmail,
          message,
          to_email: profile.email,
        },
        { publicKey: PUBLIC_KEY as string },
      )
      setStatus('sent')
      setName('')
      setFromEmail('')
      setMessage('')
    } catch (err) {
      console.error(err)
      setStatus('error')
      setErrorMsg('Could not send automatically — opening your mail app instead.')
      openMailtoFallback()
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden container-page py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="hud-frame relative overflow-hidden rounded-lg border border-void-600/60 bg-void-800/60 px-6 py-14 sm:px-12 sm:py-16"
      >
        <div
          className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full bg-cosmic-cyan/10 blur-[110px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-md text-center">
          <p className="eyebrow justify-center">Contact</p>
          <h2 className="mx-auto mt-3 max-w-xl text-3xl font-semibold tracking-tight text-star-50 sm:text-4xl">
            Open to frontend and full-stack opportunities.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-star-300">
            Send a message directly — it lands in my inbox, no email app required.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-panel relative mx-auto mt-10 flex max-w-md flex-col gap-4 rounded-md p-6 text-left sm:p-8"
        >
          <div>
            <label htmlFor="name" className="module-tag">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="mt-1.5 w-full rounded-md border border-void-600 bg-void-900/70 px-4 py-2.5 text-[14px] text-star-100 outline-none transition-colors placeholder:text-star-400 focus:border-cosmic-cyan/60"
            />
          </div>

          <div>
            <label htmlFor="email" className="module-tag">
              Your email
            </label>
            <input
              id="email"
              type="email"
              required
              value={fromEmail}
              onChange={(e) => setFromEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1.5 w-full rounded-md border border-void-600 bg-void-900/70 px-4 py-2.5 text-[14px] text-star-100 outline-none transition-colors placeholder:text-star-400 focus:border-cosmic-cyan/60"
            />
          </div>

          <div>
            <label htmlFor="message" className="module-tag">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What would you like to talk about?"
              className="mt-1.5 w-full resize-none rounded-md border border-void-600 bg-void-900/70 px-4 py-2.5 text-[14px] text-star-100 outline-none transition-colors placeholder:text-star-400 focus:border-cosmic-cyan/60"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-star-50 px-6 py-3 text-sm font-medium text-void-950 transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'sent' && (
            <p className="text-center text-[13px] text-cosmic-cyan">
              Sent — thanks for reaching out, I'll reply soon.
            </p>
          )}
          {status === 'error' && <p className="text-center text-[13px] text-cosmic-amber">{errorMsg}</p>}
        </form>

        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-void-600 px-6 py-3 text-sm text-star-100 transition-colors hover:border-cosmic-cyan/60"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            className="rounded-full border border-void-600 px-6 py-3 text-sm text-star-100 transition-colors hover:border-cosmic-cyan/60"
          >
            {profile.phone}
          </a>
        </div>

        <div className="relative mt-8 flex items-center justify-center gap-6 font-mono text-sm text-star-400">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-star-100">
            LinkedIn
          </a>
          <span aria-hidden="true">·</span>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-star-100">
            GitHub
          </a>
        </div>
      </motion.div>

      <footer className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-void-700/60 pt-8 text-xs text-star-400 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React, TypeScript & Framer Motion</p>
      </footer>
      <p className="mx-auto mt-3 max-w-lg text-center text-[10px] leading-relaxed text-star-400/70">
        Space photography: NASA, ESA & the Hubble Heritage Team (STScI/AURA) — public domain, via
        Wikimedia Commons.
      </p>
    </section>
  )
}
