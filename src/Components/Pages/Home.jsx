import Links from "../Links";
// import ORB from "../ORB_r3f";

function Home() {
  return (
    <section id="home" className="home-wrapper">
      <div className="home-centered-content">
        <h1 className="name">ELLIOTT SARUSKI</h1>
        <h4 className="name-titles">Front-End Engineer. Marketer. Creator.</h4>
        <hr id="seperator"></hr>
        <a className="cta" href="#projects">
          View my work
        </a>
      </div>
      <Links />
      {/* <div className="BG">
        <ORB id="canvas" />
      </div> */}
    </section>
  );
}

export default Home;
