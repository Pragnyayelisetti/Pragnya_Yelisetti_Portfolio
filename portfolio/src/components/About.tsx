import { motion } from 'framer-motion'

const facts = [
  { label: 'Based in', value: 'Andhra Pradesh, India' },
  { label: 'Currently', value: 'Frontend Developer Intern, Meridian Data Labs' },
  { label: 'Studying', value: 'B.Tech CSE, Aditya University · CGPA 9.38/10' },
  { label: 'Graduating', value: 'May 2028' },
]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden container-page py-24 sm:py-28">
      <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">About</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-star-50 sm:text-4xl">
            I like turning ambiguous ideas into working software.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5 text-[15px] leading-relaxed text-star-300"
        >
          <p>
            I'm a third-year computer science engineering student who spends most of my time in
            React and TypeScript, and the rest of it wiring FastAPI backends to large language
            models. At Meridian Data Labs, I build production UI for internal ML tooling; outside
            of work, I design and ship full-stack platforms end to end — from architecture to the
            last pixel.
          </p>
          <p>
            I'm equally drawn to competitive programming, which is where the habit of writing
            precise, well-tested code actually came from — 900+ problems across LeetCode,
            Codeforces, CodeChef, and Code360 have a way of teaching that.
          </p>

          <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-void-600/50 pt-6 sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="font-mono text-xs text-star-400">{f.label}</dt>
                <dd className="mt-1 text-sm text-star-100">{f.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
