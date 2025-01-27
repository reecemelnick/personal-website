import React from 'react';
import '../styles/About.css'

function About() {
  return (
    <div id="about" className="section">
      <h2 className='sectionTitle'>About Me</h2>
      <div className='aboutContent'>
        <p className="aboutText">Hi, I’m a computing student at BCIT with a passion for technology and a drive for continuous growth. Before diving into the world of software development, I ran my own auto detailing business for two years, where I honed my entrepreneurial and problem-solving skills. That experience taught me the value of hard work, adaptability, and customer-focused solutions—qualities I now bring to my journey in computing.
        Today, I’m committed to building my technical skills and exploring innovative solutions in software development. From learning new programming languages to tackling complex challenges, I’m focused on becoming a versatile and impactful developer. My background gives me a unique perspective on crafting solutions that are not only technically sound but also practical and user-centric.
        <br></br><br></br>Hi, I’m a computing student at BCIT with a passion for technology and a drive for continuous growth. Before diving into the world of software development, I ran my own auto detailing business for two years, where I honed my entrepreneurial and problem-solving skills. That experience taught me the value of hard work, adaptability, and customer-focused solutions—qualities I now bring to my journey in computing. Today, I’m committed to building my technical skills and exploring innovative solutions in software development. From learning new programming languages to tackling complex challenges, I’m focused on becoming a versatile and impactful developer. My background gives me a unique perspective on crafting solutions that are not only technically sound but also practical and user-centric.</p>
        <img className='terminalImage' src='../../images/console-512.webp'></img>
        </div>
    </div>
  );
}

export default About;