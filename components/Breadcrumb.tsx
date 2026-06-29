export default function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <div className="bg-ink px-6 md:px-10 pt-20">
      <div className="max-w-7xl mx-auto py-3 text-xs text-white/35">
        {items.map((item, i) => (
          <span key={i}>
            {item.href ? (
              <a href={item.href} className="hover:text-green transition-colors">{item.label}</a>
            ) : (
              <span className="text-white/60">{item.label}</span>
            )}
            {i < items.length - 1 && <span className="mx-2">›</span>}
          </span>
        ))}
      </div>
    </div>
  )
}
