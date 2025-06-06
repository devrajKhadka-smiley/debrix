import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';

function App() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="app-container">
      <ParticlesBackground />
      <div className="content-wrapper">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
