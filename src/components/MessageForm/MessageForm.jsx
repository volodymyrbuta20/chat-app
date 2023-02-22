import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './MessageForm.scss';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageValue: ''
    };
  }

  sendMessage = (e) => {
    e.preventDefault();
    const { messageValue } = this.state;
    const userId = this.props.userId;
    const message = {
      id: uuidv4(),
      userId,
      message: messageValue,
      event: 'message'
    };
    this.props.socket.send(JSON.stringify(message));
    this.setState({ messageValue: '' });
  };

  render() {
    return (
      <form className="chat-form" onSubmit={this.sendMessage}>
        <input
          type="text"
          className="chat-form__input"
          required
          autoFocus
          value={this.state.messageValue}
          placeholder="Type your message"
          onChange={(e) => this.setState({ messageValue: e.target.value })}
        />
        <button className="chat-form__button">Send</button>
      </form>
    );
  }
}

export default MessageForm;