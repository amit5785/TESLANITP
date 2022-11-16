import React from "react";
import PIicon from '../Assets/PIicon';
import Navbar from "../Components/Navbar";
import "./Faculty.css";

const temp=`I whole-heartedly welcome you all to <span class="tesla-span" >TESLA</span> (Technical Electrical Society for Learning and Application), a club of NIT Patna focussed on activities and events carried out by electrical engineers.

The initiative for the formation of this club has been taken by a bunch of electrical engineering undergrads of 2019 with the vision of  providing innovative programs and services for Electrical Engineering students of NIT Patna to lead, influence, and contribute to their communities locally, nationally, and globally. In this short span of time, TESLA managed to conduct few events in which appreciable number of students participated. TESLA will continue to conduct such engaging events to increase & motivate the students to take part in them.`


const Faculty=()=>{
  return (
    <div>
     <Navbar />
     <div className="mainContainer">
        <div className="elementContainer">
          <div className="iconContainer">
            <PIicon />
          </div>
          <div className="reviewcontainer">
            <h1>FROM THE DESK OF PI</h1> 
            <p style={{ whiteSpace:"pre-line" }}  dangerouslySetInnerHTML={{__html: temp }}></p>
          </div>
        </div>
     </div>
    </div>
  );
}

export default Faculty;
