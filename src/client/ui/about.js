import React from "react";
import { data } from "api/data";
import store from "store";

require("assets/styles/about.scss");
var headshot = require("assets/images/headshot.png")
var html = require("assets/images/HTML5.png")
var css3 = require("assets/images/css3.png")
var JavaScript = require("assets/images/javascript.png")
var react = require("assets/images/react.png")
var angular = require("assets/images/angular.png")
var jquery = require("assets/images/jquery.png")
var lodash = require("assets/images/lodash.png")
var bootstrap = require("assets/images/bootstrap.png")
var markdown = require("assets/images/markdown.png")
var google = require("assets/images/google_maps.png")
var animation = require("assets/images/animation2.gif")
var backbone = require("assets/images/backbone.png")


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
                  <div>Some of my skills are:</div>
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
                      <img src={ google } className="logos" />
                      <div className="logoDescription">Google maps api</div>
                    </div>
                    <div>
                      <img src={ animation } className="logos" />
                      <div className="logoDescription">Animation</div>
                    </div>
                  </div>
                  <p className="aboutMe"><span className="firstLetter">M</span>y Goals as a developer are to take my skills too learn and grow form other Senior devolpers so we can build high quality
                    and fully resposive applications. Prior to this carreer I spent many years in sales as well as management in retail and fastfood.</p>
                  <p><span className="firstLetter">W</span>hen I am not banging away at my keyboard. I enjoy to spending time with the family, watching my kids sporting events,
                    watching live music and being the head chef in my kitchen. I am a big fan of MMA and the NFL mainly the Minnesota Vikings. Other family activities I enjoy
                    include Bowling, Swimming, Hiking, Camping, Movies, Card and board games.</p>
                </div>
              </div>
            </div>
        )
    }
})
