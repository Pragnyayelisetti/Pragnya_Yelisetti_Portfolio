import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '../data/portfolio'

const statuses = ['Deployed', 'Active build', 'Shipped']

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const active = activeIndex !== null ? projects[activeIndex] : null

  return (
    <section id="projects" className="container-page relative overflow-hidden py-24 sm:py-28">
      <div className="crater-glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]" aria-hidden="true" />
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="eyebrow"
      >
        Projects
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-star-50 sm:text-4xl"
      >
        Full-stack builds, end to end.
      </motion.h2>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`project-card group shard-card glass-panel flex flex-col justify-between overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 ${
              i === 0 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
            data-accent={project.accent}
          >
            <div>
              <div className="project-image relative mx-3 mt-3 h-36 overflow-hidden rounded-md border bg-void-950/70 sm:h-40">
                <img
                  src={project.image}
                  alt={`${project.name} AI project illustration`}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void-950/35 via-transparent to-transparent" />
                <span className="project-accent absolute left-3 top-3 rounded-full border bg-void-950/55 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] backdrop-blur-sm">
                  AI Project {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="project-title text-xl font-semibold text-star-50">{project.name}</h3>
                    <span className="mt-1.5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-cosmic-cyan">
                      <span className="status-dot" />
                      {statuses[i % statuses.length]}
                    </span>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} on GitHub`}
                    className="project-github shrink-0 rounded-full border p-2 text-star-300 transition-colors"
                  >
                    <GithubIcon />
                  </a>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-star-300">{project.summary}</p>

                <p className="mt-3 border-l-2 border-cosmic-violet/50 pl-3 text-[13px] leading-relaxed text-star-400">
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-cosmic-violet">
                    PS —{' '}
                  </span>
                  {project.problem}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="project-tech rounded-full border px-2.5 py-1 font-mono text-[11px] text-star-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setActiveIndex(i)}
              className="mx-6 mb-6 mt-2 flex w-fit items-center gap-1.5 text-sm text-cosmic-cyan transition-colors hover:text-cosmic-cyan/80"
            >
              View full breakdown
              <span aria-hidden="true">↗</span>
            </button>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center bg-void-950/70 backdrop-blur-sm sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="hud-frame max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-t-lg border border-void-600 bg-void-800 p-0 sm:rounded-lg"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-void-600/60">
                <img
                  src={active.image}
                  alt={`${active.name} cover illustration`}
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void-800 via-void-800/10 to-transparent" />
                <button
                  onClick={() => setActiveIndex(null)}
                  aria-label="Close"
                  className="absolute right-4 top-4 rounded-full border border-void-600 bg-void-900/70 p-1.5 text-star-300 backdrop-blur hover:text-star-50"
                >
                  ✕
                </button>
              </div>

              <div className="p-7">
                <h3 id="project-modal-title" className="text-2xl font-semibold text-star-50">
                  {active.name}
                </h3>

                <p className="mt-3 border-l-2 border-cosmic-violet/50 pl-3 text-[13.5px] leading-relaxed text-star-300">
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-cosmic-violet">
                    Problem statement —{' '}
                  </span>
                  {active.problem}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {active.stack.map((tech) => (
                    <span
                      key={tech}
                      className="project-tech rounded-full border px-2.5 py-1 font-mono text-[11px] text-star-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-star-400">
                  Full breakdown
                </p>
                <ul className="mt-3 space-y-3">
                  {active.bullets.map((b, idx) => (
                    <li key={idx} className="flex gap-3 text-[14px] leading-relaxed text-star-200">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cosmic-cyan" />
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href={active.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-star-50 px-5 py-2.5 text-sm font-medium text-void-950"
                >
                  View on GitHub
                  <GithubIcon />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  )
}
