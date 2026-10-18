function Header() {
  return (
    <header className="border-b border-emerald-500/20 bg-linear-to-br from-slate-900 via-slate-950 to-emerald-950 px-6 py-16 text-center">
      <h1 className="font-mono text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Галабуда Павло<span className="animate-pulse text-emerald-400">_</span>
      </h1>
      <p className="mt-3 text-lg text-slate-400">Студент групи КБ-208, НУ «Львівська політехніка»</p>
      <nav>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          <li><a href="#about" className="inline-block rounded-full border border-emerald-400/40 px-5 py-2 text-sm font-medium text-emerald-300 transition hover:scale-105 hover:bg-emerald-400 hover:text-slate-950">Про мене</a></li>
          <li><a href="#education" className="inline-block rounded-full border border-emerald-400/40 px-5 py-2 text-sm font-medium text-emerald-300 transition hover:scale-105 hover:bg-emerald-400 hover:text-slate-950">Освіта</a></li>
          <li><a href="#experience" className="inline-block rounded-full border border-emerald-400/40 px-5 py-2 text-sm font-medium text-emerald-300 transition hover:scale-105 hover:bg-emerald-400 hover:text-slate-950">Досвід</a></li>
          <li><a href="#skills" className="inline-block rounded-full border border-emerald-400/40 px-5 py-2 text-sm font-medium text-emerald-300 transition hover:scale-105 hover:bg-emerald-400 hover:text-slate-950">Навички</a></li>
          <li><a href="#contacts" className="inline-block rounded-full border border-emerald-400/40 px-5 py-2 text-sm font-medium text-emerald-300 transition hover:scale-105 hover:bg-emerald-400 hover:text-slate-950">Контакти</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;