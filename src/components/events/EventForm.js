import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const EventForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [event, update] = useState({
        Name: "",
        Date: "",
        Location: ""

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
            name: event.name,
            date: event.date,
            location: event.location
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
            navigate("/events")
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
                        value={event.name}
                        onChange={
                            (evt) => {
                                const copy = {...event}
                                copy.name =evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
         {/*   <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                        value={ticket.emergency}
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.emergency = evt.target.checked
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
                    */}
            <button 
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Add Event
            </button>
        </form>
    )
}