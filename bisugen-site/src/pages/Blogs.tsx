import { useEffect, useState } from 'react'

type BlogItem = {
  id: string
  title: string
  summary: string
  url?: string
}

export function Blogs() {
  const [blogs, setBlogs] = useState<BlogItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const endpoint = import.meta.env.VITE_BLOGS_ENDPOINT as string | undefined
    if (!endpoint) {
      setError('Blog source not configured')
      setLoading(false)
      return
    }
    ;(async () => {
      try {
        const res = await fetch(endpoint)
        if (!res.ok) throw new Error('Failed to load')
        const data = await res.json()
        // Expecting array of { id, title, summary, url }
        setBlogs(Array.isArray(data) ? data : data.items || [])
      } catch (e: any) {
        setError(e.message || 'Error loading blogs')
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <div className="container-base py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Blogs</h1>
      <p className="mt-3 text-slate-600">Insights and updates from our team.</p>
      <div className="mt-8">
        {loading && <div className="text-slate-600">Loading...</div>}
        {error && <div className="text-red-600">{error}</div>}
        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((b) => (
            <article key={b.id} className="rounded-xl border p-6 bg-white">
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{b.summary}</p>
              {b.url && (
                <a className="mt-3 inline-block text-blue-700 font-medium" href={b.url} target="_blank" rel="noreferrer">Read more →</a>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}