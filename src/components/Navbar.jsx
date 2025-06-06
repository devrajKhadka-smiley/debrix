import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiArrowRight } from 'react-icons/fi';
import logo from '../assets/logo.png';

const NavLink = ({ href, children, isActive = false, isButton = false }) => {
  const linkClasses = `relative px-6 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg mx-1.5 ${isActive
    ? 'text-white bg-gradient-to-r from-gray-800/50 to-gray-900/50'
    : 'text-gray-400 hover:text-white bg-gray-900/30 hover:bg-gray-800/30'
    } ${isButton ? 'ml-4' : ''} overflow-hidden group`;

  if (isButton) {
    return (
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200 group-hover:duration-200"></div>
        <a
          href={href}
          className={`${linkClasses} relative bg-gray-900 text-white px-6 py-2.5 hover:shadow-lg hover:shadow-blue-500/20`}
        >
          {children}
        </a>
      </div>
    );
  }


  return (
    <div className="relative group">
      <div className={`absolute -inset-0.5 rounded-lg ${isActive
        ? 'bg-gradient-to-r from-blue-500/50 to-purple-600/50 blur opacity-75'
        : 'bg-gradient-to-r from-blue-500/30 to-purple-600/30 blur opacity-0 group-hover:opacity-50'
        } transition duration-200 group-hover:duration-200`}></div>
      <a href={href} className={`${linkClasses} relative`}>
        <span className="relative z-10">{children}</span>
      </a>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-gray-950 backdrop-blur-lg shadow-xl"
          : "bg-gray-950 backdrop-blur-md"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border border-gray-800/80 rounded-lg mx-2 my-4 p-4 h-16 md:h-20 bg-gray-950/90 backdrop-blur-sm">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10">
              <img src={logo} className="h-10 w-10" alt="Logo" />
            </div>
            {/* <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Debrix
            </span> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* <a
              href="#contact"
              className="px-5 py-2 border border-blue-500/50 text-blue-400 hover:text-white hover:bg-blue-500/10 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-1"
            >
              <span>Get in Touch</span>
              <FiArrowRight className="w-4 h-4" />
            </a> */}
            {navItems.map((item) => (
              <NavLink key={item.name} href={item.href}>
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
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-gray-800"
          >
            {/* <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-950 backdrop-blur-lg">
              <motion.a
                href="#contact"
                className="mt-2 block w-full text-center px-4 py-3 border border-blue-500 text-blue-500 rounded-lg text-base font-medium hover:bg-blue-500/10 transition-all duration-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in Touch
              </motion.a>
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-gray-300 hover:bg-gray-800/50 hover:text-white rounded-lg transition-all duration-200"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;