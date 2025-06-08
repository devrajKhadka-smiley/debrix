import React from 'react';
import { FaCode, FaPalette, FaRocket, FaLinkedin, FaGithub, FaTwitter, FaServer, FaMobile, FaDatabase, FaCloud, FaCodeBranch, FaRobot } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg'; 
import './About.css';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: <FaCode />, level: 95 },
    { name: 'Backend Development', icon: <FaServer />, level: 90 },
    { name: 'UI/UX Design', icon: <FaPalette />, level: 88 },
    { name: 'Mobile Development', icon: <FaMobile />, level: 85 },
    { name: 'Database Design', icon: <FaDatabase />, level: 92 },
    { name: 'Cloud Architecture', icon: <FaCloud />, level: 87 },
    { name: 'DevOps', icon: <FaCodeBranch />, level: 83 },
    { name: 'Machine Learning', icon: <FaRobot />, level: 80 },
  ];

  const experiences = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: 'Leading a team of developers in building scalable web applications using modern technologies. Spearheaded the migration to microservices architecture, resulting in 40% improved system performance. Implemented CI/CD pipelines reducing deployment time by 60%.',
      achievements: [
        'Architected and implemented a real-time analytics dashboard used by 10,000+ daily active users',
        'Mentored 5 junior developers, improving team productivity by 35%',
        'Reduced API response time by 70% through query optimization and caching strategies'
      ]
    },
    {
      role: 'Frontend Lead',
      company: 'Digital Creations',
      period: '2020 - 2022',
      description: 'Led the frontend development of multiple client projects, focusing on creating responsive and accessible user interfaces. Implemented design systems and component libraries to ensure consistency across applications.',
      achievements: [
        'Reduced bundle size by 45% through code splitting and lazy loading',
        'Improved Lighthouse scores from 65 to 95+ across all projects',
        'Introduced automated testing, increasing test coverage from 20% to 85%'
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'WebCraft Studios',
      period: '2018 - 2020',
      description: 'Developed and maintained multiple client websites and web applications. Worked closely with designers to implement pixel-perfect UIs and with backend developers to design robust APIs.',
      achievements: [
        'Reduced page load time by 60% through performance optimization',
        'Implemented JWT authentication across all projects',
        'Mentored 3 junior developers in modern JavaScript practices'
      ]
    },
    {
      role: 'Junior Developer',
      company: 'CodeMasters',
      period: '2016 - 2018',
      description: 'Started as an intern and quickly progressed to a full-time developer role. Worked on various projects ranging from small business websites to enterprise applications.',
      achievements: [
        'Developed 15+ responsive websites',
        'Learned modern JavaScript frameworks and best practices',
        'Contributed to open-source projects'
      ]
    }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 overflow-y-auto">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="profile-card">
          <div className="profile-image">
            <img src={profileImage} alt="Profile" className="w-48 h-48 rounded-full border-4 border-purple-600 object-cover" />
          </div>
          <h1 className="text-4xl font-bold mt-6 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">John Doe</h1>
          <p className="text-xl text-gray-300 mb-6">Senior Full Stack Developer</p>
          <p className="text-gray-400 max-w-2xl text-center mb-6">
            Passionate about creating elegant solutions to complex problems. Specializing in JavaScript ecosystem with expertise in React, Node.js, and cloud technologies.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="social-icon hover:text-blue-400 transition-colors duration-300" aria-label="LinkedIn">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="#" className="social-icon hover:text-gray-300 transition-colors duration-300" aria-label="GitHub">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="#" className="social-icon hover:text-blue-400 transition-colors duration-300" aria-label="Twitter">
              <FaTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section max-w-4xl mx-auto my-16">
        <h2 className="text-3xl font-bold mb-8 text-center">About <span className="text-purple-400">Me</span></h2>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          <p className="text-lg leading-relaxed mb-6">
            I'm a passionate and results-driven Senior Full Stack Developer with over 7 years of experience in designing, developing, and implementing innovative web applications. My journey in technology started when I built my first website at the age of 15, and I've been in love with coding ever since.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            My expertise spans the entire web development stack, from crafting beautiful and intuitive user interfaces to designing robust and scalable backend systems. I specialize in JavaScript technologies, particularly the MERN stack (MongoDB, Express.js, React, Node.js), and have extensive experience with cloud platforms like AWS and Azure.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            What drives me is the opportunity to solve complex problems and create meaningful digital experiences that make people's lives better. I'm a firm believer in clean code, test-driven development, and continuous learning. When I'm not coding, you can find me contributing to open-source projects, writing technical articles, or speaking at developer meetups.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">MSc in Computer Science</h4>
                  <p className="text-gray-400">Stanford University | 2014 - 2016</p>
                  <p className="text-sm text-gray-500 mt-1">Specialization in Artificial Intelligence</p>
                </div>
                <div>
                  <h4 className="font-medium">BSc in Software Engineering</h4>
                  <p className="text-gray-400">MIT | 2010 - 2014</p>
                  <p className="text-sm text-gray-500 mt-1">Graduated with Honors</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Certifications</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  <span>AWS Certified Solutions Architect - Professional</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  <span>Google Cloud Professional Cloud Architect</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  <span>Microsoft Certified: Azure Solutions Architect Expert</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section max-w-6xl mx-auto my-16">
        <h2 className="text-3xl font-bold mb-12 text-center">My <span className="text-purple-400">Skills</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="skill-icon text-4xl text-purple-400 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Proficiency</span>
                <span className="font-mono">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Technical Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Technical <span className="text-purple-400">Expertise</span></h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-medium mb-3 text-purple-300">Frontend</h4>
              <ul className="space-y-2">
                {['React', 'Next.js', 'TypeScript', 'Redux', 'GraphQL', 'Tailwind CSS', 'Framer Motion'].map((tech, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-3 text-purple-300">Backend</h4>
              <ul className="space-y-2">
                {['Node.js', 'Express', 'NestJS', 'Python', 'Django', 'FastAPI', 'GraphQL'].map((tech, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-3 text-purple-300">DevOps & Tools</h4>
              <ul className="space-y-2">
                {['Docker', 'Kubernetes', 'AWS', 'Git', 'GitHub Actions', 'Jenkins', 'Terraform'].map((tech, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section max-w-4xl mx-auto my-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Work <span className="text-purple-400">Experience</span></h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative pl-8 border-l-2 border-purple-500/30 group"
            >
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2 top-1 group-hover:scale-150 transition-transform duration-300"></div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <h4 className="text-lg text-purple-400">{exp.company}</h4>
                  </div>
                  <span className="inline-block mt-2 md:mt-0 px-3 py-1 text-sm bg-purple-900/50 text-purple-300 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                {exp.achievements && (
                  <div className="mt-4">
                    <h5 className="font-medium text-gray-400 mb-2">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-4 h-4 text-purple-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="max-w-4xl mx-auto my-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Work <span className="text-purple-400">Together</span></h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="mailto:contact@example.com" 
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
          <a 
            href="#" 
            className="px-8 py-3 border border-purple-500 text-purple-400 font-medium rounded-lg hover:bg-purple-900/30 transition-colors"
          >
            Download CV
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;