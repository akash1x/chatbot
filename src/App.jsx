import { useState } from 'react'
import ChatInput from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import './App.css'
const App = () => {
  const [chatMessages, setChatMessages] = useState([
    { message: "Hi there!", sender: "user" },
    { message: "Hello! How can I help you today?", sender: "bot" },
    { message: "I have a question about your services.", sender: "user" },
    { message: "Certainly, please ask away!", sender: "bot" },
  ]);
  return (
    <div className='container'>

      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        setChatMessages={setChatMessages}
        chatMessages={chatMessages}
      />
    </div>
  );
};


export default App
