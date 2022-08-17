import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// import "./Tickets.css"
import { Link } from "react-router-dom"
import { EventForm } from "./EventForm"
// import { Ticket } from "./Ticket"

export const EventList = () => {
    const [events, setEvents] = useState([])
    const navigate = useNavigate()
    useEffect (() => {
        fetch ("http://localhost:8088/events")
            .then((response) => response.json())
            .then((eventArray) => {
                setEvents(eventArray);
            });
       }, [events]);

          return
   (
   <>
   <h2 className="taskHeader">Event List</h2>

   <button
       className="createEvent"
       onClick={() => {
           navigate("/event/create");
       }}
       >
           Create Event
       </button>
       </>
   )

}
   
    
   

  

