function NavBar() {
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
      </nav>
    </section>
  );
}

export default NavBar;

// make nav disappear when scrolling down
//bring nav back in when scrolling up further than x-amount
