import React from 'react';
import './Message.scss';

const Message = ({ item, chatUser }) => {
  console.log(item, chatUser);
  return (
    <div className="message">
      <div
        className={
          chatUser && chatUser.id === item.userId
            ? 'message__user'
            : 'message__partner'
        }
      >
        <div className="message__name">{item.userName}</div>
        <div
          className={
            chatUser && chatUser.id === item.userId
              ? 'message__user-text'
              : 'message__partner-text'
          }
        >
          {item.message}
        </div>
      </div>
    </div>
  );
};


export default Message;