import React from "react";
import "./Inquiries.css";
import data from "../../data/accordion";
import { AiFillCaretDown } from "react-icons/ai";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import { useState } from "react";
const Inquiries = () => {
  const [array, setArray] = useState([true, false, false]);
  const handleClick = (index) => {
    const localArray = [false, false, false];
    localArray[index] = true;
    setArray(localArray);
  };
  return (
    <div className="inquiries-wrapper" id="whyus">
      <div className="paddings innerWidth flexCenter inquiries-container">
        <div className="inquiries-left">
          <div className="image-container">
            <img src="./pics/inquiries.jpg" />
          </div>
        </div>
        <div className="flexColStart inquiries-right">
          <div className="flexColStart inquiries-right-text">
            <span className="orangeText">Why us ?</span>
            <span className="primaryText">
              your pathway to a rewarding tech career
            </span>
            <span className="secondaryText">
              Our courses offer top-notch jobs opportunities and hands-on
              learning experiences
            </span>
          </div>
          <Accordion allowMultipleExpanded={false} className="accordion">
            {data.map((item, index) => (
              <AccordionItem
                key={index}
                className={`accordionItem ${
                  array[index] ? "expanded" : "collapsed"
                }`}
                onClick={() => {
                  handleClick(index);
                }}
              >
                <AccordionItemHeading className="accordionHeading">
                  <AccordionItemButton className="flexCenter accordionButton">
                 
                    <div className="primaryText desc">{item.heading}</div>
                    <div className="icon">
                      <AiFillCaretDown />
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="accordion-pannel">
                  {item.detail}
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Inquiries;
