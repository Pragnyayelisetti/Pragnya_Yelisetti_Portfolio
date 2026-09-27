import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden border-t border-void-700/60 bg-transparent py-24 sm:py-28">
      <div className="container-page relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-star-50 sm:text-4xl"
        >
          The stack I reach for by default.
        </motion.h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-void-600/60 bg-void-600/40 sm:grid-cols-2 lg:grid-cols-5">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="shard-card group bg-void-900/55 p-6 transition-colors hover:bg-void-800"
            >
              <h3 className="font-mono text-[13px] uppercase tracking-[0.08em] text-cosmic-cyan">{group.category}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-[14px] text-star-200">
                    {item}
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
