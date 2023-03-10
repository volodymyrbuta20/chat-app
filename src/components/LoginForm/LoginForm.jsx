import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

import useLocalStorage from '../../hooks/useLocalStorage';
import { AuthContext } from '../../context/AuthContext';
import Select from '../Select/Select';
import './LoginForm.scss';

const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const { setValue } = useLocalStorage('user');
  const { setIsAuth } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const fromPage = location.state?.from?.pathname || '/';

  const newUserConnect = (e) => {
    e.preventDefault();
    const message = {
      id: uuidv4(),
      userName
    };
    setTimeout(() => {
      setIsAuth(message);
      navigate(fromPage, { replace: true });
    }, 0);
    setValue(message);
    setUserName('');
  };

  return (
    <form className="login-form" onSubmit={newUserConnect}>
      <input
        name="userName"
        type="text"
        className="login-form__input"
        autoFocus
        required
        value={userName}
        placeholder="Enter your name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <Select
        name="country"
      />
      <button type="submit" className="login-form__button">
        Login
      </button>
    </form>
  );
};

export default LoginForm;

