import Links from "../Components/Contact-components/Links";

function Home() {
  return (
    <section id="home" className="home-wrapper">
      <div className="home-centered-content">
        <h1 className="name">ELLIOTT SARUSKI</h1>
        <p className="name-titles">
          <em>Front-End Engineer </em> & <em>Creative Dev</em> with a specialty
          in <strong>React JS</strong>
        </p>
        <Links />

        <a className="cta" href="#projects">
          View my work
        </a>
      </div>
      {/* <div className="BG">
        <ORB id="canvas" />
      </div> */}
    </section>
  );
}

export default Home;
