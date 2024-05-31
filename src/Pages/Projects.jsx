import { GoLinkExternal } from "react-icons/go";
import { ProjectsData } from "../data/ProjectsData";
import ProjectCard from "../Components/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="projects-wrapper">
      <h2>Selected Work</h2>

      <div className="projects-list">
        {ProjectsData.map((project) => (
          <ProjectCard
            key={project.id}
            projectID={project.id}
            img={project.img}
            title={project.title}
            stack={project.stack}
            desc={project.desc}
            site={project.site}
            code={project.code}
          />
        ))}
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
