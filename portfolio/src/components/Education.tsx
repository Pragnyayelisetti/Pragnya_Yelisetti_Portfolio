import { motion } from 'framer-motion'
import { certifications, education } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden border-t border-void-700/60 bg-transparent py-24 sm:py-28">
      <div className="container-page relative grid gap-16 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            Education
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 text-3xl font-semibold tracking-tight text-star-50 sm:text-4xl"
          >
            Academic record.
          </motion.h2>

          <div className="mt-10 space-y-6 border-l border-void-600/60 pl-6">
            {education.map((ed, i) => (
              <motion.div
                key={ed.school}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-cosmic-cyan bg-void-900" />
                <p className="font-mono text-xs text-star-400">{ed.period}</p>
                <h3 className="mt-1 text-[15px] font-medium text-star-50">{ed.school}</h3>
                <p className="mt-1 text-sm text-star-300">
                  {ed.detail} · {ed.score}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            Certifications
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 text-3xl font-semibold tracking-tight text-star-50 sm:text-4xl"
          >
            Credentials.
          </motion.h2>

          <ul className="mt-10 divide-y divide-void-600/50 border-y border-void-600/50">
            {certifications.map((cert, i) => (
              <motion.li
                key={cert.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-4 py-3.5 text-[14px] text-star-200 transition-colors hover:text-cosmic-cyan"
                >
                  <span>{cert.name}</span>
                  <span className="shrink-0 font-mono text-xs text-star-400">{cert.issuer}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
