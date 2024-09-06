import "./Projects.scss";
import LightsOut from "../images/lights-out.png";
import CatskillsConf from "../images/catskills-conf.png";
import NewPaltz from "../images/new-paltz-library.png";

export default function Projects() {
  return (
    <section className="projects-container">
      <h2>Projects</h2>
      <div className="projects">
        <div className="project">
          <img className="intro-img" src={LightsOut} />
          <div className="project-details">
            <h3>Lights Out GB</h3>
            <p>My Game Boy puzzle game written in assembly</p>
            <div className="tags">#assembly</div>
          </div>
        </div>

        <div className="project">
          <img className="intro-img" src={NewPaltz} />
          <div className="project-details">SUNY New Paltz Library</div>
        </div>

        <div className="project">
          <img className="intro-img" src={CatskillsConf} />
          <div className="project-details">Catskills Conf</div>
        </div>

        <div className="project">
          <img className="intro-img" src={LightsOut} />
          <div className="project-details">Polished Map</div>
        </div>

        <div className="project">
          <img className="intro-img" src={LightsOut} />
          <div className="project-details">TourBox Linux Driver</div>
        </div>

        <div className="project">
          <img className="intro-img" src={LightsOut} />
          <div className="project-details">Catppuccin LaTeX Port</div>
        </div>

        <div className="project">
          <img className="intro-img" src={LightsOut} />
          <div className="project-details">DSA Study Materials</div>
        </div>
      </div>
    </section>
  );
}
