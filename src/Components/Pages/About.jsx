function About() {
  return (
    <section id="about" className="about-wrapper">
      <h2>
        <hr></hr>About
      </h2>

      <div className="about-inner-wrapper">
        <div className="about-left-inner">
          <img
            src="/src/assets/es-headshot.jpg"
            alt="elliott headshot"
            className="headshot-img"
          />
          <span className="about-span">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            ullam rerum perferendis velit sed eius totam. Reprehenderit tempora
            veniam omnis vel, ullam atque voluptates modi? Adipisci animi veniam
            omnis vel, ullam atque voluptates modi? Adipisci animi asperiores
            fugiat dolore.
          </span>
          <div className="education-wrapper">
            <h3>Education</h3>
            <hr></hr>
            <div className="education">
              <div className="education-item" id="coding">
                <h5 className="education-time-frame">2022-24</h5>
                <p className="blue-text">Front-End Engineering Career Path</p>
                <p>Codecademy.com</p>
              </div>
              <div className="education-item" id="marketing">
                <h5 className="education-time-frame">2020</h5>
                <p className="blue-text">B.S. Marketing</p>
                <p>Florida State University</p>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------- */}
        <div className="skills-wrapper">
          <div className="skills-card" id="languages">
            <h3>Programming Languages</h3>
            <hr></hr>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="skills-card" id="libraries">
            <h3>Libraries & Frameworks</h3>
            <hr></hr>
            <ul>
              <li>ReactJS</li>
              <li>Vite</li>
              <li>Redux</li>
              <li>Framer Motion</li>
              <li>p5.js</li>
              <li>Tone.js</li>
              <li>Web Audio API</li>
            </ul>
          </div>
          <div className="skills-card" id="tools">
            <h3>Tools & Platforms</h3>
            <hr></hr>
            <ul>
              <li>Git + Github</li>
              <li>Netlify</li>
              <li>Webpack</li>
              <li>Lighthouse</li>
              <li>Figma</li>
              <li>Adobe CC</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
