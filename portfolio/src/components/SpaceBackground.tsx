import { useEffect, useRef } from 'react'

/**
 * Minimal animated backdrop.
 * No galaxy, planets, nebula images, grids, or decorative background art.
 * Only a clean dark field with slow-moving/twinkling stars and occasional
 * colorful shooting stars.
 */
export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let width = 0
    let height = 0
    let raf = 0
    let frame = 0

    type Star = {
      x: number
      y: number
      r: number
      alpha: number
      phase: number
      speed: number
      drift: number
      hue: string
    }

    type ShootingStar = {
      x: number
      y: number
      len: number
      angle: number
      speed: number
      life: number
      maxLife: number
      color: string
    }

    let stars: Star[] = []
    let shootingStars: ShootingStar[] = []
    let nextShootAt = 160

    const starColors = ['#ffffff', '#67e8f9', '#c084fc', '#f9a8d4', '#fde68a', '#93c5fd']

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.max(90, Math.round(width * height * 0.000075))
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.05 + 0.25,
        alpha: Math.random() * 0.55 + 0.25,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.8 + 0.2,
        drift: Math.random() * 0.035 + 0.008,
        hue: starColors[Math.floor(Math.random() * starColors.length)],
      }))
    }

    const draw = () => {
      frame++
      ctx.clearRect(0, 0, width, height)

      // Tiny drifting stars — the only persistent background decoration.
      for (const star of stars) {
        const twinkle = reduceMotion
          ? 1
          : 0.5 + 0.5 * Math.sin(star.phase + frame * 0.012 * star.speed)

        ctx.globalAlpha = Math.min(0.9, star.alpha * twinkle)
        ctx.fillStyle = star.hue
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)
        ctx.fill()

        if (!reduceMotion) {
          star.y += star.drift
          if (star.y > height + 2) {
            star.y = -2
            star.x = Math.random() * width
          }
        }
      }

      ctx.globalAlpha = 1

      // Occasional slow, colorful shooting stars.
      if (!reduceMotion) {
        if (frame >= nextShootAt) {
          shootingStars.push({
            x: Math.random() * width * 0.75 + width * 0.1,
            y: Math.random() * height * 0.35,
            len: Math.random() * 75 + 55,
            angle: Math.PI / 4 * (Math.random() * 0.35 + 0.9),
            speed: Math.random() * 5 + 7,
            life: 0,
            maxLife: 38,
            color: starColors[1 + Math.floor(Math.random() * 5)],
          })
          nextShootAt = frame + 260 + Math.random() * 500
        }

        shootingStars = shootingStars.filter((s) => s.life < s.maxLife)

        for (const star of shootingStars) {
          const progress = star.life / star.maxLife
          const alpha = progress < 0.15
            ? progress / 0.15
            : 1 - (progress - 0.15) / 0.85

          const dx = Math.cos(star.angle) * star.speed
          const dy = Math.sin(star.angle) * star.speed
          const tailX = star.x - dx * (star.len / star.speed)
          const tailY = star.y - dy * (star.len / star.speed)

          const grad = ctx.createLinearGradient(star.x, star.y, tailX, tailY)
          const hex = star.color.replace('#', '')
          const rr = parseInt(hex.slice(0, 2), 16)
          const gg = parseInt(hex.slice(2, 4), 16)
          const bb = parseInt(hex.slice(4, 6), 16)
          grad.addColorStop(0, `rgba(${rr},${gg},${bb},${0.9 * alpha})`)
          grad.addColorStop(1, 'rgba(255,255,255,0)')

          ctx.strokeStyle = grad
          ctx.lineWidth = 1.4
          ctx.beginPath()
          ctx.moveTo(star.x, star.y)
          ctx.lineTo(tailX, tailY)
          ctx.stroke()

          star.x += dx
          star.y += dy
          star.life++
        }
      }

      raf = requestAnimationFrame(draw)
    }

    resize()
    raf = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#05060b]"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  )
}
