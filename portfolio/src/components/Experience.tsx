import { motion } from 'framer-motion'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden border-t border-void-700/60 bg-transparent py-24 sm:py-28">
      <div className="container-page relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-star-50 sm:text-4xl"
        >
          Shipping in production.
        </motion.h2>

        <div className="mt-14 space-y-8">
          {experience.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="shard-card glass-panel grid gap-6 p-7 sm:grid-cols-[1fr_2fr]"
            >
              <div>
                <h3 className="text-lg font-semibold text-star-50">{job.role}</h3>
                <a
                  href={job.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-sm text-cosmic-cyan hover:underline"
                >
                  {job.org}
                </a>
                <p className="mt-3 font-mono text-xs text-star-400">{job.type}</p>
              </div>

              <ul className="space-y-3 border-t border-void-600/50 pt-5 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
                {job.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-3 text-[14px] leading-relaxed text-star-200">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cosmic-violet" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
