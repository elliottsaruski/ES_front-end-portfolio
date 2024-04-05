import { GoLinkExternal } from "react-icons/go";

function Projects() {
  return (
    <section id="projects" className="projects-wrapper">
      <h2>Projects</h2>
      <div className="projects-list">
        <div className="project-card" id="project-1">
          <img src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

          <div className="project-text-wrapper">
            <h3>HRS</h3>
            <hr></hr>
            <p className="project-stack">
              <strong>Stack: </strong>
              <em>ReactJS, Vite, Node.JS, Netlify, wavesurfer.js, File API</em>
            </p>
            <span className="project-description">
              Transform the speed and pitch of an uploaded audio file with a
              visual feedback in the form of a radial dial to adjust the speed,
              and a drawn waveform capable of being scrubbed through.
            </span>
            <div className="project-link-wrapper">
              <a>demo</a>
              <a>code</a>
              <a>more info</a>
            </div>
          </div>
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
              consectetur adipisicing elit. Atque sequi cupiditate repellat
              inventore ratione. Sint, aspernatur velit mollitia perspiciatis
            </span>
            <div className="project-link-wrapper">
              <a>demo</a>
              <a>code</a>
              <a>more info</a>
            </div>
          </div>
        </div>
        <div className="project-card" id="project-3">
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              sequi cupiditate repellat inventore ratione. Sint, aspernatur
            </span>
            <div className="project-link-wrapper">
              <a>demo</a>
              <a>code</a>
              <a>more info</a>
            </div>
          </div>
        </div>
      </div>
      <button
        className="view-more-projects-button"
        href="https://github.com/elliottsbuttonruski">
        <p>View all projects</p>
        <GoLinkExternal id="link-to-more-projects-icon" />
      </button>
    </section>
  );
}

export default Projects;
