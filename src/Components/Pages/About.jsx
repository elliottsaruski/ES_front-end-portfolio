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
      <h2>About</h2>
      <div className="about-inner-wrapper">
        <div className="about-description-wrapper">
          <img
            src="/src/assets/es-headshot.jpg"
            alt="elliott headshot"
            className="headshot-img"
          />
          <div className="text-and-edu">
            <span className="about-span">
              Hiya! My name is Elliott {"("}2 L{"'"}s, 2 T{"'"}s{")"} Saruski{" "}
              {"("}
              <em>sa-roo-ski</em> {")"}, a Marketer turned Front-End Engineer -
              based in Miami, FL - with a specialty in <strong>ReactJS.</strong>{" "}
              In my spare time I make{" "}
              <a href="https://soundcloud.com/envimusic">
                <strong>electronic music</strong>
              </a>
              , <strong>3D graphics</strong>, & other{" "}
              <strong>multimedia</strong>.<br></br>
              <br></br>I{"'"}m currently looking to join a team of developers
              who would find benefit from my keen eye for detail and endless
              desire for learning. Ideally, I would like to incorporate my deep
              passion for music technology with the development of interactive
              digital experiences, from DAWS, VSTs, and Web Audio Applications
              to musician / producer focused products or services.
            </span>
            <hr></hr>
            <div className="education-wrapper">
              <h3>Education</h3>
              <div className="education">
                <div className="education-item" id="coding">
                  <h5 className="education-time-frame">2022-24</h5>
                  <p className="blue-text">Front-End Engineer Career Path</p>
                  <p>Codecademy.com</p>
                </div>
                <div className="education-item" id="marketing">
                  <h5 className="education-time-frame">2020</h5>
                  <p className="blue-text">B.S. Marketing</p>
                  <p>Florida State University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------- */}
        <div className="skills-wrapper">
          <div className="skills-card" id="languages">
            <h3>Programming Languages</h3>

            <div className="skills-items">
              <ul>
                <li>
                  <IoLogoJavascript />
                  <p className="skill-item-text">JavaScript (ES6+)</p>
                </li>
                <li>
                  <FaHtml5 />
                  <p className="skill-item-text">HTML</p>
                </li>
                <li>
                  <FaCss3Alt />
                  <p className="skill-item-text">CSS</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="skills-card" id="libraries">
            <h3>Libraries & Frameworks</h3>{" "}
            <div className="skills-items">
              <ul>
                <li>
                  <FaReact />
                  <p className="skill-item-text">ReactJS</p>
                </li>
                <li>
                  <SiVite />
                  <p className="skill-item-text">Vite</p>
                </li>
                <li>
                  <SiRedux />
                  <p className="skill-item-text">Redux</p>
                </li>
                <li>
                  <TbBrandFramerMotion />
                  <p className="skill-item-text">Framer Motion</p>
                </li>
                <li>
                  <SiP5Dotjs />
                  <p className="skill-item-text">p5.js</p>
                </li>
                <li>
                  <CgMusicSpeaker />
                  <p className="skill-item-text">Tone.js</p>
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
                  <p className="skill-item-text">Node.js</p>
                </li>
                <li>
                  <FaGitAlt />
                  <p className="skill-item-text">Git</p>
                </li>
                <li>
                  <SiNetlify />
                  <p className="skill-item-text">Netlify</p>
                </li>
                <li>
                  <SiLighthouse />
                  <p className="skill-item-text">Lighthouse</p>
                </li>
                <li>
                  <FaFigma />
                  <p className="skill-item-text">Figma</p>
                </li>
                <li>
                  <SiAdobecreativecloud />
                  <p className="skill-item-text">Adobe CC</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
