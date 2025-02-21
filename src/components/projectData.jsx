import LightsOut from "../images/lights-out.png";
import CatskillsConf from "../images/catskills-conf.png";
import NewPaltz from "../images/new-paltz-library.png";
import Map from "../images/saffron.png";
import Catppuccin from "../images/port.webp";
import Radio from "../images/radio.png";
import DSA from "../images/dsa.png";
import Algos from "../images/algos.webp";

export const projects = {
  map: {
    name: "Polished Map Web",
    imgSrc: Map,
    description:
      "A map and tileset editor for pret's gen1 and gen2 Pokemon disassemblies, Polished Crystal, and derived projects. This is a web implementation written in C++, compiled into wasm, and JS",
    githubLink: "https://github.com/walshyb/polished-map-web",
    tags: ["C++", "wasm", "react", "typescript"],
  },
  lights: {
    name: "Lights Out GB",
    imgSrc: LightsOut,
    description:
      "My Game Boy puzzle game written in assembly! Still in progress, but I'm having a lot of fun working with assembly, working directly with hardware, and making (simple) pixel art! This project is my foray into game development!",
    tags: ["assembly", "game development"],
    caseStudyLink: "",
    liveSiteLink: "",
    readMore: false,
    githubLink: "https://github.com/walshyb/lights-out-gb",
    content: (
      <>
        <div>Uh tags here? #tech</div>
        <p>Some GOOD lorem ipsum</p>
      </>
    ),
  },
  algos: {
    name: "Algorithm Visualizer",
    imgSrc: Algos,
    description:
      "An algorithm visualizer built with React and C++ via WebAssembly",
    tags: ["c++", "react", "wasm", "algorithms", "datastructures"],
    liveSiteLink: "/algorithms-visualizer",
    liveSiteLinkText: "Try It Out",
    githubLink: "https://github.com/walshyb/algorithms-visualizer",
  },
  newpz: {
    name: "SUNY New Paltz Library",
    imgSrc: NewPaltz,
    description:
      "A rebuild of the SUNY New Paltz library website from scratch to make the site accessible per ADA compliant standards and add the ability to manage content",
    tags: ["wordpress", "php", "jquery", "gulp"],
    readMore: false,
    liveSiteLink: "https://library.newpaltz.edu",
  },
  latex: {
    name: "Catppuccin LaTeX Port",
    imgSrc: Catppuccin,
    description:
      "The official port and style package implementation for LaTeX projects.",
    tags: ["LaTeX"],
    readMore: false,
    githubLink: "https://github.com/catppuccin/latex",
  },
  dsa: {
    name: "DSA Study Materials",
    imgSrc: DSA,
    content:
      "Everytime I want to study for technical interviews, I always have to remake notes and track down common questions or patterns.",
    description:
      "My notes to help me, more easily, study for technical interviews. Neatly organized by being written with LaTeX.",
    tags: ["algorithms", "datastructures", "LaTeX"],
    readMore: false,
    githubLink: "https://github.com/walshyb/datastructures-and-algorithms",
  },
  cats: {
    name: "Catskills Conf",
    imgSrc: CatskillsConf,
    readMore: false,
    description:
      "Static site for the tech conference, Catskills Conf, to headline speakers and their talks.",
    tags: ["jquery", "sass", "handlebars"],
    caseStudyLink:
      "https://www.behance.net/gallery/52536931/Catskills-Conf-Brand-Website-Merch",
  },
  radio: {
    name: "Radio Kingston",
    imgSrc: Radio,
    readMore: false,
    description:
      "Radio Kingston is a local radio station in Kingston, NY. Working as a member of the Moonfarmer team, we built a react site as to play on-demand station episodes & podcasts.",
    tags: ["react", "node", "wordpress", "ssr"],
    liveSiteLink: "https://radiokingston.org",
  },
};
