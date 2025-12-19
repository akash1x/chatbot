import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import './ChatMessages.css'
const ChatMessages = ({ chatMessages }) => {
    const chatMessagesRef = React.useRef(null);
    useEffect(() => {
        chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }, [chatMessages]);
    return (
        <div className='chat-messages' ref={chatMessagesRef}>
            {chatMessages.map((message, index) => (
                <ChatMessage
                    key={index}
                    message={message.message}
                    sender={message.sender}

                />
            ))}
        </div>
    );
};


export default ChatMessages