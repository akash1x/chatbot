import { useState } from 'react'
import './ChatInput.css'
const ChatInput = ({ chatMessages, setChatMessages }) => {
    const [message, setMessage] = useState("");
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const sendMessage = () => {
        const userMessage = [
            ...chatMessages,
            { message: message, sender: "user" },
        ];
        setChatMessages(userMessage);
        setMessage("");

        //Reply from bot
        setChatMessages([
            ...userMessage,
            { message: crypto.randomUUID(), sender: "bot" },
        ]);
    };
    return (
        <div className='chat-input'>
            <input
                type="text"
                placeholder="Enter the text"
                onChange={handleMessageChange}
                value={message}
                className='text-input'
            />
            <button onClick={sendMessage} className='send-button'>Send</button>
        </div>
    );
};


export default ChatInput