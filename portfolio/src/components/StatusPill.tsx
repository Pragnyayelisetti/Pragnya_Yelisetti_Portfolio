export default function StatusPill({ label = 'ONLINE' }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-void-600/70 bg-void-800/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-star-300">
      <span className="status-dot" />
      {label}
    </span>
  )
}
