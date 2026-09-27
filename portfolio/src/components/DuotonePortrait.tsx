export default function DuotonePortrait({ className = 'h-56 w-56' }: { className?: string }) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <div className="absolute inset-[-3%] rounded-full bg-gradient-to-br from-cosmic-blue/30 via-cosmic-violet/25 to-cosmic-cyan/30 opacity-70 blur-md" />
      <div className="relative h-full w-full overflow-hidden rounded-full border border-void-600/70 bg-void-800 shadow-glow-blue">
        <img
          src="/images/pragnya.jpg"
          alt="Pragnya Yelisetti"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
