import React from 'react';
import { Formik, Form } from 'formik';

import Input from '../Input/Input';
import Button from '../Button/Button';

import { messageValidation } from './MessageFormSchema';
import './MessageForm.scss';

const MessageForm = ({ handleSubmit }) => {
  const sendMessage = ({ message }, { resetForm }) => {
    handleSubmit(message);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ message: '' }}
      validationSchema={messageValidation}
      onSubmit={sendMessage}
    >
      {({ dirty }) => (
        <Form className="chat-form">
          <div className="chat-form__wrapper">
            <Input
              name="message"
              label="Message"
              placeholder="Type your message"
              type="text"
              autoFocus
            />
            <Button
              size="medium"
              color="transparent"
              position="absolute"
              type="submit"
              disabled={!dirty}
            >
              Send
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};


export default MessageForm;