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
                <a className="links" href="#portfolio">Portfolio</a>
                <a className="links" href="#testimonial">Testimonials</a>
                <a className="links" href="#contact">Hire Chris</a>
              </div>
            </div>
          </div>
          { children }
          <div className="footerContainer">
            <div className="socialMedia">
              <a href="https://github.com/TIYchris"><i className="fa fa fa-github fa-2x"></i></a>
              <a href=""><i className="fa fa-linkedin fa-2x"></i></a>
              <a href="https://twitter.com/chrislbergstrom"><i className="fa fa-twitter fa-2x"></i></a>
            </div>
            <a className="myEmail" href="mailto:chrisbergstromis@gmail.com" target="_top">chrisbergstromis@gmail.com</a>
            <div className="copy">© 2016 Chris Bergstrom. All rights reserved.</div>
          </div>
        </div>
    )
}