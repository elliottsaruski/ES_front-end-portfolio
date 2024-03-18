import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Links from "../Links";

function Contact() {
  return (
    <section id="contact" className="contact-full-wrapper">
      <h2 className="contact-title">
        <hr></hr>Contact
      </h2>
      {/* <Links /> */}
      {/* <div className="contact-links">
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
      </div> */}
    </section>
  );
}

export default Contact;
