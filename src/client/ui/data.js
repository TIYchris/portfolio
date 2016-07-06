import _ from "lodash";
import React from "react";
import store from "store";
import About from "./about";
import Portfolio from "./portfolio";
import Testimonial from "./testimonial";
import Contact from "./contact";

require("assets/styles/data.scss");
require("font-awesome-webpack");

var redrock = require("assets/images/Background.jpg")

export default React.createClass({
    render: function() {
        return (
            <div>
              <div className="dataContainer">
                <img src={ redrock } className="chrisImage" />
                <div className="greeting">
                  <div className="greetingContainer">
                    <div className="dataGreeting">Hello, My name is Chris Bergstrom </div>
                    <div className="dataGreeting">and I am a Junior Developer in Las Vegas, NV</div>
                  </div>
                </div>
                <img src={ redrock } className="chrisImage" style={ { position: "inherit", display: "block", visibility: "hidden" } } />
              </div>
              <About/>
              <Portfolio/>
              <Testimonial/>
              <Contact/>
            </div>
        )
    }
})
