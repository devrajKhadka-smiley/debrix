import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  useEffect(() => {
    // Prevent scrolling on the body
    document.body.style.overflow = 'hidden';
    
    return () => {
      // Re-enable scrolling when component unmounts
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="app-container">
      <ParticlesBackground />
      <div className="content-wrapper">
        <Navbar />
        {/* Add your page content here */}
      </div>
    </div>
  );
}

export default App;
