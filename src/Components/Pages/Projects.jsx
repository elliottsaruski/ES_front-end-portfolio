function Projects() {
  return (
    <section id="projects" className="projects-wrapper">
      <h2 className="projects-title">
        <hr></hr>Projects
      </h2>
      <div className="projects-list">
        <div className="project-card" id="project-1">
          <canvas className="project-img"></canvas>
          <div className="project-text-wrapper">
            <h3 className="project-title">Project 1</h3>
            <p className="project-stack">
              <strong>Stack: </strong>
              <em>ReactJS, Node.JS...</em>
            </p>
            <br></br>
            <span className="project-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              sequi cupiditate repellat inventore ratione. Sint, aspernatur
            </span>
            <div className="project-link-wrapper">
              <a>demo</a>
              <a>code</a>
              <a>more</a>
            </div>
          </div>
        </div>
        <div className="project-card" id="project-2">
          <canvas className="project-img"></canvas>
          <div className="project-text-wrapper">
            <h3 className="project-title">Project 2</h3>
            <p className="project-stack">
              <strong>Stack: </strong>
              <em>ReactJS, Node.JS...</em>
            </p>
            <br></br>
            <span className="project-description">
              consectetur adipisicing elit. Atque sequi cupiditate repellat
              inventore ratione. Sint, aspernatur velit mollitia perspiciatis
            </span>
            <div className="project-link-wrapper">
              <a>demo</a>
              <a>code</a>
              <a>more</a>
            </div>
          </div>
        </div>
        <div className="project-card" id="project-3">
          <canvas className="project-img"></canvas>
          <div className="project-text-wrapper">
            <h3 className="project-title">Project 3</h3>
            <p className="project-stack">
              <strong>Stack: </strong>
              <em>ReactJS, Node.JS...</em>
            </p>
            <br></br>
            <span className="project-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              sequi cupiditate repellat inventore ratione. Sint, aspernatur
            </span>
            <div className="project-link-wrapper">
              <a>demo</a>
              <a>code</a>
              <a>more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
