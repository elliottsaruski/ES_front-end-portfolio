import { TbArrowRightBar, TbArrowLeftBar } from "react-icons/tb";

function Projects() {
  return (
    <section id="projects" className="projects-wrapper">
      <h2 className="projects-title">
        <hr></hr>Projects
      </h2>
      <TbArrowLeftBar className="arrow" />
      <div className="projects-list">
        <div className="project-card">
          <canvas className="project-img"></canvas>
          <h3 className="project-title">Project 1</h3>
          <p className="project-stack">
            <strong>Stack: </strong>
            <em>ReactJS, Node.JS...</em>
          </p>
          <br></br>
          <span className="project-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            sequi cupiditate repellat inventore ratione. Sint, aspernatur velit
            mollitia perspiciatis dolore odit modi nihil ratione omnis voluptas
            tempore, quam culpa! Eligendi.
          </span>
          <div className="project-link-wrapper">
            <a>demo</a>
            <a>code</a>
          </div>
        </div>
        {/* <div className="project-card">
          <canvas className="project-img"></canvas>
          <h3>Project 2</h3>
          <p>
            Stack: <em>ReactJS, Node.JS... v</em>
          </p>
          <br></br>
          <span className="project-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            sequi cupiditate repellat inventore ratione. Sint, aspernatur velit
            mollitia perspiciatis dolore odit modi nihil ratione omnis voluptas
            tempore, quam culpa! Eligendi.
          </span>
          <div className="project-link-wrapper">
            <a>demo</a>
            <a>code</a>
          </div>
        </div>
        <div className="project-card">
          <canvas className="project-img"></canvas>
          <h3>Project 3</h3>
          <p>
            Stack: <em>ReactJS, Node.JS... v</em>
          </p>
          <br></br>
          <span className="project-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
            sequi cupiditate repellat inventore ratione. Sint, aspernatur velit
            mollitia perspiciatis dolore odit modi nihil ratione omnis voluptas
            tempore, quam culpa! Eligendi.
          </span>
          <div className="project-link-wrapper">
            <a>demo</a>
            <a>code</a>
          </div>
        </div> */}
      </div>
      <TbArrowRightBar className="arrow" />
    </section>
  );
}

export default Projects;
