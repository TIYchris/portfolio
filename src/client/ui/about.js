import React from "react";
import { data } from "api/data";
import store from "store";

require("assets/styles/about.scss");

var headshot = require("assets/images/headshot.png")
var html = require("assets/images/logos/HTML5.png")
var css3 = require("assets/images/logos/css3.png")
var JavaScript = require("assets/images/logos/javascript.png")
var react = require("assets/images/logos/react.png")
var angular = require("assets/images/logos/angular.png")
var jquery = require("assets/images/logos/jquery.png")
var lodash = require("assets/images/logos/lodash.png")
var bootstrap = require("assets/images/logos/bootstrap.png")
var markdown = require("assets/images/logos/markdown.png")
var google = require("assets/images/logos/google_maps.png")
var animation = require("assets/images/logos/animation2.gif")
var backbone = require("assets/images/logos/backbone.png")
var socketio = require("assets/images/logos/socketio.gif")

var tiy = require("assets/images/tiy.png")


export default React.createClass({
    render: function() {
        return (
            <div>
              <a className="aboutStop" name="about"></a>
              <div className="dataPage">
                <div className="dataTitleContainer">
                  <div className="dataTitle">Front-end Developer</div>
                  <div className="skills">
                    <span>HTML</span>
                    <span className="bull">•</span>
                    <span>CSS</span>
                    <span className="bull">•</span>
                    <span>JavaScript</span>
                  </div>
                  <a href="#" className="resumeContainer">
                    <div className="resume">Download my resume</div>
                  </a>
                </div>
              </div>
              <div className="aboutContainer">
                <div className="about">
                  <div className="aboutDescription">
                    <div>
                      <img src={ headshot } className="headshot" />
                    </div>
                    <div className="description">Junior front-end developer, graduate of The Iron Yard.  Skills I aquired there were invaulable, the class was focused in React.  As for my experience, I
                      was givin an oppertunity to be able to launch my career in the tech industry in a start up.  In my time there I worked with Angular as well as mobile development.</div>
                  </div>
                  <h3 className="mySkills">Some of my skills are:</h3>
                  <div className="logoList">
                    <div>
                      <img src={ html } className="logos" />
                      <div className="logoDescription">HTML5</div>
                    </div>
                    <div>
                      <img src={ css3 } className="logos" />
                      <div className="logoDescription">CSS3</div>
                    </div>
                    <div>
                      <img src={ JavaScript } className="logos" />
                      <div className="logoDescription">JavaScript</div>
                    </div>
                    <div>
                      <img src={ react } className="logos" />
                      <div className="logoDescription">React</div>
                    </div>
                    <div>
                      <img src={ angular } className="logos" />
                      <div className="logoDescription">Angular</div>
                    </div>
                    <div>
                      <img src={ backbone } className="logos" />
                      <div className="logoDescription">Backbone</div>
                    </div>
                    <div>
                      <img src={ jquery } className="logos" />
                      <div className="logoDescription">jQuery</div>
                    </div>
                    <div>
                      <img src={ lodash } className="logos" />
                      <div className="logoDescription">Lodash</div>
                    </div>
                    <div>
                      <img src={ bootstrap } className="logos" />
                      <div className="logoDescription">Bootstrap</div>
                    </div>
                    <div>
                      <img src={ markdown } className="logos" />
                      <div className="logoDescription">Markdown</div>
                    </div>
                    <div>
                      <img src={ socketio } className="logos" />
                      <div className="logoDescription">Socket.io</div>
                    </div>
                    <div>
                      <img src={ google } className="logos" />
                      <div className="logoDescription">Google maps api</div>
                    </div>
                    <div>
                      <img src={ animation } className="logos" />
                      <div className="logoDescription">Animation</div>
                    </div>
                  </div>
                  <h3 className="goals">Goals</h3>
                  <p className="aboutMe">My goals as a developer are to take my skills too learn and grow form other Senior devolpers so we can build high quality and fully resposive applications.
                    Prior to this carreer I spent many years in sales as well as management in retail and fastfood.</p>
                  <div className="tiyTitle">
                    <h3 className="tiyName">The Iron Yard</h3>
                    <a target="blank" href="https://www.theironyard.com/"><img src={ tiy } className="tinyTiyLogo" /></a>
                  </div>
                  <p className="education">
                    The Iron Yard is a code school that I attended in the Febuary of 2016. This was a grueling 12 week program, Heavily focuses in React, that takes students from little
                    or no code experience and gets them up to speed. I ended up coding around 70 hours a week to keep up during this 12 week program. Most of my portfolio does
                    consit of some of the projects I completed when was a student of The Iron Yard.
                  </p>
                  <h3>Personal</h3>
                  <p>When I am not banging away at my keyboard. I enjoy to spending time with the family, watching my kids sporting events, watching live music and being the head
                    chef in my kitchen. I am a big fan of MMA and the NFL mainly the Minnesota Vikings. Other family activities I enjoy include Bowling, Swimming, Hiking, Camping,
                    Movies, Card and board games.</p>
                </div>
              </div>
            </div>
        )
    }
})
