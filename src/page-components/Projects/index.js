import React from 'react';
import ProjectItem from '../../components/common/ProjectItem';
import './index.scss';

function Projects() {
  // TODO: move to .json file
  const projectData = [
    {
      name: 'Project Name',
      image: 'https://via.placeholder.com/400x150.png',
      tags: ['ruby', 'rails', 'react'],
      content: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere.',
      liveSiteUrl: 'https://google.com',
      caseStudyUrl: 'https://google.com'
    },
    {
      name: 'Project Name 1',
      image: 'https://via.placeholder.com/400x150.png',
      tags: ['ruby', 'rails', 'react'],
      content: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere.',
      liveSiteUrl: 'https://google.com',
      caseStudyUrl: 'https://google.com'
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
