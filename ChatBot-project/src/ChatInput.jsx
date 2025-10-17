<input
  placeholder="Send a message to Chatbot"
  size="30"
  onChange={saveInputText}
  value={inputText}
  className="chat-input"
  onKeyDown={e => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  }}
/>