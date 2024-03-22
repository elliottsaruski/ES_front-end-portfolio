function About() {
  return (
    <section id="about" className="about-wrapper">
      <h2>
        <hr></hr>About
      </h2>

      <div className="about-inner-wrapper">
        <div className="about-span-wrapper">
          <div className="skills-wrapper">
            <div className="skills">
              <h3>My Specialties</h3>
              <ul>
                <li>React</li>
                <li>Javascript</li>
                <li>UI/UX</li>
                <li>Testing Suites (jest, redux)</li>
              </ul>
            </div>
            <div className="favorite-libraries">
              <h3>Tech I Love</h3>
              <ul>
                <li>p5.js</li>
                <li>framer motion</li>
                <li>Tone.js</li>
                <li>Web Audio API</li>
              </ul>
            </div>
          </div>

          <span className="about-span">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            ullam rerum perferendis velit sed eius totam. Reprehenderit tempora
            veniam omnis vel, ullam atque voluptates modi? Adipisci animi
            asperiores fugiat dolore.
          </span>

          <div className="education-wrapper">
            <h3>Education</h3>
            <div className="about-item-wrapper">
              <h5>2020</h5>
              <h4>Bachelors Degree</h4>
              <p>Marketing</p>
              <p>Florida State University</p>
            </div>

            <div className="about-item-wrapper">
              <h5>2022-24</h5>
              <h4>Front-End Engineering Career Path</h4>
              <p>Codecademy.com (Online course)</p>
            </div>
          </div>

          <div className="experience-wrapper">
            <h3>Experience</h3>
            <div className="about-item-wrapper">
              <h5>2019</h5>
              <h4>Account Coordinator Intern</h4>
              <p>Jet Fuel Studio</p>
              <p>Brooklyn, New York</p>
            </div>

            <div className="about-item-wrapper">
              <h5>2022-24</h5>
              <h4>Director of Marketing & Content Creation</h4>
              <p>Monarch Claims Consultants</p>
              <p>Miami, Florida</p>
            </div>
          </div>

          <img
            src="/src/assets/es-headshot.jpg"
            alt="elliott headshot"
            className="headshot-img"
          />
        </div>
      </div>
      {/* <hr id="seperator"></hr> */}
    </section>
  );
}

export default About;
