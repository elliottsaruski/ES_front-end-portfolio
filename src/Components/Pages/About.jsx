function About() {
  return (
    <section id="about" className="about-wrapper">
      <h2 className="about-title">
        <hr></hr>About
      </h2>
      <span className="about-span">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
        ullam rerum perferendis velit sed eius totam. Reprehenderit tempora
        veniam omnis vel, ullam atque voluptates modi? Adipisci animi asperiores
        fugiat dolore.
      </span>
      <div className="headshot-wrapper">
        <img
          src="/src/assets/es-headshot.jpg"
          alt="elliott headshot"
          className="headshot-img"
        />
      </div>
      <hr id="seperator"></hr>
      <div className="education-wrapper">
        <h3>Education</h3>
        <section className="education-without-title">
          <div className="about-item-wrapper">
            <span>
              <h5>2020</h5>
              <h4>Bachelors Degree</h4>
              <p>Florida State University</p>
              <p>Marketing</p>
            </span>
          </div>
          <div className="about-item-wrapper">
            <span>
              <h5>2021-22</h5>
              <h4>Marketing Director</h4>
              <p>Monarch Claims Consultants</p>
            </span>
          </div>
          <div className="about-item-wrapper">
            <span>
              <h5>2022-24</h5>
              <h4>Front-End Engineering Career Path (Online course)</h4>
              <p>Codecademy.com</p>
            </span>
          </div>
        </section>
      </div>
    </section>
  );
}

export default About;
