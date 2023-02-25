import React, { Component } from 'react';

import { webSocket } from '../../utils/webSocket';
import MessageForm from '../MessageForm/MessageForm';
import UserForm from '../UserForm/UserForm';
import Message from '../Message/Message';

import './Chat.scss';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messagesList: [],
      chatUser: null
    };
    this.messageContainer = React.createRef();
  }

  componentDidMount() {
    webSocket.onmessage = this.updateMessagesList;
    webSocket.onerror = this.showErrorMessage;
    this.scrollChatToBottom();
  }

  componentWillUnmount() {
    webSocket.onclose = () => {
      webSocket.close();
    };
  }

  updateMessagesList = (e) => {
    const dataFromServer = JSON.parse(e.data);
    this.setState((prevState) => ({
      messagesList: [...prevState.messagesList, dataFromServer]
    }));
  };

  scrollChatToBottom = () => {
    if (this.messageContainer) {
      this.messageContainer.current.addEventListener('DOMNodeInserted', (e) => {
        const target = e.currentTarget;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  };

  setUser = (user) => {
    this.setState({ chatUser: user });
  };

  render() {
    const { messagesList, chatUser } = this.state;

    return (
      <div className="chat">
        <div className="chat__container" ref={this.messageContainer}>
          {messagesList.map((item) => (
            <Message item={item} chatUser={chatUser} key={item.id} />
          ))}
        </div>
        {chatUser ? (
          <MessageForm socket={webSocket} chatUser={chatUser} />
        ) : (
          <UserForm socket={webSocket} setUser={this.setUser} />
        )}
      </div>
    );
  }
}

export default Chat;
