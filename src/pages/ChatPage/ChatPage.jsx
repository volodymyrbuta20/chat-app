import React, { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { addMessage } from '../../store/messageSlice';
import { SOCKET_URL } from '../../utils/socketUrl';
import useScrollMessages from '../../hooks/useScrollMessages';
import MessageForm from '../../components/MessageForm/MessageForm';
import Message from '../../components/Message/Message';
import { messageSelector, userSelector } from '../../store/selectors';

import './ChatPage.scss';

const ChatPage = () => {
  const socket = useRef(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const messagesList = useSelector(messageSelector);
  const messageContainer = useScrollMessages(messagesList);

  useEffect(() => {
    socket.current = new WebSocket(SOCKET_URL);
    socket.current.onmessage = updateMessagesList;
    socket.current.onerror = (err) => {
      toast.error(err);
    };
    return () => {
      socket.current.close();
    };
  });

  useEffect(
    () => () => {
      socket.current.onclose = () => {
        console.log('Socket closed');
      };
    },
    [location]
  );

  const updateMessagesList = (e) => {
    const dataFromServer = JSON.parse(e.data);
    dispatch(addMessage(dataFromServer));
  };

  const handleSubmit = (message) => {
    socket.current.send(
      JSON.stringify({
        user,
        userName: user.userName,
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
          <Message item={item} user={user} key={item.id} />
        ))}
      </div>
      <MessageForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default ChatPage;
