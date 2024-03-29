import Links from "../Links";

function Home() {
  return (
    <section id="home" className="home-wrapper">
      <div className="home-flex-1">
        <span className="greeting">Hi! I{"'"}m</span>
        <div className="name-wrapper">
          <h1 className="name">ELLIOTT SARUSKI</h1>,
        </div>
        <div className="name-titles">
          <h2>Front-End Engineer</h2>
          <h2>Marketer</h2>
          <h2>Creative</h2>
        </div>
        <span className="description">
          Looking to join a team of developers...
        </span>
        <hr></hr>
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
