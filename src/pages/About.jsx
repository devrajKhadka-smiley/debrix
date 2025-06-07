import React from 'react';
import { FaCode, FaPalette, FaRocket, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg'; 
import './About.css';

const About = () => {
  const skills = [
    { name: 'Web Development', icon: <FaCode />, level: 90 },
    { name: 'UI/UX Design', icon: <FaPalette />, level: 85 },
    { name: 'Problem Solving', icon: <FaRocket />, level: 95 },
  ];

  const experiences = [
    {
      role: 'Senior Developer',
      company: 'Tech Solutions Inc.',
      period: '2020 - Present',
      description: 'Leading development teams and implementing cutting-edge solutions.'
    },
    {
      role: 'Frontend Developer',
      company: 'Digital Creations',
      period: '2018 - 2020',
      description: 'Developed responsive web applications using modern frameworks.'
    },
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="profile-card">
          <div className="profile-image">
            <img src={profileImage} alt="Profile" />
          </div>
          <h1>John Doe</h1>
          <p className="title">Full Stack Developer</p>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="GitHub"><FaGithub /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Me</h2>
        <p>
          Passionate developer with over 5 years of experience in building exceptional digital experiences.
          I specialize in creating responsive, user-friendly applications using modern web technologies.
        </p>
        <p>
          When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
          or sharing my knowledge with the developer community.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
              </div>
              <span className="skill-percent">{skill.level}%</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <h2>Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <span className="period">{exp.period}</span>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;