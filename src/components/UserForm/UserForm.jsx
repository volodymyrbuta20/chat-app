import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../MessageForm/MessageForm.scss';

const UserForm = ({ setChatUser }) => {
  const [userName, setUserName] = useState('');

  const newUserConnect = (e) => {
    e.preventDefault();
    const message = {
      id: uuidv4(),
      userName
    };
    setChatUser(message)
  };

  return (
    <form className="chat-form" onSubmit={newUserConnect}>
      <input
        type="text"
        className="chat-form__input"
        autoFocus
        required
        value={userName}
        placeholder="Enter your name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <button type="submit" className="chat-form__button">
        Connect
      </button>
    </form>
  );
}

export default UserForm;
