import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import CursorFollower from './components/CursorFollower';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import './styles/CursorFollower.css';

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    // Ensure the app takes full viewport
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100vw';
    document.body.style.height = '100vh';
    
    // Ensure the app container takes full viewport
    if (appRef.current) {
      appRef.current.style.width = '100%';
      appRef.current.style.minHeight = '100vh';
      appRef.current.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Router>
      <div className="app-container" ref={appRef}>
        <CursorFollower />
        <ParticlesBackground />
        <div className="content-wrapper">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
