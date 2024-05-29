// import { GoLinkExternal } from "react-icons/go";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { IoDownload } from "react-icons/io5";
import { GoLinkExternal } from "react-icons/go";

import ES_headshot from "../../assets/ES_headshot.jpg";

function About() {
  return (
    <section id="about" className="about-wrapper">
      <h2>About Me</h2>
      <div className="about-inner-wrapper">
        <div className="about-top">
          <div className="headshot-cta">
            <img
              src={ES_headshot}
              alt="elliott headshot"
              className="headshot-img"
            />
            <div className="about-resume-cv-wrapper">
              <button className="CV">
                <p>CV</p>
                <IoDownload id="download-icon" />
              </button>
              <button className="view-more-projects-button RESUME">
                <p>Resume</p> <GoLinkExternal id="link-to-more-projects-icon" />
              </button>
            </div>
          </div>
          <div className="about-col-top-left">
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
              <strong>multimedia</strong>.
              <br />
              <br />I{"'"}m currently looking to join a team of developers who
              would find benefit from my keen eye for detail and endless desire
              for learning. Ideally, I would like to incorporate my deep passion
              for music technology with the development of interactive digital
              experiences, from DAWS, VSTs, and Web Audio Applications to
              musician / producer focused products or services.
              <br />
              <br />
              Anyone can learn to code, but not everyone can code [themselves]
              to WANT to learn. I am eager to be brought onto a team to provide
              my skills while simultaneously being rewarded with opportunities
              to learn.
            </span>
            <div className="education-and-stack">
              <div className="education-wrapper">
                <h4>Education</h4>
                <div className="education">
                  <ul className="education-item" id="coding">
                    <li className="education-type">
                      Front-End Engineer Career Path
                    </li>
                    <li className="education-name">
                      {" "}
                      Codecademy.com, 2022-2023
                    </li>
                  </ul>
                  <ul className="education-item" id="marketing">
                    <li className="education-type">
                      Bachelor of Science in Marketing
                    </li>
                    <li className="education-name">
                      Florida State University, 2020
                    </li>
                  </ul>
                </div>
              </div>
              <div className="stack-specialty">
                <h4 id="stack-title">Stack</h4>
                <ul>
                  <li>
                    <FaReact className="stack-icon" />
                    <p>React.js</p>
                  </li>
                  <li>
                    <SiVite className="stack-icon" />
                    <p>Vite</p>
                  </li>
                  <li>
                    <FaNodeJs className="stack-icon" />
                    <p>Node.js</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="other-skills">
              <div className="skill">
                <h4>Languages</h4>
                <ul className="other-skills-list">
                  <li>HTML</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>C++ (learning)</li>
                  <li>React Typescript (learning)</li>
                </ul>
              </div>
              <div className="skill">
                <h4>Other Libraries</h4>
                <ul className="other-skills-list">
                  <li>Framer Motion</li>
                  <li>Tone.js</li>
                  <li>Web Audio API</li>
                  <li>p5.js</li>
                </ul>
              </div>
              <div className="skill">
                <h4>Tools + Software</h4>
                <ul className="other-skills-list">
                  <li>Figma</li>
                  <li>Adobe CC</li>
                  <li>Ableton Live</li>
                  <li>Blender 3D</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
