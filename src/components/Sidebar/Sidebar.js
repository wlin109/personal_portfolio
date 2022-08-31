import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div>
        <nav
          href="#navbar"
          className="js-colorlib-nav-toggle colorlib-nav-toggle"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <i />
        </nav>
        <aside id="colorlib-aside" className="border js-fullheight">
          <div className="text-center">
            <div
              className="author-img"
              style={{ backgroundImage: "url(images/about.jpg)" }}
            />
            <h1 id="colorlib-logo">
              <a href="index.html">William Lin</a>
            </h1>
            <div className="email">
              <i className="icon-mail"></i> lin.william369@gmail.com
            </div>
            <div>
              <i className="icon-phone"></i>(415) 767-9524{" "}
            </div>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li className="active">
                  <a href="#home" data-nav-section="home">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#about" data-nav-section="about">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" data-nav-section="skills">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#timeline" data-nav-section="timeline">
                    Work Experience
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="colorlib-footer">
            <p>
              <small>
                Thanks{" "}
                <a
                  href="https://colorlib.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Colorlib
                </a>{" "}
                for inspiration
              </small>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
