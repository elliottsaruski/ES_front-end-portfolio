import { BsFillCaretDownFill } from "react-icons/bs";
import Links from "../Links";

function Home() {
  return (
    <div id="home" className="home-wrapper">
      <div className="home-flex-1">
        <span className="greeting">Hi there!</span>

        <div className="greeting-wrapper">
          {" "}
          <span className="IM">I{"'"}m</span>
          <h2 className="name">
            <strong className="elliott">Elliott Saruski</strong>,
          </h2>
        </div>

        <span className="description">
          a Marketer turned Front End Dev with a specialty in React. In my spare
          time I make
          <a href="https://soundcloud.com/envimusic"> electronic music</a>, 3D
          graphics / other multimedia, & I love scouring the internet for the
          latest & greatest in web tech.
          {/* potential to add blog here?? */}
          <hr></hr>
          <div className="cta">
            <span>
              {" "}
              Check out my <a href="#projects">projects</a>!
            </span>
            <a className="scroll-down-button" href="#projects">
              <BsFillCaretDownFill />
            </a>
          </div>
          <Links />
        </span>
      </div>
      {/* <div className="headshot-wrapper">
        <img
          src="/src/assets/es-headshot.jpg"
          alt="elliott headshot"
          className="headshot-img"
        />
      </div> */}
    </div>
  );
}

export default Home;
