function About() {
  return (
    <section id="about" className="about-wrapper">
      <h2>
        <hr></hr>About
      </h2>

      <div className="about-inner-wrapper">
        <div className="about-grid-top">
          <div className="about-grid-left">
            <span className="about-span">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident ullam rerum perferendis velit sed eius totam.
              Reprehenderit tempora veniam omnis vel, ullam atque voluptates
              modi? Adipisci animi asperiores fugiat dolore.
            </span>
            <div className="education-wrapper">
              <h3>Education</h3>
              <div className="education-item">
                <h5>2020</h5>
                <p>B.S. Marketing</p>
                <p>Florida State University</p>
              </div>
              <div className="education-item">
                <h5>2022-24</h5>
                <h4>Front-End Engineering Career Path</h4>
                <p>Codecademy.com (Online course)</p>
              </div>
            </div>
          </div>
          <div className="about-grid-right">
            <img
              src="/src/assets/es-headshot.jpg"
              alt="elliott headshot"
              className="headshot-img"
            />
          </div>
        </div>
        {/* ------------------------------------------------------------------- */}
        <div className="about-grid-bottom">
          <div className="skills-wrapper">
            <div className="languages">
              <h3>Programming Languages</h3>
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className="libraries">
              <h3>Libraries & Frameworks</h3>
              <ul>
                <li>ReactJS</li>
                <li>Vite</li>
                <li>Mocha</li>
                <li>React Router</li>
                <li>Redux + RTK</li>
                <li>Jest</li>
                <li>Framer Motion</li>
                <li>p5.js</li>
                <li>Tone.js</li>
                <li>Web Audio API</li>
              </ul>
            </div>
            <div className="tools">
              <h3>Tools & Platforms</h3>
              <ul>
                <li>Git + Github</li>
                <li>Figma</li>
                <li>Adobe CC</li>
                <li>Netlify</li>
                {/* <li>Firebase / Docker</li> */}
                <li>Webpack</li>
                <li>Lighthouse</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
