import { FaRobot, FaGlobe, FaCogs, FaBrain } from 'react-icons/fa'

const services = [
  { icon: FaRobot, title: 'AI Automation', desc: 'Custom agents, workflow automation, and RPA.' },
  { icon: FaGlobe, title: 'Web Development', desc: 'Responsive, SEO-friendly sites and apps.' },
  { icon: FaCogs, title: 'Software Development', desc: 'API design, microservices, integrations.' },
  { icon: FaBrain, title: 'AI Consultancy', desc: 'Strategy, evaluation, and implementation.' },
]

export function Services() {
  return (
    <div className="container-base py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Services</h1>
      <p className="mt-3 text-slate-600 max-w-2xl">We partner across the lifecycle—strategy to delivery—to unlock automation and build reliable products.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm">
            <Icon className="text-blue-700 text-2xl" />
            <div className="mt-4 font-semibold">{title}</div>
            <p className="mt-2 text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}