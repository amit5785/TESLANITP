import React from "react";
import "./EventCard.css"
import LogoForEventPage from '../Assets/LogoForEventPage'

const EventCard= (props)=>{
  return (
  <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;" /> */}
        <LogoForEventPage />
        <h1>{props.title}</h1>
      </div>

      <div className="flip-card-back">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  </div>
  );
}

export default EventCard;