function Contacts() {
  return (
    <section id="contacts" className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-emerald-500/20">
      <h2 className="mb-4 font-mono text-xl font-bold tracking-wide text-emerald-400"><span className="text-slate-500">//</span> Контакти</h2>
      <address className="space-y-2 not-italic">
        <p>Телефон: <a href="tel:+380676766767" className="font-medium text-cyan-400 hover:text-cyan-300 hover:underline">+380 67 676 67 67</a></p>
        <p>Email: <a href="mailto:galabudap@gmail.com" className="font-medium text-cyan-400 hover:text-cyan-300 hover:underline">galabudap@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/Galabudap" target="_blank" className="font-medium text-cyan-400 hover:text-cyan-300 hover:underline">github.com/Galabudap</a></p>
      </address>
    </section>
  );
}

export default Contacts;