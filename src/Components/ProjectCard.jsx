import PropTypes from "prop-types";

function ProjectCard({ projectID, img, title, stack, desc, site, code }) {
  return (
    <div className="project-card" id="project-3" key={projectID}>
      <img className="project-img" src={img} />
      <div className="project-text-wrapper">
        <h3>{title}</h3>
        <hr></hr>
        <p className="project-stack">
          <strong>Stack: </strong>
          <em>{stack}</em>
        </p>
        <span className="project-description">{desc}</span>
        <div className="project-link-wrapper">
          <a href={site} target="_blank">
            live site
          </a>
          <a href={code} target="_blank">
            code
          </a>
          <a>more info</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

ProjectCard.propTypes = {
  projectID: PropTypes.number,
  img: PropTypes.node,
  title: PropTypes.string,
  stack: PropTypes.string,
  desc: PropTypes.string,
  site: PropTypes.string,
  code: PropTypes.string,
};
