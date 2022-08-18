import { useState } from "react"
export const MessageForm = ({ changeState }) => {

    const [messages, updateMessages] = useState({
        contents: "",
        timeStamp: 0,
    })

    const localNutUser = localStorage.getItem("nutshell_user")
    const NutUserObject = JSON.parse(localNutUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const messageToSendToAPI = {
            "userId": NutUserObject.id,
            "contents": messages.contents,
            "timeStamp": Date.now()
        }

        return fetch(`http://localhost:8088/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                fetch("http://localhost:8088/messages?_expand=user")
                    .then(response => response.json())
                    .then(newMessage => changeState(newMessage))
            });
    };

    return (
        <form className="messageForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="contents"></label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Start typing..."
                        value={messages.contents}
                        onChange={
                            (event) => {
                                const copy = { ...messages }
                                copy.contents = event.target.value
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