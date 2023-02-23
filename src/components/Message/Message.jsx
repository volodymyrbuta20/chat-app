import React, { Component } from 'react';
import './Message.scss';

class Message extends Component {
  render() {
    const { item, chatUser } = this.props;

    return (
      <div className="message">
        {item.event === 'connection' ? (
          <p className="message__connection">
            {item.author.userName} connected to chat
          </p>
        ) : (
          <p
            className={
              chatUser && chatUser.id === item.userId ? 'message__user' : 'message__partner'
            }
          >
            {item.message}
          </p>
        )}
      </div>
    );
  }
}

export default Message;