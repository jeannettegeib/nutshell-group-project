import { useState } from "react"
export const Message = ({ message, changeState }) => {
    const [canEdit, setCanEdit] = useState(false)
    const [updateMessage, setUpdateMessage] = useState(message)
    const loggedInUser = JSON.parse(localStorage.getItem("nutshell_user"))
    return (
        canEdit && loggedInUser.id === message.userId ?
            <section className="message" key={`message--${message.id}`}>
                <form onSubmit={event => {
                    event.preventDefault();
                    return fetch(`http://localhost:8088/messages/${message.id}`,
                        {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(updateMessage)
                        })
                        .then(() => {
                            fetch("http://localhost:8088/messages?_expand=user")
                                .then(response => response.json())
                                .then(newMessage => {
                                    changeState(newMessage)
                                    setCanEdit(false)
                                })
                        })
                }}>
                    <input value={updateMessage.contents}
                        onChange={
                            (event) => {
                                const copy = { ...updateMessage }
                                copy.contents = event.target.value
                                setUpdateMessage(copy)
                            }
                        } />
                </form>
            </section>
            :
            <section className="message" key={`message--${message.id}`}>
                <div onDoubleClick={() => setCanEdit(true)}>
                    {message?.user?.username} : {message.contents}
                </div>
            </section>
    )
}