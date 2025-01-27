import '../styles/Projects.css'
import ProjectButton from './ProjectButton';
import '../content/ProjectsContent.js'
import { projectsContent } from '../content/ProjectsContent.js';

function Projects() {
  return (
    <div id="projects" className="section">
      <h2 className='sectionTitle'>{projectsContent.title}</h2>
      <div className='projectsContent'>
        <p className='projectsText'>
            {projectsContent.text}
        </p>
        <ProjectButton />
        </div>
    </div>
  );
}

export default Projects;