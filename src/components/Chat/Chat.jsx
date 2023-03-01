import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { SOCKET_URL } from '../../utils/webSocket';
import MessageForm from '../MessageForm/MessageForm';
import UserForm from '../UserForm/UserForm';
import Message from '../Message/Message';

import './Chat.scss';

const Chat = () => {
  const [messagesList, setMessagesList] = useState([]);
  const [user, setUser] = useState(null);
  const socket = useRef(null);
  const messageContainer = useRef(null);

  useEffect(() => {
    socket.current = new WebSocket(SOCKET_URL);
    socket.current.onmessage = updateMessagesList;
    scrollChatToBottom();
    return () => {
      socket.current.close();
    };
  });

  const updateMessagesList = (e) => {
    const dataFromServer = JSON.parse(e.data);
    setMessagesList((prevState) => [...prevState, dataFromServer]);
  };

  const scrollChatToBottom = () => {
    if (messageContainer) {
      messageContainer.current.addEventListener('DOMNodeInserted', (e) => {
        const target = e.currentTarget;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  };

  const setChatUser = (user) => {
    setUser(user);
  }

  const handleSubmit = (message) => {
    socket.current.send(
      JSON.stringify({
        user,
        userId: user.id,
        id: uuidv4(),
        message
      })
    );
  };

  return (
    <div className="chat">
      <div className="chat__container" ref={messageContainer}>
        {messagesList.map((item) => (
          <Message item={item} chatUser={user} key={item.id} />
        ))}
      </div>
      {user ? (
        <MessageForm handleSubmit={handleSubmit} />
      ) : (
        <UserForm setUser={setChatUser} />
      )}
    </div>
  );
}

export default Chat;
