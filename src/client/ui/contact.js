import React from "react";
import store from "store";
import api from "api/api";
import { notify } from "react-notify-toast";

require("assets/styles/contact.scss");


var tiy = require("assets/images/tiy.png")


export default React.createClass({
    sendEmail: function() {
        const self = this;

        api.sendEmail({
            name: this.refs.name.value,
            email: this.refs.email.value,
            number: this.refs.number.value,
            webSite: this.refs.webSite.value,
            description: this.refs.description.value
        })
            .then(function() {
                self.refs.name.value = "";
                self.refs.email.value = "";
                self.refs.number.value = "";
                self.refs.webSite.value = "";
                self.refs.description.value = "";
                // Clear the form, say "Success"
                notify.show("An email has been sent to Chris, he will be in contact with you shortly", "success", 60000);
            })
            .catch(function(err) {
                console.log(err.toString());
                // Let the user know something went wrong.
                notify.show("Something went wrong, check your entries or try again later", "error", 60000);
            });
    },

    render: function() {
        return (
            <div className="containerContact">
              <a className="contactStop" name="contact"></a>
              <div className="contactTitle">Hire Chris</div>
              <div className="contactText">Please fill out the form below to inquire about hiring me. To learn about how I work and the value I can bring to your project, please visit About or Portfolio,
                or drop me an email.</div>
              <div className="formContact">
                <form>
                  <div className="group">
                    <input name="full_name" ref="name" type="text" required/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Your Name</label>
                  </div>
                  <div className="group">
                    <input name="email" ref="email" type="text" required/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Email Address</label>
                  </div>
                  <div className="group">
                    <input name="phone" ref="number" type="text" required/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Telephone number or Skype/Google Hangouts username</label>
                  </div>
                  <div className="group">
                    <input name="website" ref="webSite" type="text" required/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Your Website</label>
                  </div>
                  <div className="groupTextarea">
                    <textarea name="description" ref="description" rows="5" required/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Project Description
                      <br/>
                      <br/>Please briefly describe your project, what you aim to achieve, what you'd like me to do, and link to any appropriate materials
                    </label>
                    <a className="button" onClick={ this.sendEmail }>Submit</a>
                  </div>
                </form>
              </div>
            </div>
        )
    }
})
