import { GoLinkExternal } from "react-icons/go";

import SON_image from "../../assets/projects/SON_screenshot.png";
import HRS_image from "../../assets/projects/HRS_screenshot.png";

function Projects() {
  return (
    <section id="projects" className="projects-wrapper">
      <h2>Selected Work</h2>

      <div className="projects-list">
        <div className="project-card" id="project-1">
          <img className="project-img" src={HRS_image} />
          <div className="project-text-wrapper">
            <h3>HRS</h3>
            <hr></hr>
            <p className="project-stack">
              <strong>Stack: </strong>
              <em>ReactJS, Vite, Node.JS, wavesurfer.js, File API</em>
            </p>
            <span className="project-description">
              Web App that allows users to adjust speed and pitch of uploaded
              audio file. Responsive interface includes a radial knob to adjust
              speed and a traversable visual audio waveform.
            </span>
            <div className="project-link-wrapper">
              <a href="https://hrs-app.netlify.app/" target="_blank">
                demo
              </a>
              <a
                href="https://github.com/elliottsaruski/HRS-app"
                target="_blank">
                code
              </a>
              <a>more info</a>
            </div>
          </div>
        </div>

        <div className="project-card" id="project-3">
          <img className="project-img" src={SON_image} />
          <div className="project-text-wrapper">
            <h3>Symptoms of Nature: Creative Collective</h3>
            <hr></hr>
            <p className="project-stack">
              <strong>Stack: </strong>
              <em>ReactJS, Vite, Node.JS, Notion API</em>
            </p>
            <span className="project-description">
              Website for a creative collective I am a founder and member of.
              Utilized brutalism design aspects in building a functional web app
              to host our members newest and latest creative adventures. This
              project was selected for it{"’"}s emphasis on teamwork.
            </span>
            <div className="project-link-wrapper">
              <a href="https://symptomsofnature.netlify.app" target="_blank">
                website
              </a>
              <a
                href="https://github.com/elliottsaruski/symptoms-of-nature-website"
                target="_blank">
                code
              </a>
              <a>more info</a>
            </div>
          </div>
        </div>

        <div className="project-card" id="project-4">
          <img
            className="project-img"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="project-text-wrapper">
            <h3>
              <strong>Artist Website:</strong> envi
            </h3>
            <hr></hr>
            <p className="project-stack">
              <strong>Stack: </strong>
              <em>ReactJS, Node.JS...</em>
            </p>
            <span className="project-description">
              Web Design, branding, and custom web audio player made for my
              personal electronic music and visual production project, envi.
            </span>
            <div className="project-link-wrapper">
              <a target="_blank">website</a>
              <a
                href="https://github.com/elliottsaruski/envi-website"
                target="_blank">
                code
              </a>
              <a>more info</a>
            </div>
          </div>
        </div>
      </div>
      <a
        className="view-more-projects-button"
        href="https://github.com/elliottsaruski"
        target="_blank">
        <p>View all projects</p>
        <GoLinkExternal id="link-to-more-projects-icon" />
      </a>
    </section>
  );
}

export default Projects;
