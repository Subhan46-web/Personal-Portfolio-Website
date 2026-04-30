import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import AIWorkflow from './components/AIWorkflow';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <AIWorkflow />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
