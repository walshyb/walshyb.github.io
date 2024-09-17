import "./Projects.scss";
import Project from "./Project";
import { projects } from "./projectData";

/**
 * @params {function} openModal
 */
export default function Projects({ openModal }) {
  return (
    <section className="projects-container">
      <h2>Projects</h2>

      <div className="projects">
        {Object.entries(projects).map(([id, project]) => (
          <Project
            key={id}
            id={id}
            name={project.name}
            imgSrc={project.imgSrc}
            description={project.description}
            tags={project.tags}
            githubLink={project.githubLink}
            caseStudyLink={project.caseStudyLink}
            liveSiteLink={project.liveSiteLink}
            openModal={openModal}
          />
        ))}
      </div>
    </section>
  );
}
