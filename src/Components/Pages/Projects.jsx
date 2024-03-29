function Projects() {
  return (
    <section id="projects" className="projects-wrapper">
      <h2>
        <hr></hr>Projects
      </h2>
      <div className="projects-list">
        <div className="project-card" id="project-1">
          <img
            src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="project-img"></img>
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
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="project-img"></img>
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
          <img
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="project-img"></img>
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
