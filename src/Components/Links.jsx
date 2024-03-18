import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Links() {
  return (
    <div className="contact-links-wrapper">
      <a href="https://www.linkedin.com/in/elliottsaruski/">
        <FaLinkedin />
      </a>
      <a href="https://github.com/elliottsaruski">
        <FaGithub />
      </a>
      <a href="https://twitter.com/_envimusic">
        <FaSquareXTwitter />
      </a>
    </div>
  );
}

export default Links;
