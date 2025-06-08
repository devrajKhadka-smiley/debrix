import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';

const SocialMediaBar = () => {
  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaLinkedin className="w-5 h-5" />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FaTwitter className="w-5 h-5" />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <FaInstagram className="w-5 h-5" />, url: 'https://instagram.com/yourusername', label: 'Instagram' },
    { icon: <FaEnvelope className="w-5 h-5" />, url: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <div className="fixed left-6 bottom-0 z-50 hidden md:block">
      <div className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-gray-400 after:mt-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition-colors duration-300"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaBar;
