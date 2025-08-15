import { Link } from 'react-router-dom'
import { FaRobot, FaGlobe, FaCogs, FaBrain, FaStar } from 'react-icons/fa'

export function Home() {
  return (
    <div>
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container-base py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
                Bisugen Technologies
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                We build intelligent software and automations that accelerate your business.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-3 text-white font-medium hover:bg-blue-800">Get Started</Link>
                <Link to="/services" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-slate-800 font-medium hover:bg-slate-50">Our Services</Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl bg-blue-100/60 border border-blue-200 shadow-inner" />
              <div className="absolute -z-10 -top-6 -right-6 h-40 w-40 blur-3xl bg-blue-200 rounded-full opacity-60" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-base py-16">
        <h2 className="text-2xl md:text-3xl font-bold">What we do</h2>
        <p className="mt-2 text-slate-600">Expertise across automation and full-stack engineering.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm">
            <FaRobot className="text-blue-700 text-2xl" />
            <h3 className="mt-4 font-semibold">AI Automation</h3>
            <p className="mt-2 text-sm text-slate-600">Streamline workflows with intelligent agents and RPA.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm">
            <FaGlobe className="text-blue-700 text-2xl" />
            <h3 className="mt-4 font-semibold">Web Development</h3>
            <p className="mt-2 text-sm text-slate-600">Modern, performant websites and web apps.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm">
            <FaCogs className="text-blue-700 text-2xl" />
            <h3 className="mt-4 font-semibold">Software Development</h3>
            <p className="mt-2 text-sm text-slate-600">Reliable, scalable systems tailored to your needs.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm">
            <FaBrain className="text-blue-700 text-2xl" />
            <h3 className="mt-4 font-semibold">AI Consultancy</h3>
            <p className="mt-2 text-sm text-slate-600">Strategy, evaluation, and implementation guidance.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-base py-16">
          <h2 className="text-2xl md:text-3xl font-bold">About us</h2>
          <p className="mt-2 text-slate-600 max-w-3xl">We are a team of engineers and designers passionate about delivering high-impact, AI-powered solutions with a focus on quality and speed.</p>
        </div>
      </section>

      <section className="container-base py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Testimonials</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm">
            <FaStar className="text-yellow-500" />
            <p className="mt-2 text-slate-700">“Bisugen helped us automate mission-critical operations, saving hundreds of hours per month.”</p>
            <div className="mt-3 text-sm text-slate-500">COO, Retail Startup</div>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm">
            <FaStar className="text-yellow-500" />
            <p className="mt-2 text-slate-700">“Their engineering quality and velocity exceeded expectations.”</p>
            <div className="mt-3 text-sm text-slate-500">CTO, SaaS Company</div>
          </div>
        </div>
      </section>
    </div>
  )
}