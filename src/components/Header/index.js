import React from "react";
import gplogogreen from "../../assets/images/gp-logo-green@2x.png";

export default props => {
  return (
    <div>
      <section className="hero is-light is-medium">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="/#">
                  <img src={gplogogreen} alt="Logo" />
                </a>
                x
                <span
                  className="navbar-burger burger"
                  data-target="navbarMenuHeroA"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active" href="/#">
                    Home
                  </a>
                  <a className="navbar-item" href="/#">
                    Examples
                  </a>
                  <a className="navbar-item" href="/#">
                    Documentation
                  </a>
                  <span className="navbar-item">
                    <a className="button is-primary is-inverted" href="/#">
                      <span className="icon">
                        <i className="fab fa-github"></i>
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Title</h1>
            <h2 className="subtitle">Subtitle</h2>
          </div>
        </div>

        <div className="hero-foot">
          <nav className="tabs">
            <div className="container">
              <ul>
                <li className="is-active">
                  <a href="/#">Overview</a>
                </li>
                <li>
                  <a href="/#">Modifiers</a>
                </li>
                <li>
                  <a href="/#">Grid</a>
                </li>
                <li>
                  <a href="/#">Elements</a>
                </li>
                <li>
                  <a href="/#">Components</a>
                </li>
                <li>
                  <a href="/#">Layout</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};
