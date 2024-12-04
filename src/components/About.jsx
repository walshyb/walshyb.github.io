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

      <h3>Background and Such ✨</h3>

      <p>
        I grew up the Bronx, NY and took an interest in web development at a
        young age by learning the basics to design my user lookup on Neopets,
        the hit early aughts virtual pet game. From there, I became enamored
        with web technologies, creating personal sites and blogs, and eventually
        taking my high school's computer science course the first year it was
        offered. There, I started to learn Java and develop foundational
        knowledge in CS; this also solidifified my desire to study CS in
        university! In university, I strove to learn as much as I could both in
        and out of class. There wasn't much in the cirriculum for web
        development at school, so classes primarily focused on programmatical
        thinking, algorithms, and data structures, while outside of class I
        focused on learning web technologies and trying to secure internships /
        jobs.
      </p>

      <p>
        From there, I had the opportunity to work with all kinds of languages
        and tech across the stack! The kinds of work I've done professionally
        greatly varies, but at a <strong>high level</strong>:
      </p>

      <ul>
        <li>
          Designing & creating APIs (in Python, Ruby [on Rails], and Node)
        </li>
        <li>
          Building frontend systems and components based on mockups (primarily
          React, but jQuery too back in the day)
        </li>
        <li>
          Automating workflows &amp; processes by writing relevant scripts
          (Ruby, Python, JavaScript){" "}
        </li>
        <li>
          Documenting APIs, workflows, application &amp; system processes
          (Swagger / OpenAPI, Markdown, Confluence, Notion, Cucumber / Gherkin)
        </li>
        <li>Designing & managing database systems (PostgreSQL, MySQL)</li>
        <li>Writing tests (Jest, RSpec, Mocha, Puppeteer)</li>
        <li>Building custom content management systems</li>
        <li>Working on ETLs</li>
      </ul>

      <p>
        While though my background is primarily in web development, I have a
        keen interest in expanding my horizons to work tangential to the web! I
        have recently been experimenting game development and low-level
        technologies. I happened to find a niche that manages to fit in both of
        those categories: GameBoy development! I have been learning Game Boy
        Assembly (specifically Rednex Game Boy Assembly), and working on a very
        very simple puzzle game, &nbsp;
        <a href="https://github.com/walshyb/lights-out-gb" target="_blank">
          Lights Out
        </a>
        , based off the 1995 electronic handheld game of the same name. It's
        still in progress, but this has been a great experience to work on my
        mediocre pixel art skills, and learn assembly, and low-level thinking
        all at the same time. Separately, I've also been trying to sharpen my
        C++ skills by creating on a tilemap editor in the browser with React and
        C++ (via wasm).
      </p>

      {/*<p>
        Having started working in a professional setting relatively early in my
        software career, it's been really interesting to see how quickly and the
        way the internet, as well as web tech, has evolved over time!
      </p>*/}

      <h3>Interests</h3>

      <p>
        interests: music, pixel art, low level languages, coffee, the old
        internet, personal sites, community
      </p>
      <p>i'm a volunteer coach for my old high school's robotics club</p>

      <p>Open source stuff</p>

      <h3>About this Site!!</h3>
    </section>
  );
}
