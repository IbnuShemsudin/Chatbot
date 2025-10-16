import { useState } from 'react'
import './App.css'
import Chatinput from './Components/ChatInput'
function App() {
  const [chatMessages, setChatMessages] = useState([]);

  return (
    <> <Chatinput chatMessages={chatMessages} setChatMessages={setChatMessages} />
    </>
  )
}

export default App
