import React from "react";

require("normalize.scss/normalize.scss");
require("assets/styles/app.scss");

var image = require("assets/images/logo.png")

export default ({
        children
    }) => {
    return (
        <div>
          <div className="mainHeader">
            <div className="navContainer">
              <a href="#" className="logoNav">
                <img src={ image } className="logoImage" />
                <div className="nameTitle">
                  <div className="name">Chris Bergstrom</div>
                  <div className="title">Junior Front-end Developer</div>
                </div>
              </a>
              <div>
                <a className="links" href="#about">About</a>
                <a className="links" href="#">Portfolio</a>
                <a className="links" href="#">Testimonals</a>
                <a className="links" href="#">Contact</a>
              </div>
            </div>
          </div>
          { children }
          <div className="footerContainer">
            <div>
              <i className="fa fa-facebook fa-2x"></i>
              <i className="fa fa-instagram fa-2x"></i>
              <i className="fa fa-linkedin fa-2x"></i>
              <i className="fa fa-twitter fa-2x"></i>
            </div>
            <div className="copy">© 2016 Chris Bergstrom. All rights reserved.</div>
          </div>
        </div>
    )
}
