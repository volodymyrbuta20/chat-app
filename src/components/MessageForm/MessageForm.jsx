import React, { useState } from 'react';
import './MessageForm.scss';

const MessageForm = ({ handleSubmit }) => {
  const [messageValue, setMessageValue] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    handleSubmit(messageValue);
    setMessageValue('');
  };

  return (
    <form className="chat-form" onSubmit={sendMessage}>
      <input
        type="text"
        className="chat-form__input"
        required
        autoFocus
        value={messageValue}
        placeholder="Type your message"
        onChange={(e) => setMessageValue(e.target.value)}
      />
      <button className="chat-form__button">Send</button>
    </form>
  );
}

export default MessageForm;