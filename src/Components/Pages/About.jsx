// import { GoLinkExternal } from "react-icons/go";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { IoDownload } from "react-icons/io5";
import { GoLinkExternal } from "react-icons/go";

function About() {
  return (
    <section id="about" className="about-wrapper">
      <h2>About Me</h2>

      <div className="about-inner-wrapper">
        <div className="about-top">
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
            </span>
            {/* <hr /> */}

            <div className="education-wrapper">
              <h3>Education</h3>
              <div className="education">
                <ul className="education-item" id="coding">
                  <li className="education-type">
                    Front-End Engineer Career Path
                  </li>
                  <li className="education-name"> Codecademy.com, 2022-2023</li>
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
          <div className="about-col-top-right">
            <img
              src="/src/assets/es-headshot.jpg"
              alt="elliott headshot"
              className="headshot-img"
            />
          </div>
        </div>

        <div className="about-bottom">
          <div className="stack-specialty">
            <h3>Stack</h3>
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

          <div className="other-skills">
            <div className="skill">
              <h3>Languages</h3>
              <ul className="other-skills-list">
                <li>HTML</li>
                <li>CSS3</li>
                <li>JavaScript</li>
              </ul>
            </div>
            {/* <hr /> */}
            <div className="skill">
              <h3>Other Libraries</h3>
              <ul className="other-skills-list">
                <li>Framer Motion</li>
                <li>Tonejs</li>
                <li>Web Audio</li>
                <li>p5js</li>
              </ul>
            </div>
            {/* <hr /> */}
            <div className="skill">
              <h3>Tools + Software</h3>
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
    </section>
  );
}

export default About;
