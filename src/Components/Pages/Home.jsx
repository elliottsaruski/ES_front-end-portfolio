import Links from "../Links";
import ORB from "../ORB_r3f";
import { IoDownload } from "react-icons/io5";

function Home() {
  return (
    <section id="home" className="home-wrapper">
      <div className="home-flex-1">
        <div className="home-centered-content">
          <span className="greeting">Hi! I{"'"}m</span>
          <div className="name-wrapper">
            <h1 className="name">ELLIOTT SARUSKI,</h1>
            <div className="name-titles">
              <h4>Front-End Engineer. Marketer. Creator.</h4>
            </div>
          </div>
          <hr id="seperator"></hr>
          <div className="ctas-wrapper">
            <a className="cta" href="#projects">
              View my work
            </a>
            <a className="cta-CV">
              CV
              <IoDownload id="download-icon" />
            </a>
          </div>
        </div>
      </div>
      <Links />
      <div className="BG">
        <ORB id="canvas" />
      </div>
    </section>
  );
}

export default Home;
