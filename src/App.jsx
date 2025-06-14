import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import CursorFollower from './components/CursorFollower';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import './App.css';
import './styles/CursorFollower.css';

// Component to handle scroll behavior based on route
function ScrollHandler({ onRouteChange }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    onRouteChange(isHomePage);
    
    if (isHomePage) {
      // Disable scrolling on home page
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      // Enable scrolling on other pages
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }

    return () => {
      // Reset styles when component unmounts
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [isHomePage, location.pathname, onRouteChange]);

  return null;
}

function App() {
  const appRef = useRef(null);
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    // Ensure the app takes full viewport
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.width = '100vw';
    document.body.style.height = '100vh';
    
    // Ensure the app container takes full viewport
    if (appRef.current) {
      appRef.current.style.width = '100%';
      appRef.current.style.minHeight = '100vh';
      appRef.current.style.overflow = isHomePage ? 'hidden' : 'auto';
    }

    return () => {
      // Reset body styles when component unmounts
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [isHomePage]);

  return (
    <Router>
      <div className="app-container" ref={appRef}>
        <ScrollHandler onRouteChange={(isHome) => setIsHomePage(isHome)} />
        <CursorFollower />
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}>
          <ParticlesBackground />
        </div>
        <div className={`content-wrapper ${isHomePage ? 'home-page' : ''}`} style={{
          position: 'relative',
          zIndex: 1
        }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          {/* <SocialMediaBar /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
