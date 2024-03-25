import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

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
    <section className="navbar-wrapper">
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
      </div>
    </section>
  );
}

export default NavBar;

// make nav disappear when scrolling down
//bring nav back in when scrolling up further than x-amount
