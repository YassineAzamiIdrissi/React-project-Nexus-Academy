import React from "react";
import "./TopSection.css";
import { BiSolidSearchAlt2 } from "react-icons/bi"; 
import Stat from "./Stat"; 
import stats from "./stats.json"
const TopSection = () => {
  return (
    <div className="topSection-wrapper">
      <div className="paddings flexCenter innerWidth topSection-container">
        <div className="flexColStart leftSide">
          <div className="title-container">
            {/* <div className="ornament" /> */}
            <h1>
              Coding
              <br />
              Your Tomorrow
              <br />
              Today
            </h1>
          </div>
          <div className="flexColStart sec-description">
            <span className="secondaryText"
            style={{color:"#8D8DAA"}}>
              Empower your future with cutting-edge web development skills at
              DevNet Nexus
            </span>
            <span className="secondaryText" style={{color:"#8D8DAA"}}>
              Unlock your potential and shape the digital world with our
              expertise.
            </span>
          </div>
          <div className="flexCenter searchbar-container">
            <BiSolidSearchAlt2 color="blue" style={{ fontSize: "30px",marginRight:"20px"}} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
               {
                    stats.map((item,index)=>
                    (
                        <Stat key={index}  start={item.start} end={item.end} detail={item.detail}/>
                    ))
               }
          </div>
        </div>
        <div className="rightSide">
          <div className="image-container">
            <img src="./pics/mohammad-rahmani-_Fx34KeqIEw-unsplash.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
