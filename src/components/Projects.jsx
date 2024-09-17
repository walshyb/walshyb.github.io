import "./Projects.scss";
import Project from "./Project";
import { projects } from "./projectData";

export default function Projects() {
  return (
    <section className="projects-container">
      <h2>Projects</h2>

      <div className="projects">
        {projects.map((project) => (
          <Project
            key={project.name}
            name={project.name}
            imgSrc={project.imgSrc}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
}
