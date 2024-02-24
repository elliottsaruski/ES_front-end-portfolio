import { BsFillCaretDownFill } from "react-icons/bs";
import Links from "../Links";

function Home() {
  return (
    <div id="home" className="home-wrapper">
      <div className="home-flex-1">
        <h1 className="greeting">Hi there!</h1>
        <h2 className="name">
          I{"'"}m <strong className="elliott">Elliott Saruski,</strong>
        </h2>
        <span className="description">
          a Marketer turned Front End Dev with a specialty in React. In my spare
          time I make
          <a href="https://soundcloud.com/envimusic"> electronic music</a>,
          <a> 3D graphics / other multimedia</a>, & I love to scour the internet
          for the latest & greatest in web tech.
          {/* potential to add blog here?? */}
          <hr></hr>
          <div className="cta">
            <a className="scroll-down-button" href="#projects">
              <BsFillCaretDownFill />
            </a>
            <span>
              {" "}
              Check out a few of my <a href="#projects">projects</a>!
            </span>
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
