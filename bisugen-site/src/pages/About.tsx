export function About() {
  return (
    <div className="container-base py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold">About Bisugen</h1>
      <p className="mt-3 text-slate-600 max-w-3xl">Bisugen Technologies Pvt. Ltd. builds intelligent systems that help companies scale with confidence. Our multidisciplinary team blends AI research, product thinking, and pragmatic engineering.</p>

      <section className="mt-10 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-semibold">Our story</h2>
          <p className="mt-2 text-slate-600">Founded to bring cutting-edge AI and robust software practices to every business. We focus on outcomes and partner with clients end-to-end.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Vision</h2>
          <p className="mt-2 text-slate-600">Enable organizations to unlock compounding leverage through automation, data-driven decisions, and delightful digital experiences.</p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Team</h2>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-xl border p-6 bg-white">
            <div className="h-16 w-16 rounded-full bg-slate-200" />
            <div className="mt-3 font-medium">Founder & CEO</div>
            <div className="text-sm text-slate-500">AI/Software</div>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <div className="h-16 w-16 rounded-full bg-slate-200" />
            <div className="mt-3 font-medium">Head of Engineering</div>
            <div className="text-sm text-slate-500">Systems</div>
          </div>
          <div className="rounded-xl border p-6 bg-white">
            <div className="h-16 w-16 rounded-full bg-slate-200" />
            <div className="mt-3 font-medium">Design Lead</div>
            <div className="text-sm text-slate-500">Product UX</div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Milestones</h2>
        <ul className="mt-3 space-y-3 text-slate-600">
          <li>2024: Delivered first AI automation suite for enterprise ops</li>
          <li>2025: Launched data platform integrations and advisory practice</li>
        </ul>
      </section>
    </div>
  )
}