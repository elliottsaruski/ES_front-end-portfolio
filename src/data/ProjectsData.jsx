import HRS_image from "../assets/projects/HRS_screenshot.png";
import SON_image from "../assets/projects/SON_screenshot.png";
import ENVI_image from "../assets/projects/ENVI_screenshot.png";

export const ProjectsData = [
  {
    id: 1,
    img: SON_image,
    title: "Symptoms of Nature: A Creative Collective",
    stack: "Vite, React.js, Node.js, React Router, Notion API, react-reader",
    desc: "Founder and Web Dev. Seeks to host and spotlight members' latest creative adventures, events, and community collaborations. Uses Notion API as a CMS, allowing our team to update blog posts without having to code. Will also host .epub files of our monthly Zine (created by our design department) featuring our artists.",
    site: "https://symptomsofnature.netlify.app",
    code: "https://github.com/elliottsaruski/symptoms-of-nature-website",
  },
  {
    id: 2,
    img: HRS_image,
    title: "HRS",
    stack: "Vite, React.js, Node.js, wavesurfer.js, File + FileReader API",
    desc: "Web App that allows users to adjust speed and pitch of uploaded audio file. Responsive interface includes a radial knob to adjust speed and a traversable visual audio waveform.",
    site: "https://hrs-app.netlify.app/",
    code: "https://github.com/elliottsaruski/HRS-app",
  },
  {
    id: 3,
    img: ENVI_image,
    title: "envi: a Creative Portfolio",
    stack: "Vite, React.js, Node.js, React Router, Cloudinary, Web Audio API, react-tweet",
    desc: "Web Design, branding, and custom web audio player made for my personal electronic music and visual production project, envi.",
    site: "https://envimusic.netlify.app",
    code: "https://github.com/elliottsaruski/envi-website",
  },
];
