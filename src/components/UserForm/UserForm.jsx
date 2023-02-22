import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../MessageForm/MessageForm.scss';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ''
    };
  }

  newUserConnect = (e) => {
    e.preventDefault();
    const { userName } = this.state;
    const message = {
      author: {
        id: uuidv4(),
        userName
      },
      id: uuidv4(),
      event: 'connection'
    };
    this.props.socket.send(JSON.stringify(message));
    this.props.setUser(message.author);
  };

  render() {
    return (
      <form className="chat-form" onSubmit={this.newUserConnect}>
        <input
          type="text"
          className="chat-form__input"
          autoFocus
          required
          value={this.state.userName}
          placeholder="Enter your name"
          onChange={(e) => this.setState({ userName: e.target.value })}
        />
        <button type="submit" className="chat-form__button">
          Connect
        </button>
      </form>
    );
  }
}

export default UserForm;
