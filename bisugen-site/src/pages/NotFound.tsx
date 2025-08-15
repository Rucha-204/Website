import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="container-base py-24 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-2 text-slate-600">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 inline-flex rounded-md bg-blue-700 px-5 py-3 text-white hover:bg-blue-800">Go home</Link>
    </div>
  )
}