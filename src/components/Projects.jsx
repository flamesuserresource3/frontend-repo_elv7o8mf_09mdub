import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat Platform',
    desc: 'WebSocket powered chat app with presence, rooms, and message reactions.',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'WebSocket'],
    url: '#',
    repo: '#',
  },
  {
    title: 'Headless eCommerce',
    desc: 'Composable storefront with product search, carts, and checkout.',
    stack: ['Nuxt', 'Express', 'MongoDB', 'Stripe'],
    url: '#',
    repo: '#',
  },
  {
    title: 'Analytics Dashboard',
    desc: 'Interactive charts, filters, and role‑based access control.',
    stack: ['React', 'Elysia', 'ClickHouse'],
    url: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-gradient-to-b from-white to-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Selected Projects</h2>
          <a href="#contact" className="text-sm font-medium text-blue-600 hover:text-blue-700">
            Get a similar build →
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
                {p.stack.map((s) => (
                  <li key={s} className="rounded-full bg-slate-100 px-2.5 py-1">{s}</li>
                ))}
              </ul>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.url} className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:underline">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-sm text-slate-600 hover:underline">
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
