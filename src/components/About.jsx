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

      <p>I have many interests that I hop between!!</p>

      <p>
        <strong>Robotics:</strong> Robotics is a fairly new venture for me! As
        of 2023, I have been a volunteer mentor / coach for my old high school's
        robotics team. Prior to taking on this role, I knew nearly nothing of
        the sort, so I had to learn quick. With another coach, we work together
        to assist our students in building a robot every year in prepartion for
        competitions, held by{" "}
        <a href="https://www.firstinspires.org/" target="_blank">
          <i>First</i>
        </a>
        . There's more to robotics than actually just building a robot,
        surprisingly! On the technical side, there's research, component and
        part design, stylistic design, coding (driver and autonomous programs),
        building, testing, and iterating. But as a team we also need to
        consider: budget, finance sources, collaborating, advertising, learning
        + teaching, documentation, and room organizing. I personally find this a
        lot of fun!
      </p>

      <p>
        <strong>Music:</strong> I love playing music! I learned flute in high
        school so I can join the marching band, which I loved all 4 years I did
        it. I continued to play flute in orchestra and symphony in college.
        During that time, I also taught myself guitar and took a piano class. I
        also was in choir throughout high school, and took gospel choir for a
        couple years in college as well!
      </p>

      <p>
        <strong>Coffee:</strong> I love coffee! All kinds. But I typically get
        myself iced lattes when I go out. I picked up working at a coffee shop
        in New Paltz, NY for a summer just for fun because I enjoy coffee (and
        relevant shops) so much. I want to work at another one on the side
        again! Or maybe even open up my own one day 🤔
      </p>

      <p>
        <strong>Pixel Art:</strong> Though I am bad at it, I have an
        appreciation for pixel art! I've been steadily learning and practicing
        on Procreate and Aesprite.
      </p>

      <p>
        <strong>Conferences:</strong> I love attending conferences, but I love
        volunteering at them even more! I feel that volunteering at conferences
        allows you to engage with the people and conference as a whole on a
        deeper level. In the past, I have volunteered at the UI/UX conference
        Smashing Conf, and typography conference Typographics. In the Hudson
        Valley, I was a co-organizer for Catskills Conf, the 3-day yearly
        conference that conjoins technology and nature, spawned from the Hudson
        Valley Tech Meetup. For Catskills Conf, I'd help work on the websites,
        manage attendee lists, communicate with speakers, assist with lodging,
        and do general tasks throughout the conference.
      </p>

      <p>
        <strong>Open Source:</strong> I enjoy contributing to open source
        projects when I can! I find this is a great way to stay sharp with
        technologies I may not be using regularly, as well as contributing to
        projects that I believe in or support!
      </p>

      <h3>About this Site!!</h3>
      <p>interests: the old internet, personal sites, community</p>
    </section>
  );
}
