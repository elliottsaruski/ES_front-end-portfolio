import HRS_image from "../assets/projects/hrs-img2.png";
import SON_image from "../assets/projects/son-img2.jpg";
import ENVI_image from "../assets/projects/envi-img2.jpg";

export const ProjectsData = [
  {
    id: 1,
    img: SON_image,
    title: "Symptoms of Nature: A Creative Collective",
    stack:
      "Vite, React.js, Node.js, React Router, Notion API, Webamp, Netlify serverless functions",
    desc: "Seeks to host and spotlight members' latest creative adventures, events, and community collaborations. Uses Notion API as a CMS, allowing our team to update blog posts without having to code. Custom audio/visual content implemented with Webamp.",
    site: "https://symptomsofnature.com/home",
    code: "https://github.com/elliottsaruski/symptoms-of-nature-website",
  },
  {
    id: 2,
    img: HRS_image,
    title: "HRS",
    stack: "Vite, React.js, Node.js, wavesurfer.js, File + FileReader API",
    desc: "Web App that allows users to adjust speed and pitch of uploaded audio file. Responsive interface to adjust speed and a traverse audio through interactive waveform.",
    site: "https://hrs-app.netlify.app/",
    code: "https://github.com/elliottsaruski/HRS-app",
  },
  {
    id: 3,
    img: ENVI_image,
    title: "envi: a Creative Portfolio",
    stack:
      "Vite, React.js, Node.js, React Router, Cloudinary, Web Audio API, react-tweet",
    desc: "Web Design, branding, and custom web audio player made for my personal electronic music and visual production project, envi.",
    site: "https://envimusic.netlify.app",
    code: "https://github.com/elliottsaruski/envi-website",
  },
];
