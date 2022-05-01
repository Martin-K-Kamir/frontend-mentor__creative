import Navbar from './react/Navbar';
import Hero from './react/Hero';
import About from './react/About';
import Features from './react/Features';
import Projects from './react/Projects';
import Footer from './react/Footer';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './sass/main.scss';

export default function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <main className="main-container">
        <About />
        <Features />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
