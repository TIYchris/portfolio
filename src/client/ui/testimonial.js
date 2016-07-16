import React from "react";
import store from "store";

require("assets/styles/testimonial.scss");


export default React.createClass({
    render: function() {
        return (
            <div className="testimonialContainer">
              <a className="testimonialStop" name="testimonial"></a>
              <div className="testimonialTitle">Testimonials</div>
              <div className="testimonialArea">
                <div className="testimonialGroup">
                  <blockquote className="testimonialInfo">I worked closely with Chris at Smart Social Media for eight months, serving as his mentor, and have continued in that role since. Chris is a diligent developer,
                    with an aptitude and passion for building attractive and responsive modern web designs. He&#39;s still early in his career, but I believe he has a bright future
                    as a web, mobile, and full-stack developer. Any team looking for junior developers would be smart to hire him.
                    <div className="testimonialCard">
                      <cite className="testimonialName">David Carley</cite>
                      <div className="testimonialContact">CTO Blitz Pick</div>
                    </div>
                  </blockquote>
                </div>
                <div className="testimonialGroup">
                  <blockquote className="testimonialInfo">Chris was my partner at The Iron Yard (a coding bootcamp). He takes tremendous pride in his work and made the front end for our projects look great. For
                    our final project, a food truck app, Chris built registration, dynamic map, and profile pages that looked professional and worked seamlessly.
                    <div className="testimonialCard">
                      <cite className="testimonialName">Dave Blodgett</cite>
                      <div className="testimonialContact">Student at The Iron Yard</div>
                    </div>
                  </blockquote>
                </div>
                <div className="testimonialGroup">
                  <blockquote className="testimonialInfo">Chris is a easy-going, smart, and get it done kind of guy. He's very easy to work with; not just because he's laid back, but because he knows how to put his
                    head down and get stuff done. It was an absolute pleasure to have Chris in my class. He&#39;s got a very bright future in development ahead of him.
                    <div className="testimonialCard">
                      <cite className="testimonialName">Mike Sweeney</cite>
                      <div className="testimonialContact">Instructor at The Iron Yard</div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
        )
    }
})
