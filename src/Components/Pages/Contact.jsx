import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <div id="contact" className="contact-full-wrapper">
      <h1 className="contact-title">Contact</h1>
      <div className="contact-links">
        <a
          className="social-link"
          href="https://www.linkedin.com/in/elliottsaruski/">
          <FaLinkedin />
          <hr className="social-link-hr"></hr>
          LinkedIn
        </a>
        <a className="social-link" href="https://github.com/elliottsaruski">
          <FaGithub />
          <hr className="social-link-hr"></hr>
          Github
        </a>
        <a className="social-link" href="https://twitter.com/_envimusic">
          <FaSquareXTwitter />
          <hr className="social-link-hr"></hr>Twitter
        </a>
      </div>
    </div>
  );
}

export default Contact;
