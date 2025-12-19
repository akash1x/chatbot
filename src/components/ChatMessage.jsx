
import BotIcon from "../assets/chatbot.png";
import UserIcon from "../assets/user.png";
import './ChatMessage.css'
const ChatMessage = ({ message, sender }) => {
    return (
        <div className="chat-message">
            {sender === "user" && (
                <div className="user-message">
                    {message}
                    <img className="user-icon" src={UserIcon} />
                </div>
            )}
            {sender === "bot" && (
                <div className="bot-message">
                    <img className="bot-icon" src={BotIcon} />
                    {message}
                </div>
            )}
        </div>
    );
};


export default ChatMessage