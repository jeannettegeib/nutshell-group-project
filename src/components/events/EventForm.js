import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const EventForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [newEvent, update] = useState({
        name: "",
        date: "",
        location: ""

    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
    const navigate = useNavigate()
    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
      
      

        // TODO: Create the object to be saved to the API

           /*
  {
    "id": 2,
    "userId": 3,
    "description": "Vero est adipisci sed natus quasi consectetur occaecati. Modi maxime sunt officia cumque. Vel at culpa. Sint accusamus deserunt dolorem qui.",
    "emergency": true,
    "dateCompleted": ""
  }
        */
        const eventToSendToAPI = {
            userId: nutshellUserObject.id,
            name: newEvent.name,
            date: newEvent.date,
            location: newEvent.location
        }



        // TODO: Perform the fetch() to POST the object to the API
        return fetch (`http://localhost:8088/events`, {
            method: "POST" ,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventToSendToAPI)
        })
        .then(response => response.json())
        .then(() => {
            navigate("/")
    })
}

    return (
        <form className="eventForm">
            <h2 className="eventForm__title">New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name of event"
                        value={newEvent.name}
                        onChange={
                            (evt) => {
                                const copy = {...newEvent}
                                copy.name =evt.target.value
                                update(copy)
              
    
                            }
                        } 
                        />
                            </div>
                           </fieldset>
                           <fieldset> 
                            <div
                             className="form-group">
                    <label htmlFor="name">Date of Event</label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        placeholder="Enter event date"
                        value={newEvent.date}
                        onChange={
                            (evt) => {
                                const copy = {...newEvent}
                                copy.date =evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset> 
                            <div
                             className="form-group">
                    <label htmlFor="name">Event Location</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter event location"
                        value={newEvent.location}
                        onChange={
                            (evt) => {
                                const copy = {...newEvent}
                                copy.location =evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            
            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Add Event
            </button>
        </form>
    )
}

