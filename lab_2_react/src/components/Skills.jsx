function Skills() {
  return (
    <section id="skills" className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-emerald-500/20">
      <h2 className="mb-4 font-mono text-xl font-bold tracking-wide text-emerald-400"><span className="text-slate-500">//</span> Навички</h2>
      <ul className="flex flex-wrap gap-2">
        <li className="rounded-lg bg-emerald-400/10 px-3 py-1 font-mono text-sm text-emerald-300 ring-1 ring-emerald-400/30 transition hover:bg-emerald-400/25">Python</li>
        <li className="rounded-lg bg-emerald-400/10 px-3 py-1 font-mono text-sm text-emerald-300 ring-1 ring-emerald-400/30 transition hover:bg-emerald-400/25">C#</li>
        <li className="rounded-lg bg-emerald-400/10 px-3 py-1 font-mono text-sm text-emerald-300 ring-1 ring-emerald-400/30 transition hover:bg-emerald-400/25">JavaScript</li>
        <li className="rounded-lg bg-emerald-400/10 px-3 py-1 font-mono text-sm text-emerald-300 ring-1 ring-emerald-400/30 transition hover:bg-emerald-400/25">HTML</li>
        <li className="rounded-lg bg-emerald-400/10 px-3 py-1 font-mono text-sm text-emerald-300 ring-1 ring-emerald-400/30 transition hover:bg-emerald-400/25">CSS</li>
        <li className="rounded-lg bg-emerald-400/10 px-3 py-1 font-mono text-sm text-emerald-300 ring-1 ring-emerald-400/30 transition hover:bg-emerald-400/25">Git</li>
      </ul>
    </section>
  );
}

export default Skills;