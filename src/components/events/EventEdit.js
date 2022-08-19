import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"


export const EventEdit = () => {
    // TODO: This state object should not be blank
    const [events, editEvents] = useState({
        name: "",
        date: "",
        location: ""
    })

    // TODO: What is the variable in which you stored the route parameter?
    const { eventId } = useParams()
    const navigate = useNavigate()

    // TODO: Get the ticket state from the API.
    useEffect(() => {
        fetch(`http://localhost:8088/events/${eventId}`)
        .then (response => response.json())
        .then ((data) => {
               editEvents(data)
        })

    }, [ eventId ])

    const handleSaveButtonClick = (event) => {
         event.preventDefault()

        // TODO: Write the fetch for the PUT request to replace the object being edited
        return fetch(`http://localhost:8088/events/${events.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(events)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/")
            })
    }


    return <form className="eventForm">
        <h2 className="eventForm__title">Edit Event</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="eventName">Event Name:</label>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: "10rem"
                    }}
                    className="form-control"
                    value={events.name}
                    onChange={
                        (evt) => {
                            // TODO: Update state with a modified copy
                            const copy = { ...events }
                            copy.name = evt.target.value
                            editEvents(copy)
                        }
                    }>{events.name}</textarea>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="date">Event Date:</label>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: "10rem"
                    }}
                    className="form-control"
                    value={events.date}
                    onChange={
                        (evt) => {
                            // TODO: Update state with a modified copy
                            const copy = { ...events }
                            copy.date = evt.target.value
                            editEvents(copy)
                        }
                    }>{events.date}</textarea>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="location">Event Location:</label>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: "10rem"
                    }}
                    className="form-control"
                    value={events.location}
                    onChange={
                        (evt) => {
                            // TODO: Update state with a modified copy
                            const copy = { ...events }
                            copy.location = evt.target.value
                            editEvents(copy)
                        }
                    }>{events.location}</textarea>
            </div>
        </fieldset>
        {/* <fieldset>
            <div className="form-group">
                <label htmlFor="name">Emergency:</label>
                <input type="checkbox"
                    onChange={
                        (evt) => {
                            // TODO: Update state with a modified copy
                            const copy = { ...events }
                            copy.emergency = evt.target.checked
                            editEvents(copy)
                        }
                    } />
            </div>
        </fieldset> */}
        <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
            Save Edits
        </button>
    </form>
}