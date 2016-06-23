import _ from "lodash";
import React from "react";
import { data } from "api/data";
import store from "store";
import About from "./about";
import Porfolio from "./portfolio";

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
            </div>
        )
    }
})
