import React from 'react';

import LoginForm from '../../components/LoginForm/LoginForm';

import './LoginPage.scss';

const LoginPage = () => (
  <div className="login">
    <div className="login__wrapper">
      <LoginForm />
    </div>
  </div>
);

export default LoginPage;
