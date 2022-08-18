import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const MessageForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [messages, updateMessages] = useState({
        contents: "",
        timeStamp: 0,

    })
    const navigate = useNavigate()
    const localNutUser = localStorage.getItem("nutshell_user")
    const NutUserObject = JSON.parse(localNutUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // Create the object to be saved to the API
        const messageToSendToAPI = {
            "userId": NutUserObject.id,
            "contents": messages.contents,
            "timeStamp": Date.now()
        }

        // TODO: Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:8088/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/")
            });
    };

    return (
        <form className="messageForm">
            <h3 className="messageForm__title">New Message</h3>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="contents"></label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Type your message..."
                        value={messages.contents}
                        onChange={
                            (evt) => {
                                const copy = { ...messages }
                                copy.contents = evt.target.value
                                updateMessages(copy)
                            }
                        } />
                </div>
                <button onClick={(clickEvent) => handleSaveButtonClick(clickEvent)} className="btn btn-primary">
                    Send
                </button>
            </fieldset>
        </form>
    )
}