import { GoLinkExternal } from "react-icons/go";

function About() {
  return (
    <section id="about" className="about-wrapper">
      <h2>About Me</h2>
      <div className="about-inner-wrapper">
        <div className="img-and-about">
          <img
            src="/src/assets/es-headshot.jpg"
            alt="elliott headshot"
            className="headshot-img"
          />
          <span className="about-span">
            Hiya! My name is Elliott {"("}2 L{"'"}s, 2 T{"'"}s{")"} Saruski{" "}
            {"("}
            <em>sa-roo-ski</em> {")"}, a Marketer turned Front-End Engineer -
            based in Miami, FL - with a specialty in <strong>ReactJS.</strong>{" "}
            In my spare time I make{" "}
            <a href="https://soundcloud.com/envimusic">
              <strong>electronic music</strong>
            </a>
            , <strong>3D graphics</strong>, & other <strong>multimedia</strong>.
            <br></br>
            <br></br>I{"'"}m currently looking to join a team of developers who
            would find benefit from my keen eye for detail and endless desire
            for learning. Ideally, I would like to incorporate my deep passion
            for music technology with the development of interactive digital
            experiences, from DAWS, VSTs, and Web Audio Applications to musician
            / producer focused products or services.
          </span>
        </div>
        <div className="education-skills">
          <div className="education-wrapper">
            <h3>Education</h3>
            <div className="education">
              <div className="education-item" id="coding">
                <h5 className="education-time-frame">2022-23</h5>
                <p className="education-type">Front-End Engineer Career Path</p>
                <p>Codecademy.com</p>
              </div>
              <div className="education-item" id="marketing">
                <h5 className="education-time-frame">2020</h5>
                <p className="education-type">B.S. Marketing</p>
                <p>Florida State University</p>
              </div>
            </div>
          </div>
          <div className="skills-wrapper">
            <h3>Skills</h3>
            <div className="skills-card">
              <ul>
                <li>HTML</li>-<li>CSS3</li>-<li>JavaScript (ES6+)</li>-
                <li>ReactJS</li>-<li>Vite</li>-<li>Node.js</li>
                <li>Redux</li>-<li>Git</li>-<li>Netlify</li>-<li>Lighthouse</li>
                -<li>Figma</li>-<li>Adobe CC</li>-<li>Framer Motion</li>
                <li>Tone.js</li>-<li>Web Audio API</li>
              </ul>
            </div>
          </div>
        </div>
        <button className="view-more-projects-button">
          <p>Resume</p> <GoLinkExternal id="link-to-more-projects-icon" />
        </button>
      </div>
    </section>
  );
}

export default About;
