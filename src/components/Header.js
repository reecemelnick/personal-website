import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.css';

function Header() {

    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        }, {
          threshold: 0.5,
        });
    
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => observer.observe(section));
    
        return () => {
          sections.forEach(section => observer.unobserve(section));
        };
      }, []);

    return (
        <div className="Header">
      <h1 className="nameTitle">Reece Melnick</h1>
      <nav>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500} className={`nav-link ${activeSection === 'home' ? 'active-link' : ''}`}>Home</Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className={`nav-link ${activeSection === 'about' ? 'active-link' : ''}`}>About</Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} className={`nav-link ${activeSection === 'skills' ? 'active-link' : ''}`}>Skills</Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} className={`nav-link ${activeSection === 'projects' ? 'active-link' : ''}`}>Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
    );
  }
  
  export default Header;