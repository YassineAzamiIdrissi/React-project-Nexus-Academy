import React from "react"
import "./Contact.css"
import {MdCall} from "react-icons/md"
import {RiMailSendFill} from "react-icons/ri"
import {AiFillGithub} from "react-icons/ai" 
import {BsLinkedin} from "react-icons/bs"
import Card from "./Card";
const Contact = () => {
  return (
    <div className="contact-wrapper" id="contact">
      <div className="innerWidth paddings contact-container flexCenter">
        <div className="flexColStart contact-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us </span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.
            <br /> We beleive a good blace to live can make your life better
          </span>
          <div className="flexStart line-1">
            <Card icon={<RiMailSendFill />} 
                  title={"Mail us"} 
                  phone={"Nexus@gmail.com"}
                  button={"Send a mail now"}/>
            <Card icon={<AiFillGithub />} 
                  title={"our repos "} 
                  phone={"NexusGittingFurther"}
                  button={"Get to Git"}/>
          </div>
          <div className="flexStart line-2">
            <Card icon={<MdCall />} 
                  title={"Call us"} 
                  phone={"+133123435456"}
                  button={"Call"}/>
            <Card icon={<BsLinkedin />} 
                  title={`Community`} 
                  phone={"NexusFull com."}
                  button={"Link in"}/>
          </div>
        </div>
        <div className="flexCenter contact-right">
          <div className="image-container">
            <img src="./pics/contactPic.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
