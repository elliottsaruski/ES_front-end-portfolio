import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Links() {
  return (
    <section className="contact-links-wrapper">
      <a href="https://www.linkedin.com/in/elliottsaruski/" target="_blank">
        <FaLinkedin />
        <p>LinkedIn</p>
      </a>
      <a href="https://github.com/elliottsaruski" target="_blank">
        <FaGithub />
        <p>Github</p>
      </a>
      <a href="https://twitter.com/_envimusic" target="_blank">
        <FaSquareXTwitter />
        <p>Twitter</p>
      </a>
    </section>
  );
}

export default Links;
