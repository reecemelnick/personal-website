import '../styles/Projects.css'
import ProjectButton from './ProjectButton';

function Projects() {
  return (
    <div id="projects" className="section">
      <h2 className='sectionTitle'>Projects</h2>
      <div className='projectsContent'>
        <p className='projectsText'>
        I designed and developed a template website for a clothing store using the MERN stack: MongoDB, Express.js, React.js, and Node.js. The project showcases a dynamic and responsive front-end paired with a robust backend, enabling features like product management and user interaction. It’s a foundation for creating scalable and interactive e-commerce solutions.
        </p>
        <ProjectButton />
        </div>
    </div>
  );
}

export default Projects;