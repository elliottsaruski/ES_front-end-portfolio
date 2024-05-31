import HRS_image from "../assets/projects/HRS_screenshot.png";
import SON_image from "../assets/projects/SON_screenshot.png";
import ENVI_image from "../assets/projects/ENVI_screenshot.png";

export const ProjectsData = [
  {
    id: 1,
    img: HRS_image,
    title: "HRS",
    stack: "ReactJS, Vite, Node.JS, wavesurfer.js, File API",
    desc: "Web App that allows users to adjust speed and pitch of uploaded audio file. Responsive interface includes a radial knob to adjust speed and a traversable visual audio waveform.",
    site: "https://hrs-app.netlify.app/",
    code: "https://github.com/elliottsaruski/HRS-app",
  },
  {
    id: 2,
    img: SON_image,
    title: "Symptoms of Nature: Creative Collective",
    stack: "ReactJS, Vite, Node.JS, Notion API",
    desc: "Website for a creative collective I am a founder and member of. Utilized brutalism design aspects in building a functional web app to host our members newest and latest creative adventures. This project was selected for it's emphasis on teamwork.",
    site: "https://symptomsofnature.netlify.app",
    code: "https://github.com/elliottsaruski/symptoms-of-nature-website",
  },
  {
    id: 3,
    img: ENVI_image,
    title: "Artist Website: envi",
    stack: "ReactJS, Node.JS...",
    desc: "Web Design, branding, and custom web audio player made for my personal electronic music and visual production project, envi.",
    site: "https://github.com/elliottsaruski/envi-website",
    code: "https://github.com/elliottsaruski/envi-website",
  },
];
