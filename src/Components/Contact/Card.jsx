import React from 'react'
import {MdCall} from "react-icons/md"
const Card = ({icon,title,phone,button}) => {
  return (
    <div className="flexColStart contact-card">
    <div className="flexStart card-header">
      <div className="card-icon">
            {icon}
      </div>
      <div className="flexColStart card-info">
        <span className="primaryText">
            {title}
        </span>
        <span className="secondaryText">
            {phone}
        </span>
      </div>
    </div>
    <div className="flexCenter button contact-button">{button}</div>
  </div>
  )
}

export default Card