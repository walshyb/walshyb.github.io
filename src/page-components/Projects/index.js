import React from 'react';
import ProjectItem from '../../components/common/ProjectItem';

function Projects() {
  const projectData = [
    {
      name: 'Project Name',
      image: '',
      tags: [],
      content: ''
    }
  ];

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
