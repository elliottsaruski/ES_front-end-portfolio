import Links from "../Links";

function Home() {
  return (
    <section id="home" className="home-wrapper">
      <div className="home-flex-1">
        <span className="greeting">Hi there! I{"'"}m</span>
        <div className="name-wrapper">
          <h1 className="name">ELLIOTT SARUSKI</h1>
          <p>,</p>
        </div>
        <span className="description">
          a Marketer turned Front-End Engineer with a specialty in{" "}
          <strong>ReactJS</strong> and an interest in creative coding. In my
          spare time I make{" "}
          <a href="https://soundcloud.com/envimusic">electronic music</a>,{" "}
          <strong>3D graphics</strong>, & other <strong>multimedia</strong>.
          <br></br>
          <br></br>I{"'"}m currently looking to join a team of
          developers...(finish this)
          {/* potential to add blog here?? */}
          <hr></hr>
        </span>
        <div className="ctas-wrapper">
          <a className="cta" href="#projects">
            My <strong>projects</strong>!
          </a>
          <a className="cta CV" href="">
            CV
          </a>
        </div>
      </div>
      <Links />
    </section>
  );
}

export default Home;
