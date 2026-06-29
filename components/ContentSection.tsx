export default function ContentSection({ children }: { children: React.ReactNode }) {
  return (
    <article className="max-w-3xl mx-auto px-6 md:px-10 py-20 prose-gse">
      {children}
    </article>
  )
}
