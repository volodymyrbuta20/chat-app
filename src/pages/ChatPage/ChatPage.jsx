import React, { useState, useEffect, useRef, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AuthContext } from '../../context/AuthContext';
import { SOCKET_URL } from '../../utils/webSocket';
import MessageForm from '../../components/MessageForm/MessageForm';
import Message from '../../components/Message/Message';
import useScrollMessages from '../../hooks/useScrollMessages';

import './Chat.scss';

const Chat = () => {
  const [messagesList, setMessagesList] = useState([]);
  const { isAuth: user } = useContext(AuthContext);
  const socket = useRef(null);
  const messageContainer = useScrollMessages(messagesList);

  useEffect(() => {
    socket.current = new WebSocket(SOCKET_URL);
    socket.current.onmessage = updateMessagesList;
    return () => {
      socket.current.close();
    };
  });

  const updateMessagesList = (e) => {
    const dataFromServer = JSON.parse(e.data);
    setMessagesList((prevState) => [...prevState, dataFromServer]);
  };

  const handleSubmit = (message) => {
    socket.current.send(
      JSON.stringify({
        user,
        userId: user.id,
        userName: user.userName,
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
      <MessageForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default Chat;