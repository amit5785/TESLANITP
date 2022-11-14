import React from "react";
import "./EventCard.css"
import LogoForEventPage from '../Assets/LogoForEventPage'

const EventCard= (props)=>{
  return (
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;" /> */}
        <LogoForEventPage />
        <h1>{props.title}</h1>
      </div>

      <div class="flip-card-back">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  </div>
  );
}

export default EventCard;