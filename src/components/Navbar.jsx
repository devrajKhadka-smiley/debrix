import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavLink = ({ to, children, isActive = false, isButton = false }) => {
  const linkClasses = `relative px-8 py-3 text-base md:text-lg font-medium transition-all duration-300 rounded-lg mx-1.5 ${isActive
    ? 'text-white bg-gradient-to-r from-gray-800/50 to-gray-900/50'
    : 'text-gray-400 hover:text-white bg-gray-900/30 hover:bg-gray-800/30'
    } ${isButton ? 'ml-4' : ''} overflow-hidden group`;

  if (isButton) {
    return (
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200 group-hover:duration-200"></div>
        <Link
          to={to}
          className={`${linkClasses} relative bg-gray-900 text-white px-6 py-2.5 hover:shadow-lg hover:shadow-blue-500/20`}
        >
          {children}
        </Link>
      </div>
    );
  }

  return (
    <div className="relative group">
      <div className={`absolute -inset-0.5 rounded-lg ${isActive
        ? 'bg-gradient-to-r from-blue-500/50 to-purple-600/50 blur opacity-75'
        : 'bg-gradient-to-r from-blue-500/30 to-purple-600/30 blur opacity-0 group-hover:opacity-50'
        } transition duration-200 group-hover:duration-200`}></div>
      <Link to={to} className={`${linkClasses} relative`}>
        <span className="relative z-10">{children}</span>
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavItems, setShowNavItems] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Handle nav items animation sequence
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Start showing nav items after glass animation completes
      const timer = setTimeout(() => setShowNavItems(true), 300);
      return () => clearTimeout(timer);
    } else {
      setShowNavItems(false);
    }
  }, [isMobileMenuOpen]);
  
  // Close mobile menu when route changes
  useEffect(() => {
    const unlisten = () => {
      setIsMobileMenuOpen(false);
    };
    
    // Close menu when location changes
    unlisten();
    
    // Cleanup
    return () => {
      unlisten();
    };
  }, [location.pathname]);
  
  // Simple fade animation for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.2 }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.15 }
    }
  };
  
  // Hover effect only for desktop
  const hoverEffect = {
    x: 0,
    '@media (hover: hover)': {
      x: 8
    },
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 15
    }
  };
  
  // Tap effect
  const tapEffect = {
    scale: 0.98,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 15
    }
  };
  
  // Active link style
  const activeLinkStyle = {
    color: '#ffffff',
    textShadow: '0 0 8px rgba(99, 102, 241, 0.7)'
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-transparent backdrop-blur-lg shadow-xl"
          : "bg-transparent backdrop-blur-md"
      }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between border border-gray-800/80 rounded-lg mx-2 my-3 p-3 h-14 md:h-18 bg-transparent backdrop-blur-sm">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center justify-center w-10 h-10">
              <img src={logo} className="h-10 w-10" alt="Logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 ml-auto">
            {navItems.map((item) => (
              <NavLink 
                key={item.name} 
                to={item.path}
                isActive={location.pathname === item.path}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="md:hidden overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.3 }
              }}
              className="mx-8 rounded-xl relative overflow-hidden"
              style={{
                background: 'rgba(17, 24, 39, 0.35)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                borderTop: 'none',
                zIndex: 50,
                transformOrigin: 'top center',
                willChange: 'transform, opacity'
              }}
            >
              {/* Frosted glass overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl"
                initial={{ 
                  opacity: 0,
                  backdropFilter: 'blur(0px)',
                  WebkitBackdropFilter: 'blur(0px)',
                  scaleY: 0.95
                }}
                animate={{ 
                  opacity: 1,
                  backdropFilter: 'blur(16px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                  scaleY: 1
                }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                  opacity: { delay: 0.1, duration: 0.3 },
                  scaleY: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
                }}
              />
            
              {/* Navigation items */}
              {showNavItems && (
                <motion.div 
                  className="relative z-10 px-2 py-3 w-full flex flex-col items-center space-y-1"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  {navItems.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-center w-full"
                    >
                      <NavLink
                        to={item.path}
                        isActive={location.pathname === item.path}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="relative py-2 px-2 transition-colors duration-200 w-full text-center text-base font-medium"
                        style={location.pathname === item.path ? activeLinkStyle : {}}
                      >
                        <motion.span 
                          className="relative z-10 flex items-center justify-center"
                          whileHover={hoverEffect}
                          whileTap={tapEffect}
                        >
                          {item.name}
                          <motion.span 
                            className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"
                            initial={{ width: 0 }}
                            animate={{ 
                              width: location.pathname === item.path ? '100%' : '0%',
                              opacity: location.pathname === item.path ? 1 : 0.7
                            }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                          />
                        </motion.span>
                      </NavLink>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;