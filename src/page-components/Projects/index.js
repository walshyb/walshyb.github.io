import React from 'react';
import ProjectItem from '../../components/common/ProjectItem';
import './index.scss';
import projectData from '../../lib/project-data';

function Projects() {

  return (
    <section className="projects">
      { projectData.map( ( project ) => {
          return <ProjectItem  { ...project } key={ project.name } />
        })
      }
    </section>
  );
}

export default Projects;
