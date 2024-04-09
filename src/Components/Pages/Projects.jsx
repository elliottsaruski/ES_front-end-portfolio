import { GoLinkExternal } from "react-icons/go";

function Projects() {
  return (
    <section id="projects" className="projects-wrapper">
      <h2>Projects</h2>
      <div className="projects-list">
        <div className="project-card" id="project-1">
          <div className="project-text-wrapper">
            <h3>HRS</h3>
            <hr></hr>
            <p className="project-stack">
              <strong>Stack: </strong>
              <em>ReactJS, Vite, Node.JS, wavesurfer.js, File API</em>
            </p>
            <span className="project-description">
              Transform the speed of an uploaded audio file. HRS also works as a
              standalone audio player with an interactive waveform scrubber.
            </span>
            <div className="project-link-wrapper">
              <a>demo</a>
              <a>code</a>
              <a>more info</a>
            </div>
          </div>
          <img
            className="project-img"
            src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>

        <div className="project-card" id="project-2">
          <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <div className="project-text-wrapper">
            <h3>
              <strong>Artist Website:</strong> Max Fry
            </h3>
            <hr></hr>
            <p className="project-stack">
              <strong>Stack: </strong>
              <em>ReactJS, Node.JS...</em>
            </p>
            <span className="project-description">
              Web Design, branding and custom web audio player made for popular
              Shoegaze artist, Max Fry.
            </span>
            <div className="project-link-wrapper">
              <a>website</a>
              <a>code</a>
              <a>more info</a>
            </div>
          </div>
        </div>
        <div className="project-card" id="project-3">
          <div className="project-text-wrapper">
            <h3>
              <strong>Artist Website:</strong> XCOPE
            </h3>
            <hr></hr>
            <p className="project-stack">
              <strong>Stack: </strong>
              <em>ReactJS, Node.JS...</em>
            </p>
            <span className="project-description">
              Web Design, branding, and custom web audio player made for
              electronic producer, XCOPE.
            </span>
            <div className="project-link-wrapper">
              <a>website</a>
              <a>code</a>
              <a>more info</a>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div className="project-card" id="project-4">
          <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

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
              <a>website</a>
              <a>code</a>
              <a>more info</a>
            </div>
          </div>
        </div>
        <button
          className="view-more-projects-button"
          href="https://github.com/elliottsbuttonruski">
          <p>View all projects</p>
          <GoLinkExternal id="link-to-more-projects-icon" />
        </button>
      </div>
    </section>
  );
}

export default Projects;
