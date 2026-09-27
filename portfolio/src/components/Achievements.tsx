import { motion } from 'framer-motion'
import { achievements, extracurricular } from '../data/portfolio'
import AnimatedCounter from './AnimatedCounter'

export default function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden container-page py-24 sm:py-28">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="eyebrow"
      >
        Achievements
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-star-50 sm:text-4xl"
      >
        Measured in problems solved.
      </motion.h2>

      <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-void-600/60 bg-void-600/25 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <motion.a
            key={a.label}
            href={a.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="shard-card group bg-void-900/45 p-7 transition-colors hover:bg-void-800"
          >
            <div className="font-display text-4xl font-semibold text-star-50 transition-colors group-hover:text-cosmic-cyan">
              <AnimatedCounter stat={a.stat} />
            </div>
            <p className="mt-2 text-sm text-star-300">{a.label}</p>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="mt-10 grid gap-4 sm:grid-cols-2"
      >
        {extracurricular.map((item, i) => (
          <div key={i} className="rounded-md border border-void-600/60 bg-void-800/35 p-5 text-[14px] leading-relaxed text-star-300">
            {item}
          </div>
        ))}
      </motion.div>
    </section>
  )
}
