import React from "react";
import PIicon from '../Assets/PIicon';
import Navbar from "../Components/Navbar";
import "./Faculty.css";

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
            <p>I gladly introduce one of the newly formed club of NIT Patna, the <span style={{fontSize:"1.2em",fontWeight:"bold" }}>TESLA</span>.
Formed by few students of 2k19 batch of EE Departement with the vision of giving Electical Engineering students a new perspective to approch their futher study during the entire college period.In short span of time, TESLA managed to conduct few events in which 100s students participated and will continue to conduct such engaging events to increase & motivate the students to take part in it.</p>
          </div>
        </div>
     </div>
    </div>
  );
}

export default Faculty;