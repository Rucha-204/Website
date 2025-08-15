import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { useState } from 'react'
import './index.css'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Blogs } from './pages/Blogs'
import { Contact } from './pages/Contact'
import { NotFound } from './pages/NotFound'

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <BrowserRouter>
      <div className="min-h-dvh flex flex-col">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
          <div className="container-base flex items-center justify-between h-16">
            <NavLink to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
              <span className="text-xl font-bold text-blue-700">Bisugen Technologies</span>
            </NavLink>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <NavLink to="/" className={({ isActive }) => `hover:text-blue-700 ${isActive ? 'text-blue-700' : 'text-slate-700'}`}>Home</NavLink>
              <NavLink to="/about" className={({ isActive }) => `hover:text-blue-700 ${isActive ? 'text-blue-700' : 'text-slate-700'}`}>About</NavLink>
              <NavLink to="/services" className={({ isActive }) => `hover:text-blue-700 ${isActive ? 'text-blue-700' : 'text-slate-700'}`}>Services</NavLink>
              <NavLink to="/blogs" className={({ isActive }) => `hover:text-blue-700 ${isActive ? 'text-blue-700' : 'text-slate-700'}`}>Blogs</NavLink>
              <NavLink to="/contact" className={({ isActive }) => `hover:text-blue-700 ${isActive ? 'text-blue-700' : 'text-slate-700'}`}>Contact</NavLink>
            </nav>
            <button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-300 px-3 py-2 text-slate-800" onClick={() => setMobileOpen((v) => !v)}>
              ☰
            </button>
          </div>
          {mobileOpen && (
            <div className="md:hidden border-t border-slate-200 bg-white">
              <div className="container-base py-3 flex flex-col gap-3 text-sm">
                <NavLink to="/" onClick={() => setMobileOpen(false)} className={({ isActive }) => `hover:text-blue-700 ${isActive ? 'text-blue-700' : 'text-slate-700'}`}>Home</NavLink>
                <NavLink to="/about" onClick={() => setMobileOpen(false)} className={({ isActive }) => `hover:text-blue-700 ${isActive ? 'text-blue-700' : 'text-slate-700'}`}>About</NavLink>
                <NavLink to="/services" onClick={() => setMobileOpen(false)} className={({ isActive }) => `hover:text-blue-700 ${isActive ? 'text-blue-700' : 'text-slate-700'}`}>Services</NavLink>
                <NavLink to="/blogs" onClick={() => setMobileOpen(false)} className={({ isActive }) => `hover:text-blue-700 ${isActive ? 'text-blue-700' : 'text-slate-700'}`}>Blogs</NavLink>
                <NavLink to="/contact" onClick={() => setMobileOpen(false)} className={({ isActive }) => `hover:text-blue-700 ${isActive ? 'text-blue-700' : 'text-slate-700'}`}>Contact</NavLink>
              </div>
            </div>
          )}
        </header>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="border-t border-slate-200 bg-slate-50">
          <div className="container-base py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} Bisugen Technologies Pvt. Ltd.</div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-blue-700">Privacy</a>
              <a href="#" className="hover:text-blue-700">Terms</a>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
