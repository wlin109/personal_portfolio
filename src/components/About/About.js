import React from "react";

const About = () => {
  return (
    <div>
      <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div
                className="row row-bottom-padded-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>
                      I am a front-end developer with 5 years of work experience
                      using HTML5, JavaScript, Bootstrap, Redux, and JQuery. I
                      have done various single page applications using the React
                      framework. I have experience designing RESTful API using
                      Express and NodeJS. I use CSS and SCSS for styling. To
                      develop responsive web for different user devices, I use
                      Bootstrap, CSS3 media query, and flex box. For unit
                      testing and integration testing, I used Jest and Enzyme.
                    </p>
                    <p>
                      I've worked with Cypersecurity company such as Palo Alto
                      Networks, Education company such as Magoosh, and Business
                      Inteligence (BI) companies like Sisense and Vinformax.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="colorlib-about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">What I do?</span>
              <h2 className="colorlib-heading">
                Here are some of my expertise
              </h2>
            </div>
          </div>
          <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
              <div className="services color-1">
                <span className="icon">
                  <i className="icon-bulb" />
                </span>
                <div className="desc">
                  <h3>React Framework</h3>
                  <p>
                    I'm expereinced in using the React JS framework to develop
                    single page application (SPA)
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-3">
                <span className="icon">
                  <i className="icon-phone3" />
                </span>
                <div className="desc">
                  <h3>Respsonsiveness</h3>
                  <p>
                    I have expertise in developing repsonsive web for different
                    user devices with Bootstrap, CSS3 media query, and flexbox.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-5">
                <span className="icon">
                  <i className="icon-data" />
                </span>
                <div className="desc">
                  <h3>Tech Stacks</h3>
                  <p>
                    I have in-depth knowledge of a mix of front and back-end
                    development such as MERN and other tech stacks and
                    frameworks
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-4">
                <span className="icon">
                  <i className="icon-layers2" />
                </span>
                <div className="desc">
                  <h3>Software Development Methodologies</h3>
                  <p>
                    I have a good understanding of Agile and Scrum with
                    experience cooperating and following standards and
                    requirements
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-2">
                <span className="icon">
                  <i className="icon-data" />
                </span>
                <div className="desc">
                  <h3>Database</h3>
                  <p>
                    I'm familiar with working on NoSQL databases such as MongoDB
                    with Mongoose
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-6">
                <span className="icon">
                  <i className="icon-phone3" />
                </span>
                <div className="desc">
                  <h3>Communication</h3>
                  <p>
                    I have the ability to understand both technical and
                    non-technical concepts and requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
