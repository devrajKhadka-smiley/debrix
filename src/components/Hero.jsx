import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaDocker, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showCursor, setShowCursor] = useState(true);

  const roles = ['Backend Developer', 'Graphic Designer', 'Web Developer'];
  const currentRole = roles[loopNum % roles.length];

  useEffect(() => {
    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    // Typing effect
    const type = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => {
      clearTimeout(timer);
      clearInterval(cursorInterval);
    };
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Main Content - Centered */}
      <div className="w-full max-w-4xl px-4 z-10 text-center">
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-2">Hi, I'm</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          <div className="relative inline-block">
            <span className="text-red-500">Dev Raj</span>
            {/* <div className="h-1 w-20 bg-red-500 mt-2"></div> */}
          </div>
          <span> Khadka</span>
        </h1>
        <div className="flex items-center justify-center text-2xl md:text-3xl text-gray-300 font-light">
          <span>I'm a </span>
          <span className="ml-2 text-red-400 font-light min-w-[250px] md:min-w-[300px] h-10 md:h-12 flex items-center justify-center">
            {text}
            <span className={`h-8 w-1 bg-red-400 ml-1 inline-block ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
          </span>
        </div>
      </div>

      {/* Social Icons - Vertical on desktop, horizontal at bottom on mobile */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 md:left-8 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0 z-10">
        <div className="flex flex-row space-x-6 md:space-x-0 md:space-y-6 md:flex-col">
          <a href="https://github.com/devrajKhadka-smiley" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/dev-raj-khadka/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
            <FaLinkedin size={20} />
          </a>
          <a href="https://hub.docker.com/repositories/sye9" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
            <FaDocker size={20} />
          </a>
          <a href="https://medium.com/@sye09" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
            <FaMedium size={20} />
          </a>
          {/* <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-white transition-colors duration-300">
            <FaEnvelope size={20} />
          </a> */}
        </div>
      </div>

      {/* Right Side - Vertical Line - Positioned absolutely on the right */}
      {/* <div className="absolute right-8 md:right-12 h-48 w-px bg-gray-700"></div> */}
    </div>
  );
};

export default Hero;
