import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks! I\'ll get back to you shortly.');
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <Mail className="h-5 w-5 text-blue-600" />
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Contact</h2>
        </div>
        <p className="text-slate-600">Have an idea or a role in mind? Let’s talk.</p>
        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4">
          <input
            type="text"
            required
            placeholder="Name"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 focus:border-slate-400 focus:outline-none"
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 focus:border-slate-400 focus:outline-none"
          />
          <textarea
            required
            placeholder="Your message"
            rows={4}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 focus:border-slate-400 focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 font-medium text-white hover:bg-slate-800"
          >
            Send Message
            <Send className="h-4 w-4" />
          </button>
        </form>
        {status && <p className="mt-4 text-sm text-green-600">{status}</p>}
      </div>
    </section>
  );
}
