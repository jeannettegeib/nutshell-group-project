import { useEffect, useState } from "react"

export const MessageList = () => {
    const [messages, setMessages] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/users?_embed=messages`)
                .then(response => response.json())
                .then(() => {

                })
            console.log("Initial state of messages", messages) // View the initial state of tickets
        },
        [] // When this array is empty, you are observing initial component state
    )
    return <> 
    
    <h2>List of Messages</h2>
        <article className="messages">
            {

                messages.map(
                    (message) => {
                        return <section className="message">
                            <header>{message.contents}</header>
                            <footer>{message.timestamp}</footer>
                        </section>
                    }
                )
            }
        </article>
    </>
}