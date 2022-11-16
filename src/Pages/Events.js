import {React} from 'react'
import "./Events.css"
import { Activities } from '../Data/activities'
import Navbar from '../Components/Navbar'
import EventCard from '../Components/EventCard'

const Events=()=>{

  // useEffect(()=>{console.log("Amit Kumar")});
  return (
    <div>
      <Navbar/>
      <div className='EventsHolder'>
        <div className='Events'>
        {Activities.map((currentElement,index)=>{
          return (
            <EventCard title={currentElement.title} description={currentElement.description} key={index}/>
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default Events;