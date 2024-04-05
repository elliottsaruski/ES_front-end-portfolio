import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Links() {
  return (
    <section className="contact-links-wrapper">
      <button href="https://www.linkedin.com/in/elliottsaruski/">
        <FaLinkedin />
        <p>LinkedIn</p>
      </button>
      <button href="https://github.com/elliottsaruski">
        <FaGithub />
        <p>Github</p>
      </button>
      <button href="https://twitter.com/_envimusic">
        <FaSquareXTwitter />
        <p>Twitter</p>
      </button>
    </section>
  );
}

export default Links;
