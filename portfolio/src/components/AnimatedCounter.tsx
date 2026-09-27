import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/** Parses strings like "900+", "1700+", "4★", "270" into a numeric target + suffix. */
function parseStat(stat: string): { target: number; prefix: string; suffix: string } {
  const match = stat.match(/^(\D*)(\d+)(\D*)$/)
  if (!match) return { target: 0, prefix: '', suffix: stat }
  const [, prefix, num, suffix] = match
  return { target: parseInt(num, 10), prefix, suffix }
}

export default function AnimatedCounter({ stat }: { stat: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [display, setDisplay] = useState(0)
  const { target, prefix, suffix } = parseStat(stat)

  useEffect(() => {
    if (!inView) return
    const duration = 1100
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
