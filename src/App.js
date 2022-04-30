import Features from './react/Features';
import About from './react/About';
import Hero from './react/Hero';
import Navbar from './react/Navbar';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </div>
  );
}
