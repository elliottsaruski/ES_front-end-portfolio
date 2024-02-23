import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function NavBar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <section className="navbar--wrapper">
      <nav className="navbar">
        <div className="nav-logo-left">
          <a href="#home" className="logo">
            ES
          </a>
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
        </div>
        <RxHamburgerMenu
          id="hamburger-icon"
          className="nav-mobile-button"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        />
      </nav>
      {/* ------------------------------------NAV MOBILE------------------------ */}
      <div className="nav-mobile-wrapper">
        <div
          className={mobileNavOpen ? "nav-mobile-open" : "nav-mobile-closed"}>
          <a href="#projects" className="projects">
            Projects
          </a>
          <a href="#about" className="about">
            About Me
          </a>
          <a href="#contact" className="contact">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

export default NavBar;

// make nav disappear when scrolling down
//bring nav back in when scrolling up further than x-amount
