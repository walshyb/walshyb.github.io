import LightsOut from "../images/lights-out.png";
import CatskillsConf from "../images/catskills-conf.png";
import NewPaltz from "../images/new-paltz-library.png";
import Map from "../images/saffron.png";
import Catppuccin from "../images/port.webp";
import Radio from "../images/radio.png";
import DSA from "../images/dsa.png";

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
    description: "My Game Boy puzzle game written in assembly",
    tags: ["assembly"],
    caseStudyLink: "",
    liveSiteLink: "",
    githubLink: "https://github.com/walshyb/lights-out-gb",
    content: (
      <>
        <div>Uh tags here? #tech</div>
        <p>Some GOOD lorem ipsum</p>
      </>
    ),
  },
  newpz: {
    name: "SUNY New Paltz Library",
    imgSrc: NewPaltz,
    description:
      "A rebuild of the SUNY New Paltz library website from scratch to make the site accessible per ADA compliant standards and add the ability to manage content",
    tags: ["wordpress", "php", "jquery", "gulp"],
  },
  latex: {
    name: "Catppuccin LaTeX Port",
    imgSrc: Catppuccin,
    description: "",
    tags: ["LaTeX"],
  },
  dsa: {
    name: "DSA Study Materials",
    imgSrc: DSA,
    description: "",
    tags: ["algorithms", "datastructures", "LaTeX"],
  },
  cats: {
    name: "Catskills Conf",
    imgSrc: CatskillsConf,
    description:
      "Static site for the annual tech conference Catskills Conf to headline speakers and their talks.",
    tags: ["jquery", "sass", "handlebars"],
  },
  radio: {
    name: "Radio Kingston",
    imgSrc: Radio,
    description:
      "Radio Kingston is a local radio station in Kingston, NY. Working as a member of the Moonfarmer team, we built a react site as to play on-demand station episodes & podcasts.",
    tags: ["react", "node", "wordpress", "ssr"],
  },
};
