import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
    {subtitle && <p className="mt-2 text-slate-300">{subtitle}</p>}
  </div>
);

export const Summary = () => (
  <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
    <SectionHeading title="Summary" />
    <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-slate-300 leading-relaxed">
      I’m a product-focused engineer who blends design thinking with strong fundamentals. I turn ideas into polished, performant experiences—shipping fast without compromising quality.
    </motion.p>
  </section>
);

export const About = () => (
  <section className="mx-auto max-w-5xl px-6 py-12 sm:px-8">
    <SectionHeading title="About" />
    <div className="grid gap-6 md:grid-cols-2">
      <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-slate-300 leading-relaxed">
        With a background in full-stack development, I build reliable systems from UI to infrastructure. I love TypeScript, React, Node, and Python, and I care deeply about accessibility and performance.
      </motion.p>
      <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="text-slate-300 leading-relaxed">
        Outside work, I enjoy open-source, writing about developer experience, and exploring design systems. I’m constantly learning and experimenting with new tools and paradigms.
      </motion.p>
    </div>
  </section>
);

export const Skills = () => {
  const skills = [
    'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Framer Motion', 'Docker', 'AWS'
  ];
  return (
    <section className="mx-auto max-w-5xl px-6 py-12 sm:px-8">
      <SectionHeading title="Skills" />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((s) => (
          <motion.div key={s} whileHover={{ y: -2 }} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 backdrop-blur">
            {s}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const Projects = () => {
  const projects = Array.from({ length: 8 }).map((_, i) => ({
    name: `Project ${i + 1}`,
    description: 'A short project blurb that highlights impact and outcomes.',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    link: 'https://github.com/yourname/project'
  }));
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
      <SectionHeading title="Projects" subtitle="A selection of work and experiments" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <motion.a key={p.name} href={p.link} target="_blank" rel="noreferrer" whileHover={{ y: -4 }} className="group rounded-xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-5 text-white/90 backdrop-blur-md transition">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-medium text-white">{p.name}</h3>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-slate-200">{p.stack[0]}</span>
            </div>
            <p className="mt-2 text-sm text-slate-300">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-200">{t}</span>
              ))}
            </div>
            <span className="mt-4 inline-block text-sm text-sky-300 group-hover:underline">View →</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export const Proficiency = () => {
  const items = [
    { label: 'Web Development', value: 90 },
    { label: 'Mobile Development', value: 70 },
    { label: 'Backend Development', value: 85 },
    { label: 'DevOps', value: 65 },
  ];
  return (
    <section className="mx-auto max-w-5xl px-6 py-12 sm:px-8">
      <SectionHeading title="Proficiency" />
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((i) => (
          <div key={i.label} className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/90">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span>{i.label}</span>
              <span className="text-slate-300">{i.value}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-800">
              <motion.div initial={{ width: 0 }} whileInView={{ width: `${i.value}%` }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-2 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Contact = () => {
  const [status, setStatus] = React.useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
      source: 'portfolio',
    };
    setStatus('Sending...');
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('Thanks! I will get back to you shortly.');
        e.currentTarget.reset();
      } else {
        setStatus(data.detail || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('Network error. Please try again.');
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
      <SectionHeading title="Contact" subtitle="Let’s create something great together" />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input name="name" placeholder="Name" required className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white/90 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400" />
          <input type="email" name="email" placeholder="Email" required className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white/90 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400" />
        </div>
        <textarea name="message" placeholder="Message" rows={5} required className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white/90 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400" />
        <div className="flex items-center gap-4">
          <button type="submit" className="rounded-lg bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-5 py-3 text-sm font-medium text-slate-900 shadow-lg shadow-sky-500/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-sky-400">Send message</button>
          <span className="text-sm text-slate-300">{status}</span>
        </div>
      </form>
    </section>
  );
};

export const Footer = () => (
  <footer className="mx-auto max-w-6xl px-6 pb-10 sm:px-8">
    <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-6 text-slate-300 backdrop-blur md:flex-row">
      <p className="text-sm">© {new Date().getFullYear()} Your Name</p>
      <div className="flex items-center gap-4 text-sm">
        <a href="https://github.com/yourname" className="hover:text-white">GitHub</a>
        <a href="https://www.linkedin.com/in/yourname" className="hover:text-white">LinkedIn</a>
        <a href="https://twitter.com/yourname" className="hover:text-white">Twitter</a>
      </div>
    </div>
  </footer>
);
