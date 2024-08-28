// import { GoLinkExternal } from "react-icons/go";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
// import { IoDownload } from "react-icons/io5";
import { GoLinkExternal } from "react-icons/go";

import ES_headshot from "../assets/es-headshot.jpg";
import resume_pdf from "../assets/ES_RESUME_FED-WEB.pdf";

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
              <a
                className="view-more-projects-button RESUME"
                href={resume_pdf}
                target="_blank">
                <p>Resume</p>
                <GoLinkExternal id="link-to-more-projects-icon" />
              </a>
            </div>
          </div>
          <div className="about-col-top-left">
            <span className="about-span">
              Hiya! My name is Elliott {"("}2 L{"'"}s, 2 T{"'"}s{")"} Saruski{" "}
              {"("}
              <em>sa-roo-ski</em>
              {")"}, a Marketer turned Front-End Engineer - based in Miami, FL -
              with a specialty in <strong>React.js.</strong> In my spare time I
              make{" "}
              <a href="https://envimusic.netlify.app" target="_blank">
                electronic music, 3D graphics/animations, & other multimedia
              </a>{" "}
              under the alias <em>envi</em>.
              <br />
              <br />I{"'"}m currently looking to join a team of developers who
              would find benefit from my keen eye for detail and endless desire
              for learning. <br />
              <br /> Ideally, I would like to incorporate my deep passion for
              music technology with the development of interactive digital
              experiences, from DAWS, VSTs, and Web Audio Applications to
              musician / producer focused products or services.
              <br />
              <br />
              <em className="blockQuote">
                {`"`}
                {
                  "Anyone can learn to code, but not everyone can code [themselves] a passion and desire to never stop learning."
                }
                {`"`}
              </em>
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
                </ul>
              </div>
              <div className="skill">
                <h4>Other Libraries</h4>
                <ul className="other-skills-list">
                  <li>Tone.js</li>
                  <li>react-three-fiber</li>
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
              <div className="skill">
                <h4>Currently Learning</h4>
                <ul className="other-skills-list">
                  <li>Typescript</li>
                  <li>C++</li>
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
