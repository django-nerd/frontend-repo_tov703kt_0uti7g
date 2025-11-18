import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/70 to-slate-950/90 pointer-events-none" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pt-28 sm:px-8 md:pt-40">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur-md"
        >
          Building delightful, high-performance experiences
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          Hi, I’m <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">Your Name</span>
          <br />
          <span className="text-slate-200">Full-Stack Engineer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg"
        >
          I craft modern web and mobile products with clean architecture, accessible interfaces, and buttery-smooth interactions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-4 flex items-center gap-4"
        >
          <button onClick={scrollToProjects} className="rounded-lg bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-5 py-3 text-sm font-medium text-slate-900 shadow-lg shadow-sky-500/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-sky-400">
            View Projects
          </button>
          <a href="#contact" className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-slate-300/40">
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
