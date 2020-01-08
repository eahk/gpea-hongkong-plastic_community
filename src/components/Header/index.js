import React from "react";
import "./index.scss";
//
import gplogogreen from "../../assets/images/gp-logo-green@2x.png";

export default props => {
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <div className="header__wrapper navbar-brand">
            <div className="navbar-item navbar__logo">
              <img src={gplogogreen} alt="logo" />
            </div>
            <div className="navbar-item navbar__button">
              <div className="button" href="Support us">
                <strong>Support us</strong>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
