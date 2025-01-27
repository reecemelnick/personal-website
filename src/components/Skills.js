import React from 'react';
import '../styles/Skills.css'
import '../content/SkillsContent.js'
import { skillsContent } from '../content/SkillsContent.js';

function Skills() {
  return (
    <div id="skills" className="section">
      <h2 className='sectionTitle'>{skillsContent.title}</h2>
      <div className='skillsContent'>
      <img className='keyboardImage' src='../../images/keyboard.png' alt='keyboardimage'></img>
      <p className='skillsText'>
        {skillsContent.text}
      </p>
      </div>
    </div>
  );
}

export default Skills;