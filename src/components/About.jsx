import "./About.scss";
import WinkImage from "../images/wink.png";

export default function About() {
  return (
    <section className="about">
      <h2>About Me</h2>

      <h3>
        This section is *certified* in progres{" "}
        <img src={WinkImage} className="wink" alt="a wink ;)" />
      </h3>

      <p>
        interests: music, pixel art, low level languages, coffee, the old
        internet, personal sites, community
      </p>
      <p>i'm a volunteer coach for my old high school's robotics club</p>

      <p>Open source stuff</p>

      <p>
        <b>Techy stuff I've done at my jobs:</b>
      </p>
      <ul>
        <li>Designing & creating APIs in Python and Ruby on Rails</li>
        <li>Maintaining thorough and clear documentation</li>
        <li>Building sites in NextJS and React</li>
        <li>Working in an agile methodology</li>
        <li>Designing & managing database systems</li>
        <li>Writing tests with BDD methodology</li>
        <li>Building custom content management systems</li>
      </ul>
    </section>
  );
}
