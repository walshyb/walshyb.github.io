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
          <div className="project-details">
            <h3>SUNY New Paltz Library</h3>
            <p>My Game Boy puzzle game written in assembly</p>
            <div className="tags">#assembly</div>
          </div>
        </div>

        <div className="project">
          <img className="intro-img" src={CatskillsConf} />
          <div className="project-details">
            <h3>Catskills Conf</h3>
            <p>My Game Boy puzzle game written in assembly</p>
            <div className="tags">#assembly</div>
          </div>
        </div>

        <div className="project">
          <img className="intro-img" src={LightsOut} />
          <div className="project-details">
            <h3>Polished Map</h3>
            <p>My Game Boy puzzle game written in assembly</p>
            <div className="tags">#assembly</div>
          </div>
        </div>

        <div className="project">
          <img className="intro-img" src={LightsOut} />
          <div className="project-details">
            <h3>TourBox Linux Driver</h3>
            <p>My Game Boy puzzle game written in assembly</p>
            <div className="tags">#assembly</div>
          </div>
        </div>

        <div className="project">
          <img
            className="intro-img"
            src="https://github.com/catppuccin/latex/raw/main/assets/preview.webp"
          />
          <div className="project-details">
            <h3>Catppuccin LaTeX Port</h3>
            <p>My Game Boy puzzle game written in assembly</p>
            <div className="tags">#assembly</div>
          </div>
        </div>

        <div className="project">
          <img className="intro-img" src={LightsOut} />
          <div className="project-details">
            <h3>DSA Study Mats</h3>
            <p>My Game Boy puzzle game written in assembly</p>
            <div className="tags">#assembly</div>
          </div>
        </div>
      </div>
    </section>
  );
}
