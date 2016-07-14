import React from "react";
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
                      <div className="cardText">As a paid intern I paired with senior developers to work on a social media application. At Smart Social Media, I worked on a rich text editor (for blog
                        editing) and was a member of a three-person team that built the company's Ionic mobile app. Tools used include Angular, jQuery, Lodash, Markdown HTML
                        and CSS</div>
                    </a>
                  </div>
                  <div className="card">
                    <img src={ foodtruck } className="cardImage" />
                    <a target="_blank" href="https://tiychris-foodtruck.herokuapp.com/" className="overlay">
                      <div className="cardText">
                        <div className="cardInfo">
                          <img src={ tiy } className="tiyLogo" />
                          <div>This was my final project, and I teamed up with Dave Blodgett (from the back-end development class). We created an application that connects food trucks
                            and customers. It allows food trucks to post their location, how long they will be there and any specials they may have. The application also sends
                            text and email messages to their customers. Customers can log in and view food truck locations on a map (Google Maps) and save their favorite trucks.
                            I did all the graphic design for this project. Tools used include React, Lodash, HTML and CSS</div>
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
                          <div>In this school project, I created a todo's list from mockups provided by the instructor. This application records a list of todo's and removes them
                            upon completion. Tools used include React, HTML and CSS.</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card">
                    <img src={ chatApp } className="cardImage" />
                    <a target="_blank" href="https://tiychris-chatsocket.herokuapp.com/" className="overlay">
                      <div className="cardText">
                        <div className="cardInfo">
                          <img src={ tiy } className="tiyLogo" />
                          <div>In this school project, I created a chat room that allows users to customize their conversations. I did all graphic designs for this project. Tools
                            used include React, socket.io, HTML and CSS.</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card">
                    <img src={ restaurant } className="cardImage" />
                    <a target="_blank" href="http://tiychris-restaurant.herokuapp.com/" className="overlay">
                      <div className="cardText">
                        <div className="cardInfo">
                          <img src={ tiy } className="tiyLogo" />
                          <div>In this class project, I created a restaurant website from mockups provided by the instructor. This project retrieves its data from a database-driven
                            API. Tools used include React, Google APIs, HTML and CSS.
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card" className="card">
                    <img src={ war } className="cardImage" />
                    <a target="_blank" href="https://tiychris-war.herokuapp.com/" className="overlay">
                      <div className="cardText">
                        <div className="cardInfo">
                          <img src={ tiy } className="tiyLogo" />
                          <div>In this class project, I created a game of war. This is a player-vs-computer game. The object of the game is win all the cards. Tools used include
                            Bootstrap HTML and CSS. I did all the graphic design for this project.</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card">
                    <img src={ sk8ter } className="cardImage" />
                    <a target="_blank" href="https://tiychris-skater.herokuapp.com/" className="overlay">
                      <div className="cardText">
                        <div className="cardInfo">
                          <img src={ tiy } className="tiyLogo" />
                          <div>In this class project, I created a "Skater"-themed website from mockups provided by the instructor, with an animated photo carousel. Tools used include
                            Bootstrap, HTML and CSS.</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="card">
                    <img src={ poker } className="cardImage" />
                    <a target="_blank" href="https://tiychris-poker.herokuapp.com/" className="overlay">
                      <div className="cardText">
                        <div className="cardInfo">
                          <img src={ tiy } className="tiyLogo" />
                          <div>In this class project, I created an application that keeps track of your poker wins and losses. I did all the graphic design for this project. Tools
                            used include Backbone, HTML and CSS.</div>
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
