import React from "react"
import CountUp from "react-countup"
const Stat = ({ start, end, detail }) => {
  return (
    <div className="flexColCenter stat">
      <div className="flexCenter">
        <span>
          <CountUp start={start} end={end} duration={6} />
        </span>
        <span style={{ color: "#54B435" }}>+</span>
      </div>
      <span className="secondaryText" style={{color:"#8D8DAA"}}>{detail}</span>
    </div>
  );
};

export default Stat;
