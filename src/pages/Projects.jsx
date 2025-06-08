import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaMobile, FaDatabase, FaCloud, FaSearch } from 'react-icons/fa';
import gcm from '../assets/gcm.png';
import SocialBar from '../components/SocialBar';

const Projects = () => {
  // Add type to each project
  const academicProjects = [
    {
      id: 1,
      title: 'Green Cycle Market (FYP)',
      description: 'A sustainable e-commerce platform promotes eco-friendly products by showcasing transparent carbon footprint, featuring an integrated AI-powered chatbot.',
      technologies: ['Django', 'React', 'Ollama'],
      image: gcm,
      github: '#',
    },

    {
      id: 3,
      title: 'BookNest',
      description: 'A basic e-commerce platform for selling books, featuring OTP-based authentication and role-based access control for Admin, Staff, and Customers.',
      technologies: ['.Net', 'React'],
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      github: '#',
    }
  ];

  const nonAcademicProjects = [
    {
      id: 4,
      title: 'TabyTime',
      description: 'A Chrome extension that displays total time spent on specific tabs, monitors memory consumption (beta), and allows single-click tab control operations.',
      technologies: ['Tailwind', 'Html5', 'Javascript'],
      year: '2023',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      github: '#',
    },

  ];

  // Combine all projects and add type
  const allProjects = [
    ...academicProjects.map(project => ({ ...project, type: 'Academic' })),
    ...nonAcademicProjects.map(project => ({ ...project, type: 'Non-Academic' }))
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] mt-24 text-white">
      <div style={{ maxWidth: '79rem' }} className="mx-auto sm:px-8 lg:px-12 pt-2 pb-8 relative z-10">
        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {allProjects.map((project) => (
              <motion.a
                key={project.id}
                href={project.demo || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700/50 hover:border-red-500/30 transition-all duration-300 flex flex-col aspect-square w-full max-w-xs sm:max-w-sm max-w-[240px] mx-auto no-underline hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)] hover:shadow-blue-500/20 hover:bg-gradient-to-br from-gray-800/60 to-gray-900/60 hover:scale-[1.02] transform-gpu"
              >
                <div className="relative h-36 overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                    <div className="w-full">
                      <span
                        className={`text-[8px] px-1 py-0.5 text-black rounded transition-colors duration-200
    ${project.type === 'Academic'
                            ? 'bg-blue-200 hover:text-black'
                            : 'bg-purple-200 hover:text-black'
                          }`}
                      >
                        {project.type}
                      </span>

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="float-right text-black hover:text-black transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub className="h-6 w-6" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-2 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-0.5 gap-2">
                    <h3 className="text-m font-bold text-white line-clamp-1 flex-1">
                      {project.title}
                    </h3>
                    {/* <span className="text-[10px] text-gray-400">{project.year}</span> */}
                  </div>

                  <p className="text-gray-400 text-sm leading-tight mb-1 ">
                    {project.description}
                  </p>


                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-1 py-0.5 text-[8px] font-medium bg-gray-700/50 text-gray-300 rounded-full leading-none"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-[8px] text-gray-500 self-center">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>

        {allProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-gray-500 mb-4">
              <svg className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-300">I will add the project soon</h3>
            <p className="mt-2 text-gray-500">
              Check back later for new projects
            </p>
          </motion.div>
        )}
      </div>
      <SocialBar />
    </div>
  );
};

export default Projects;
