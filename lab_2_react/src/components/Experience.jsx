function Experience() {
  return (
    <section id="experience" className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-emerald-500/20">
      <h2 className="mb-4 font-mono text-xl font-bold tracking-wide text-emerald-400"><span className="text-slate-500">//</span> Досвід</h2>
      <p className="mb-3 text-slate-400 italic">Досвіду роботи поки немає.</p>
      <p>
        Навчальні проєкти:{' '}
        <a href="https://github.com/Galabudap/cybersecurity-python-labs" target="_blank" className="font-medium text-cyan-400 underline decoration-cyan-400/40 underline-offset-4 hover:text-cyan-300">
          лабораторні з Python на GitHub
        </a>.
      </p>
    </section>
  );
}

export default Experience;