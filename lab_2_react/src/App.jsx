import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Header />
      <main className="mx-auto grid max-w-5xl gap-6 px-4 py-10 md:grid-cols-2">
        <About />
        <Education />
        <Experience />
        <Skills />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;