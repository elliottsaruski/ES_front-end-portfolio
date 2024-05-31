function Home() {
  return (
    <section id="home" className="home-wrapper">
      <div className="home-centered-content">
        <h1 className="name">ELLIOTT SARUSKI</h1>
        <div className="titles-wrapper">
          <p className="name-titles">Front-End Engineer</p>
          <p className="name-titles">Creative Developer </p>
          <p className="name-titles">Digital Marketer </p>
        </div>

        <hr id="seperator"></hr>
        <a className="cta" href="#projects">
          View my work
        </a>
      </div>
      {/* <Links /> */}
      {/* <div className="BG">
        <ORB id="canvas" />
      </div> */}
    </section>
  );
}

export default Home;
