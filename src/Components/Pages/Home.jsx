import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
// import { BsFillCaretDownFill } from "react-icons/bs";

function Home() {
  return (
    <div id="home" className="home-wrapper">
      <h1 className="greeting">Hi there!</h1>
      <h2 className="name">
        I{"'"}m <strong className="elliott">Elliott Saruski,</strong>
      </h2>
      <span className="description">
        a Marketer turned Front End Dev with a specialty in React. In my spare
        time I make{" "}
        <a href="https://soundcloud.com/envimusic">electronic music</a>, I futz
        around with various
        <strong> 3D</strong> / <strong>multimedia softwares</strong>, and I
        enjoy scouring the internet for the latest/greatest web technologies.
        {/* potential to add blog here?? */}
        <div className="cta">
          Check out a few of my<a href="#projects">projects</a>!
        </div>
        <div className="contact-links--wrapper">
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
      </span>
      {/* <a className="scroll-down-button" href="#projects">
        <BsFillCaretDownFill />
      </a> */}
    </div>
  );
}

export default Home;
