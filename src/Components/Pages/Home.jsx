import Links from "../Links";
import ORB from "../ORB_r3f";

function Home() {
  return (
    <section id="home" className="home-wrapper">
      <div className="home-flex-1">
        <span className="greeting">Hi! I{"'"}m</span>
        <div className="name-wrapper">
          <h1 className="name">ELLIOTT SARUSKI,</h1>
          <div className="name-titles">
            <h2>Front-End Dev</h2>-<h2>Marketer</h2>-<h2>Creative</h2>
          </div>
        </div>
        <span className="description">
          Looking to join a team of developers creating... Lorem ipsum dolor sit
          amet consectetur adipisicing elit.
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
      <div className="home-flex-2">
        <ORB id="canvas" />
      </div>
    </section>
  );
}

export default Home;
