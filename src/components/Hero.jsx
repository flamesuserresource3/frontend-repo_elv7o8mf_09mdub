import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur md:text-sm">
            <Rocket className="h-4 w-4 text-blue-600" />
            Full Stack JavaScript Developer
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Ahmad Faisal
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            I craft modern, playful, and performant web apps end‑to‑end. From elegant UIs to robust APIs, I work across
            React, Vue, Next, Nuxt, Angular, Nest, Express, and Elysia.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-slate-900 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200"
            >
              Contact Me
            </a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-3 text-xs text-slate-500 md:text-sm">
            <li className="rounded-full bg-white/70 px-3 py-1">React</li>
            <li className="rounded-full bg-white/70 px-3 py-1">Vue</li>
            <li className="rounded-full bg-white/70 px-3 py-1">Next</li>
            <li className="rounded-full bg-white/70 px-3 py-1">Nuxt</li>
            <li className="rounded-full bg-white/70 px-3 py-1">Angular</li>
            <li className="rounded-full bg-white/70 px-3 py-1">Nest</li>
            <li className="rounded-full bg-white/70 px-3 py-1">Express</li>
            <li className="rounded-full bg-white/70 px-3 py-1">Elysia</li>
          </ul>
        </div>

        <div className="relative aspect-[4/3] w-full md:aspect-[5/4] md:h-[70vh]">
          <div className="absolute inset-0 rounded-2xl border border-white/20 bg-white/60 shadow-xl backdrop-blur">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
