import Links from "../Links";

function Home() {
  return (
    <section id="home" className="home-wrapper">
      <div className="home-flex-1">
        <span className="greeting">Hi there! I{"'"}m</span>
        <div className="greeting-wrapper">
          <h1 className="name">ELLIOTT SARUSKI</h1>
          <p>,</p>
        </div>

        <span className="description">
          a Marketer turned Front End Dev with a specialty in{" "}
          <strong>ReactJS</strong>. In my spare time I make{" "}
          <a href="https://soundcloud.com/envimusic">electronic music</a>,{" "}
          <strong>3D graphics + multimedia</strong>. <br></br><br></br>I{"'"}m currently looking
          to join a team of developers...(finish this)
          {/* potential to add blog here?? */}
        </span>
        <hr></hr>
        <a className="cta" href="#projects">
          Check out some of my <strong>projects</strong>!
        </a>
      </div>
      <Links />

      {/* <div className="headshot-wrapper">
        <img
          src="/src/assets/es-headshot.jpg"
          alt="elliott headshot"
          className="headshot-img"
        />
      </div> */}
    </section>
  );
}

export default Home;
