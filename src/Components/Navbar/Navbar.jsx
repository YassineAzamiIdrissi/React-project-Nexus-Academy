import React, { useEffect } from "react";
import "./Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
const Navbar = () => {
  const [menuShown, setMenuShown] = useState(true);
  const [width,setWidth] = useState(0); 
  const handleResize = () => 
  {
    if(document.documentElement.clientWidth > 770) 
    {
       setMenuShown(true); 
    }
  }
  useEffect(()=>
  {
     window.addEventListener('resize',handleResize);
  },[])
  return (
    <div className="navbar-wrapper">
      <div className="innerWidth flexCenter paddings navbar-container">
        <div className="nav-logo">
          <div className="logo-ornament" />
          <span>DevNet Nexus</span>
        </div>
        <OutsideClickHandler
          onOutsideClick={() => {
            if(document.documentElement.clientWidth<769)
            setMenuShown(false)
          }}
        >
          <div
            style={menuShown ? { display: "flex" } : {display:"none"}}
            className="flexCenter nav-links"
          >
            <a href="#courses">Popular courses</a>
            <a href="#whyus">Why us</a>
            <a href="#contact">Contact</a>
            <a href="#enroll">Get started</a>
            <button className="button">Join</button>
          </div>
        </OutsideClickHandler>
        <div
          className="navlinks-icon"
          onClick={() => {
            setMenuShown(true);
            console.log(menuShown);
          }}
        >
          <AiOutlineMenu size={30} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
