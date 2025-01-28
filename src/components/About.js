import React, { useState, useEffect } from 'react';
import '../styles/About.css'
import '../content/AboutContent'
import { aboutContent } from '../content/AboutContent';
import ReadMoreText from './ReadMoreText';


function About() {

  return (
    <div id="about" className="section">
      <div className='aboutContent'> 
        <ReadMoreText title={aboutContent.title} text={aboutContent.text} halfText={aboutContent.halfText}/>
        <img className='terminalImage' src='../../images/console-512.webp' alt='terminalimagelogo'></img>
       </div>
    </div>
  );
}

export default About;