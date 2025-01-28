import React, { useState, useEffect } from 'react';
import '../styles/ReadMoreText.css'

function ReadMoreText({ title, text, halfText }) {

    const [isOpen, setIsOpen] = useState(false);
      const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 700);
      
        const toggleReadMore = () => {
          setIsOpen(!isOpen);
        };
    
        useEffect(() => {
          const handleResize = () => {
            setIsMobileView(window.innerWidth <= 700);
          };
      
          window.addEventListener('resize', handleResize);
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);

  return (
    <div className='readMore'>
          <h2 className='sectionTitle'>{title}</h2>
          <div className='readMoreContent'>
            <p className="sectionText">
            {!isMobileView ? text : isOpen ? text : halfText}
            </p>
            </div>
            {isMobileView && (
              <button className='btn' onClick={toggleReadMore}>
                {isOpen ? 'Read Less' : 'Read More'}
              </button>
            )}
        </div>
  );
}

export default ReadMoreText;