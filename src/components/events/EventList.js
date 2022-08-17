import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"
// import "./Tickets.css"
import { Link } from "react-router-dom"
import { EventForm } from "./EventForm"
// import { Ticket } from "./Ticket"




export const EventList = ({searchTermState}) => {
    const [events, setEvents] = useState([])
    
 //   const navigate = useNavigate()


    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)
    
    useEffect(
        () => {
         getAllEvents()
    },       
        []
    )
   
   
   
   
   /*
    useEffect(
        () => {
            if (emergency) {
                const emergencyTickets = tickets.filter(ticket => ticket.emergency === true)
                setFiltered(emergencyTickets)
            }
            else {
                setFiltered(tickets)
            }
        },
        [emergency]
    )
*/

    const getAllEvents = () => {
        fetch (`http://localhost:8088/events`)
            .then(response => response.json())
            .then((eventArray) => {
                setEvents(eventArray)
    })
}
/*
    useEffect(
        () => {
            getAllTickets()
              
                fetch(`http://localhost:8088/employees?_expand=user`)
                .then(response => response.json())
                .then((employeeArray) => {
                    setEmployees(employeeArray)
                })   

           
        },
        [] // When this array is empty, you are observing initial component state
    )

    */
    
    
   
   {/* {
        honeyUserObject.event
      ? <>
       <button onClick={  () => { setEmergency(true) } } >Emergency Only</button>
       <button onClick={  () => { setEmergency(false) } } >Show All</button>
       </>
        :<>
         <button onClick={() => navigate("/ticket/create")}>Create Ticket</button>
         <button onClick={() => updateOpenOnly(true)}>Open Ticket</button>
         <button onClick={() => updateOpenOnly(false)}>All My Tickets</button>
    </>
    }
*/}

return <> 

    <h2>List of Events</h2>


    <article className="events">
        { 
            events.map(
                (event) => 
                
                
            )
        }
</article>
</>


    }
