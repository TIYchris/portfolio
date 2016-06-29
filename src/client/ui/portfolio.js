import React from "react";
import { data } from "api/data";
import store from "store";


require("assets/styles/portfolio.scss");

var nwc = require("assets/images/apps/NWC.jpg")
var todo = require("assets/images/apps/todo.png")
var chatApp = require("assets/images/apps/chatApp.png")
var foodtruck = require("assets/images/apps/foodtruck.png")
var restaurant = require("assets/images/apps/restaurant.png")
var war = require("assets/images/apps/war.png")
var sk8ter = require("assets/images/apps/sk8ter.png")
var poker = require("assets/images/apps/poker.png")

var tiy = require("assets/images/tiy.png")



export default React.createClass({
    render: function() {
        return (
            <div className="portfolioContainer">
              <a className="portfolioStop" name="portfolio"></a>
              <div className="portfolioSection">
                <div className="portfolioTitle">Portfolio</div>
                <div className="cardsContainer">
                  <div className="card">
                    <img src={ nwc } className="cardImage" />
                    <a target="_blank" href="http://www.nextwaveconnect.com/" className="overlay">
                      <div className="cardText">As paid intern I paired with senior devoplers to work on a social media application. Some of the tasks I completed were a text editor and I was a member
                        of a three person team that built the ionic mobile app to compliment the web app. Tools used Angular, JQuery, Lodash, Markdown HTML and CSS</div>
                    </a>
                  </div>
                  <div className="card">
                    <img src={ foodtruck } className="cardImage" />
                    <a target="_blank" href="#" className="overlay">
                      <div className="cardText">
                        <div className="cardInfo">
                          <img src={ tiy } className="tiyLogo" />
                          <div>This was my final project, I teamed up with Dave Blodgett (from the back-end class). We created an application that connects foodtrucks and customers.
                            It allows foodtrucks to post their location, how long they will be there and any specials. The application also will generate text and email messages
                            to their customers. The customers can log in and view food truck locations on a google maps api and save their favorite trucks. I did all graphic
                            desinging for this project. Tools used React, Lodash, HTML and CSS</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card">
                    <img src={ todo } className="cardImage" />
                    <a target="_blank" href="http://tiychris-todos.herokuapp.com/" className="overlay">
                      <div className="cardText">
                        <div className="cardInfo">
                          <img src={ tiy } className="tiyLogo" />
                          <div>In this school project, I created a todo's list from mocks. This application will record a list of todo's and remove them upon completion. Tools used
                            React, HTML and CSS.</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card">
                    <img src={ chatApp } className="cardImage" />
                    <a target="_blank" href="#" className="overlay">
                      <div className="cardText">
                        <div className="cardInfo">
                          <img src={ tiy } className="tiyLogo" />
                          <div>In this school project, I created a chat room that allows users to customize their converastions. I did all graphic designs for this project. Tools
                            used React, socket.io, HTML and CSS.</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card">
                    <img src={ restaurant } className="cardImage" />
                    <a target="_blank" href="#" className="overlay">
                      <div className="cardText">
                        <div className="cardInfo">
                          <img src={ tiy } className="tiyLogo" />
                          <div>In this class project, I created a resturant website from mocks. This project retreives it's data from an API's database. Tools used React, Google
                            APIs, HTML and CSS.
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card" className="card">
                    <img src={ war } className="cardImage" />
                    <a target="_blank" href="#" className="overlay">
                      <div className="cardText">
                        <div className="cardInfo">
                          <img src={ tiy } className="tiyLogo" />
                          <div>In this class project, I created a game of war. This is a player versus computer game, the object of the game is win all the cards. Tools Used Bootstrap
                            HTML and CSS. I did all the graphic designing for this project.</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card">
                    <img src={ sk8ter } className="cardImage" />
                    <a target="_blank" href="#" className="overlay">
                      <div className="cardText">
                        <div className="cardInfo">
                          <img src={ tiy } className="tiyLogo" />
                          <div>In this class project, I created a skater website from mocks, with an animated photo carousel. Tools used Bootstrap, HTML and CSS.</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card">
                    <img src={ poker } className="cardImage" />
                    <a target="_blank" href="http://tiychris.github.io/poker/" className="overlay">
                      <div className="cardText">
                        <div className="cardInfo">
                          <img src={ tiy } className="tiyLogo" />
                          <div>In this class project, I created an application that keeps track of your poker wins and losses. I did all the graphic designing for this project. Tools
                            used Backbone, HTML and CSS.</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        )
    }
})
