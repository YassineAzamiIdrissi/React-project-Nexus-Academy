import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="paddings innerWidth flexCenter footer-container">
        <div className="flexCenter content-container">
          <div className="quick-links flexColStart">
            <h1>Quick Links</h1>
            <span>
              <img src="./pics/home.png" />
              Home
            </span>
            <span>
              <img src="./pics/courses.png" />
              Courses
            </span>
            <span>
              <img src="./pics/adm.png" />
              Admissions
            </span>
            <span>
              <img src="./pics/about.png" />
              About Us
            </span>
            <span>
              <img src="./pics/blog.png" />
              Blog
            </span>
          </div>
          <div className="explore flexColStart">
            <h1>Explore</h1>
            <span>
              <img src="./pics/resource.png" />
              Student Resources
            </span>
            <span>
              <img src="./pics/blogger.png" />
              School Adiministrators
            </span>
            <span>
              <img src="./pics/promotion.png" />
              Career Opportunities
            </span>
            <span>
              <img src="./pics/people.png" />
              Events
            </span>
            <span>
              <img src="./pics/contact.png" />
              Contact Us
            </span>
          </div>
          <div className="stay-connected flexColStart">
            <h1>Stay Connected</h1>
            <span>
              <img src="./pics/linkedin.png" />
              LinkedIn
            </span>
            <span>
              <img src="./pics/facebook.png" />
              Facebook
            </span>
            <span>
              <img src="./pics/instagram.png" />
              Instagram
            </span>
            <span>
              <img src="./pics/letter-n.png" />
              NexuSocial
            </span>
            <span>
              <img src="./pics/github.png" />
              GitHub
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
