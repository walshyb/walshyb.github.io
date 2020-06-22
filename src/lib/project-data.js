import NewPaltzLibraryImage from '../images/new-paltz-library.png';
import RadioKingstonImage from '../images/radio-kingston.png';
import CatskillsConfImage from '../images/catskills-conf.png';

const projectData = [
  {
      name: 'SUNY New Paltz Library',
      image: NewPaltzLibraryImage,
      tags: ['wordpress', 'jquery', 'php', 'sass', 'gulp'],
      content: 'A rebuild of the SUNY New Paltz library website from scratch to make the site accessible and add the ability to manage content.',
      liveSiteUrl: 'https://library.newpaltz.edu',
      caseStudyUrl: 'https://miloaxelrod.com/stl-website.php'
  },
  {
      name: 'Radio Kingston',
      image: RadioKingstonImage,
      tags: ['react', 'es6', 'sass', 'node', 'wordpress'],
      content: 'Radio Kingston is a local radio station in Kingston, NY. Working as a member of the Moonfarmer team, we built a react site as to play on-demand station episodes & podcasts.',
      liveSiteUrl: 'https://radiokingston.org',
      caseStudyUrl: 'https://moonfarmer.com/work/radio-kingston'
  },
  {
      name: 'Catskills Conf',
      image: CatskillsConfImage,
      tags: ['jquery', 'sass', 'handlebars'],
      content: 'Static site for the annual tech conference Catskills Conf to headline speakers and their talks.',
      caseStudyUrl: 'https://miloaxelrod.com/catskills-conf.php'
  },
];

export default projectData;
