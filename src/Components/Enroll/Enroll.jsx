import React from "react";
import "./Enroll.css";
const Enroll = () => {
  return (
    <section className="enroll-wrapper" id="enroll">
      <section className="paddings innerWidth enroll-container">
        <div className="flexColCenter enroll-banner">
          <span className="primaryText">Make Nexus your next step</span>
          <span className="secondaryText">
            Become a digital virtuoso – claim your seat in the developer's den!
            <br />
            Ready to webify your future? Join the coding adventure Now!
          </span>
          <a href="mailto::yassineazami9@gmail.com" className="button">Enroll</a>
        </div>
      </section>
    </section>
  );
};

export default Enroll;
