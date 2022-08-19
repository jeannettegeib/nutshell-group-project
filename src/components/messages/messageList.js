import { useEffect, useState } from "react"
import { Message } from "./message"
import { MessageForm } from "./messageForm"
import "./messages.css"

export const MessageList = () => {
    const [messages, setMessages] = useState([])
    useEffect(
        () => {
            fetch(`http://localhost:8088/messages?_expand=user`)
                .then(response => response.json())
                .then((messageArray) => {
                    setMessages(messageArray)
                })
            console.log("Initial state of messages", messages)
        },
        []
    )
    return <>
        <article className="messages">
            {
                messages.map(
                    (message) => {
                        return <Message changeState={setMessages} message={message} />
                    }
                )
            }

        </article>
        <div className="nutMessageForm"> <MessageForm changeState={setMessages} /> </div>

    </>
}