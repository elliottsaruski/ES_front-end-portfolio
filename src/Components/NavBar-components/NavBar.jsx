import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoLinkExternal } from "react-icons/go";

import resume_pdf from "../assets/ES_RESUME_FED-WEB.pdf";

function NavBar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  {
    if (mobileNavOpen === true) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "initial";
    }
  }

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="nav-logo-left">
          <h1>
            <a
              className="logo"
              href="#home"
              onClick={() => {
                setMobileNavOpen(false);
              }}>
              ES
            </a>
          </h1>
        </div>
        <div className="nav-items-right">
          <a href="#projects" className="projects">
            Projects
          </a>
          <a href="#about" className="about">
            About Me
          </a>
          <a href="#contact" className="contact">
            Contact
          </a>
          <a
            className="view-more-projects-button RESUME"
            href={resume_pdf}
            target="_blank">
            <p>Resume</p>
            <GoLinkExternal id="link-to-more-projects-icon" />
          </a>
        </div>
        <div className="hamburger-wrapper">
          <RxHamburgerMenu
            id="hamburger-icon"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          />
        </div>
        {/* ------------------------------------NAV MOBILE------------------------ */}
      </nav>

      <div
        className={
          mobileNavOpen
            ? "nav-mobile-wrapper-open"
            : "nav-mobile-wrapper-closed"
        }>
        <nav>
          <a
            onClick={() => {
              setMobileNavOpen(false);
            }}
            href="#projects">
            Projects
          </a>
          <hr></hr>

          <a
            onClick={() => {
              setMobileNavOpen(false);
            }}
            href="#about">
            About Me
          </a>
          <hr></hr>

          <a
            onClick={() => {
              setMobileNavOpen(false);
            }}
            href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
