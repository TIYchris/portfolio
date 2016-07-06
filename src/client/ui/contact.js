import React from "react";
import store from "store";

require("assets/styles/contact.scss");


var tiy = require("assets/images/tiy.png")


export default React.createClass({
    render: function() {
        return (
            <div className="containerContact">
              <a className="contactStop" name="contact"></a>
              <div className="contactTitle">Hire Chris</div>
              <div className="contactText">Please fill out the form below to enquire about hiring me. To learn about how I work and the value I can bring to your project, please visit About or Portfolio.</div>
              <div className="formContact">
                <form>
                  <div className="group">
                    <input type="text" required/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Your Name</label>
                  </div>
                  <div className="group">
                    <input type="text" required/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Email Address</label>
                  </div>
                  <div className="group">
                    <input type="text" required/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Telephone number or Skype/Google Hangouts username</label>
                  </div>
                  <div className="group">
                    <input type="text" required/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Your Website</label>
                  </div>
                  <div className="groupTextarea">
                    <textarea rows="5" required/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Project Description
                      <br/>
                      <br/>Please briefly describe your project, what you aim to achieve, what you'd like me to do, and link to any appropriate materials
                    </label>
                    <a className="button">Submit</a>
                  </div>
                </form>
              </div>
            </div>
        )
    }
})
