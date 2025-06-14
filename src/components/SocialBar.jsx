import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaDocker,
  FaMedium,
} from "react-icons/fa";

const SocialBar = ({ mobileHorizontal = false }) => {
  // Horizontal bar for mobile, vertical for desktop
  return (
    <>
      {/* Vertical bar for desktop (all pages) */}
      <div className="hidden sm:flex fixed left-0 top-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-6 bg-gray-900/50 backdrop-blur-sm p-4 rounded-r-lg">
          <a
            href="https://github.com/devrajKhadka-smiley"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/dev-raj-khadka/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://hub.docker.com/repositories/sye9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaDocker size={20} />
          </a>
          <a
            href="https://medium.com/@sye09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaMedium size={20} />
          </a>
        </div>
      </div>
      {/* Horizontal bar for mobile (only if mobileHorizontal is true) */}
      {mobileHorizontal && (
        <div className="sm:hidden fixed bottom-4 inset-x-0 mx-auto w-max z-50">
          <div className="flex flex-row space-x-6 bg-gray-900/80 backdrop-blur-sm p-3 px-4 rounded-t-lg items-center">
            <a
              href="https://github.com/devrajKhadka-smiley"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/dev-raj-khadka/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://hub.docker.com/repositories/sye9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaDocker size={20} />
            </a>
            <a
              href="https://medium.com/@sye09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaMedium size={20} />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialBar; 