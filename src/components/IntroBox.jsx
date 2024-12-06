import "./IntroBox.scss";
import WinkImage from "../images/wink.png";
import GithubImage from "../images/affiliate-github.png";
import ResumeImage from "../images/affiliate-resume.png";
import Stars from "../images/stars.gif";
import Vaporeon from "../images/vaporeon.jpg";

export default function IntroBox() {
  return (
    <section className="intro-box">
      <div className="intro-img-container">
        <img className="intro-img" src={Vaporeon} />
      </div>
      <div className="intro-content">
        <div className="intro-text">
          {/* TODO: turn these spans into tags that maybe filter by or bring up relevant projects? */}
          {/* TODO: make spans bold */}
          <p>
            I'm a software engineer based out of NYC! I have 8+ years working in
            web development across the stack. My current [software-related]
            interests are <span>low-level languages</span>,{" "}
            <span>game development</span>, and <span>backend technologies</span>
            .
          </p>
          <p>
            My most recent projects are a puzzle game made for the Game Boy, and
            a browser-based tilemap editor.
          </p>

          <p>
            Continue scrolling to check out some of my selected projects, or{" "}
            <a href="#about">skip down</a> to read more about myself.
          </p>

          <p>
            {/* took the lazy way out of bolding this */}
            Current status: <b>open to work!</b>
          </p>

          <p>
            <img className="stars" src={Stars} />
          </p>
        </div>

        <div className="affiliate-links">
          <h3>
            Some quick links{" "}
            <img src={WinkImage} className="wink" alt="a wink ;)" />
          </h3>
          <div className="affiliate-banners">
            <a
              className="affiliate-banner"
              target="_blank"
              href="https://github.com/walshyb"
            >
              <img src={GithubImage} alt="Out link to my Github profile" />
            </a>
            <a
              className="affiliate-banner"
              target="_blank"
              href="/Oct2024Resume.pdf"
            >
              <img src={ResumeImage} alt="Out link to my PDF Resume" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
