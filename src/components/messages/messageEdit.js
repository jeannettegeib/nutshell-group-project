import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const MessageEdit = () => {
    const [message, update] = useState({
        contents: "",
    });
    const { messageId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8088/messages/${messageId}`)
            .then(response => response.json())
            .then((data) => {
                update(data)
            })
    }, [messageId]);

    const handleSaveButtonClick = (event) => {
        event.preventDefault();

        return fetch(`http://localhost:8088/messages/${message.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/");
            });
    };


    return <form className="messageEditForm">
        <h2 className="messageEditForm__title"></h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="message"></label>
                <textarea
                    required autoFocus
                    type="text"
                    className="form-control"
                    value={message.contents}
                    onChange={
                        (evt) => {
                            const copy = { ...message }
                            copy.contents = evt.target.value
                            update(copy)
                        }
                    }>{message.contents}</textarea>
            </div>
        </fieldset>
        <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
            Save
        </button>
    </form>
}