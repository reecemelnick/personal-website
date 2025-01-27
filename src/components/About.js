import React from 'react';
import '../styles/About.css'
import '../content/AboutContent'
import { aboutContent } from '../content/AboutContent';

function About() {
  return (
    <div id="about" className="section">
      <h2 className='sectionTitle'>{aboutContent.title}</h2>
      <div className='aboutContent'>
        <p className="aboutText">
            {aboutContent.text}
        </p>
        <img className='terminalImage' src='../../images/console-512.webp' alt='terminalimagelogo'></img>
        </div>
    </div>
  );
}

export default About;