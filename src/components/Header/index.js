import React from "react";
import "./index.scss";
//
// import gpLogo from "../../assets/images/GP-logo-2019-TC-white-[web]-01.png";
import gpLogo from "../../assets/images/GP-logo-2019-TC-green-[web]-01.png";

export default props => {
  return (
    <header className="header">
      <div className="header__wrapper navbar-brand">
        <div className="navbar-item navbar__logo">
          <img src={gpLogo} alt="greenpeace logo" />
        </div>
        {/*
        <div className="navbar-item navbar__button">
          <div className="button is-rounded" href="支持我們">
            <span>支持我們</span>
          </div>
        </div>
        */}
      </div>
    </header>
  );
};
