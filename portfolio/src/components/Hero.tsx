import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/portfolio'
import StatusPill from './StatusPill'
import DuotonePortrait from './DuotonePortrait'

const logLines = [
  { cmd: 'load --user=pragnya_yelisetti', out: 'profile loaded · role: software engineer' },
  { cmd: 'scan --stack', out: 'react · typescript · fastapi · llm systems · ready' },
  { cmd: 'query --recent', out: '3 projects shipped · 1 internship · 900+ problems solved' },
]

function TerminalPanel() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [showOutput, setShowOutput] = useState<boolean[]>([])

  useEffect(() => {
    if (lineIndex >= logLines.length) return
    const current = logLines[lineIndex].cmd

    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 34)
      return () => clearTimeout(t)
    }

    const revealTimer = setTimeout(() => {
      setShowOutput((prev) => {
        const next = [...prev]
        next[lineIndex] = true
        return next
      })
      const advance = setTimeout(() => {
        setLineIndex((l) => l + 1)
        setCharIndex(0)
      }, 550)
      return () => clearTimeout(advance)
    }, 220)

    return () => clearTimeout(revealTimer)
  }, [charIndex, lineIndex])

  return (
    <div
      className="hud-frame glass-panel w-full max-w-sm"
      role="img"
      aria-label="Terminal displaying: profile loaded, software engineer; stack scan, react typescript fastapi llm systems ready; recent activity, three projects shipped, one internship, 900 plus problems solved"
    >
      <div className="flex items-center justify-between border-b border-void-600/60 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-cosmic-rose/50" />
          <span className="h-2 w-2 rounded-full bg-cosmic-amber/50" />
          <span className="h-2 w-2 rounded-full bg-cosmic-cyan/50" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-star-400">
          terminal
        </span>
      </div>
      <div className="min-h-[150px] space-y-2 p-4 font-mono text-[12.5px] leading-relaxed">
        {logLines.slice(0, lineIndex + 1).map((c, i) => (
          <div key={i}>
            <div className="text-star-200">
              <span className="text-cosmic-cyan">$</span>{' '}
              {i === lineIndex ? c.cmd.slice(0, charIndex) : c.cmd}
              {i === lineIndex && charIndex < c.cmd.length && (
                <span className="ml-px inline-block h-3.5 w-[7px] translate-y-[2px] animate-blink bg-cosmic-cyan" />
              )}
            </div>
            {showOutput[i] && (
              <motion.div
                initial={{ opacity: 0, y: -2 }}
                animate={{ opacity: 1, y: 0 }}
                className="pl-4 text-star-400"
              >
                {c.out}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 3v12m0 0 4-4m-4 4-4-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="container-page relative grid gap-16 py-20 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <p className="eyebrow">Software Engineer</p>
            <StatusPill label="Online" />
          </div>

          <h1 className="mt-6 text-[2.35rem] font-semibold leading-[1.1] tracking-tight text-star-50 sm:text-5xl">
            Engineering intelligent
            <br />
            systems for <span className="text-gradient">launch conditions.</span>
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-star-300">
            {profile.name} — a computer science engineer who ships production React interfaces at
            Meridian Data Labs and builds full-stack AI platforms on the side, from
            mock-interview systems to career-guidance tools serving thousands of students.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-star-50 px-6 py-3 text-sm font-medium text-void-950 transition-transform hover:-translate-y-0.5"
            >
              View projects
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-void-600 px-6 py-3 text-sm text-star-100 transition-colors hover:border-cosmic-cyan/60"
            >
              GitHub
            </a>
            <a
              href="/Pragnya_Yelisetti_Resume.pdf"
              download="Pragnya_Yelisetti_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-cosmic-cyan/40 px-6 py-3 text-sm text-cosmic-cyan transition-colors hover:border-cosmic-cyan hover:bg-cosmic-cyan/10"
            >
              <DownloadIcon />
              Download Resume
            </a>
          </div>

          <div className="mt-10 hidden sm:block">
            <TerminalPanel />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex justify-center lg:justify-end"
        >
          <DuotonePortrait className="h-64 w-64 sm:h-80 sm:w-80 lg:h-[380px] lg:w-[380px]" />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="hud-frame glass-panel absolute -bottom-6 left-1/2 w-[86%] -translate-x-1/2 px-5 py-3.5 sm:left-0 sm:w-64 sm:translate-x-0"
          >
            <p className="module-tag">Role</p>
            <p className="mt-0.5 text-[15px] font-semibold text-star-50">{profile.name}</p>
            <p className="mt-1 text-[12px] text-star-400">Software Engineer</p>
          </motion.div>
        </motion.div>

        <div className="mt-2 sm:hidden">
          <TerminalPanel />
        </div>
      </div>
    </section>
  )
}
