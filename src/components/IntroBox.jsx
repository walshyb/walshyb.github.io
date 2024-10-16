import "./IntroBox.scss";
import WinkImage from "../images/wink.png";
import GithubImage from "../images/affiliate-github.png";
import Stars from "../images/stars.gif";

export default function IntroBox() {
  return (
    <section className="intro-box">
      <div className="intro-img-container">
        <img className="intro-img" src="https://placehold.co/300x300" />
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
            {/* took the lazy way out of bolding this */}
            Current status: <b>open to work!</b>
          </p>
          <p>
            (This site is still in development! Not the most mobile friendly!
            And (slowly) working on higher fidelity / appropriately-sized
            assets!)
            <br />
            <br />
            <img className="stars" src={Stars} />
          </p>
        </div>

        <div className="affiliate-links">
          <h3>
            Some quick links{" "}
            <img src={WinkImage} className="wink" alt="a wink ;)" />
          </h3>
          <div className="affiliate-banners">
            <img
              className="affiliate-banner"
              src={GithubImage}
              alt="Out link to my Github profile"
            />
            <img
              className="affiliate-banner"
              src="https://placehold.co/81x33"
              alt="Out link to my LinkedIn profile"
            />
            <img
              className="affiliate-banner"
              src="https://placehold.co/81x33"
              alt="Out link to my PDF Resume"
            />
            <img
              className="affiliate-banner"
              src="https://placehold.co/81x33"
              alt="Anchor link to my About section. Skips my projects"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
