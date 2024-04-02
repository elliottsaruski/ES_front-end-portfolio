import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import {
  SiVite,
  SiRedux,
  SiP5Dotjs,
  SiLighthouse,
  SiNetlify,
  SiAdobecreativecloud,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { CgMusicSpeaker } from "react-icons/cg";

function About() {
  return (
    <section id="about" className="about-wrapper">
      <h2>
        <hr></hr>About
      </h2>

      <div className="about-inner-wrapper">
        <img
          src="/src/assets/es-headshot.jpg"
          alt="elliott headshot"
          className="headshot-img"
        />
        <span className="about-span">
          a Marketer turned Front-End Engineer with a specialty in{" "}
          <strong>ReactJS</strong> and an interest in creative coding. In my
          spare time I make{" "}
          <a href="https://soundcloud.com/envimusic">
            <strong>electronic music</strong>
          </a>
          , <strong>3D graphics</strong>, & other <strong>multimedia</strong>.
          <br></br>
          <br></br>I{"'"}m currently looking to join a team of
          developers...(finish this)
        </span>
        <div className="education-wrapper">
          <h3>Education</h3>
          {/* <hr></hr> */}
          <div className="education">
            <div className="education-item" id="coding">
              <h5 className="education-time-frame">2022-24</h5>
              <p className="blue-text">Front-End Engineering Career Path</p>
              <p>Codecademy.com</p>
            </div>
            <div className="education-item" id="marketing">
              <h5 className="education-time-frame">2020</h5>
              <p className="blue-text">B.S. Marketing</p>
              <p>Florida State University</p>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------- */}
        <div className="skills-card" id="languages">
          <h3>Programming Languages</h3>
          <div className="skills-items">
            <ul>
              <li>
                <IoLogoJavascript />
                JavaScript (ES6+)
              </li>
              <li>
                <FaHtml5 />
                HTML
              </li>
              <li>
                <FaCss3Alt />
                CSS
              </li>
            </ul>
          </div>
        </div>
        <div className="skills-card" id="libraries">
          <h3>Libraries & Frameworks</h3>
          <div className="skills-items">
            <ul>
              <li>
                <FaReact />
                ReactJS
              </li>
              <li>
                <SiVite />
                Vite
              </li>
              <li>
                <SiRedux />
                Redux
              </li>
              <li>
                <TbBrandFramerMotion />
                Framer Motion
              </li>
              <li>
                <SiP5Dotjs />
                p5.js
              </li>
              <li>
                <CgMusicSpeaker />
                Tone.js
              </li>
            </ul>
          </div>
        </div>
        <div className="skills-card" id="tools">
          <h3>Tools & Platforms</h3>
          <div className="skills-items">
            <ul>
              <li>
                <FaNodeJs />
                Node.js
              </li>
              <li>
                <FaGitAlt />
                Git
              </li>
              <li>
                <SiNetlify />
                Netlify
              </li>
              <li>
                <SiLighthouse />
                Lighthouse
              </li>
              <li>
                <FaFigma />
                Figma
              </li>
              <li>
                <SiAdobecreativecloud />
                Adobe CC
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
