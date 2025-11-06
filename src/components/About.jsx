export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">About</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            I'm Ahmad Faisal, a full‑stack JavaScript developer who loves crafting interactive, delightful experiences. I blend
            design sense with engineering rigor to ship reliable products. Whether it's a blazing fast SPA, a content‑rich
            site, or a scalable API, I aim for clear architecture, clean code, and friendly UX.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="font-semibold text-slate-900">Frontend</p>
            <p className="mt-1 text-slate-600">React, Next, Vue, Nuxt, Tailwind, shadcn/ui</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="font-semibold text-slate-900">Backend</p>
            <p className="mt-1 text-slate-600">Node, Nest, Express, Elysia, REST, tRPC</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="font-semibold text-slate-900">Testing & DevOps</p>
            <p className="mt-1 text-slate-600">Vitest, Playwright, Docker, CI/CD</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="font-semibold text-slate-900">Focus</p>
            <p className="mt-1 text-slate-600">Performance, accessibility, DX, scalability</p>
          </div>
        </div>
      </div>
    </section>
  );
}
