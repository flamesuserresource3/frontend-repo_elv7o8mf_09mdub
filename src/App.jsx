import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold">Ahmad Faisal</a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="text-slate-600 hover:text-slate-900">About</a>
            <a href="#projects" className="text-slate-600 hover:text-slate-900">Projects</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Ahmad Faisal. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-900">LinkedIn</a>
            <a href="#" className="hover:text-slate-900">GitHub</a>
            <a href="#" className="hover:text-slate-900">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
