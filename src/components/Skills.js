import React from 'react';
import '../styles/Skills.css'
import '../content/SkillsContent.js'
import { skillsContent } from '../content/SkillsContent.js';
import ReadMoreText from './ReadMoreText.js';

function Skills() {
  return (
    <div id="skills" className="section">
      <div className='skillsContent'>
        <ReadMoreText title={skillsContent.title} text={skillsContent.text} halfText={skillsContent.halfText} />
      <img className='keyboardImage' src='../../images/keyboard.png' alt='keyboardimage'></img>
      </div>
    </div>
  );
}

export default Skills;