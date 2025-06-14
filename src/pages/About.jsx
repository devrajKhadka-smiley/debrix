import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const About = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Coming Soon', 'Under Construction', 'Stay Tuned', 'Work in Progress'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="h-screen w-full text-white relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="flex-1 w-full flex items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-4xl mx-auto">
          <motion.div 
            className="text-center"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1 
              variants={item}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            >
              Hello, I'm Deb
            </motion.h1>
          
          <motion.div 
            variants={item}
            className="relative h-20 mb-8 overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentWordIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <h2 className="text-2xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400">
                  {words[currentWordIndex]}
                </h2>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          
          <motion.p 
            variants={item}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            I'm currently working on something amazing! This page is under construction, but I'll be sharing my portfolio, projects, and more very soon. Check back later or connect with me on social media.
          </motion.p>
          
          {/* Spacer to push the footer to bottom
          <div className="flex-1" />
          
          <motion.div 
            variants={item}
            className="w-full pt-8 border-t border-gray-800 text-sm text-gray-500 mt-auto"
          >
            {new Date().getFullYear()} Deb. All rights reserved.
          </motion.div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;