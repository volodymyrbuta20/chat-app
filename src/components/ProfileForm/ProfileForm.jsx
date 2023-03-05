import React, { useContext, useState } from 'react';

import useLocalStorage from '../../hooks/useLocalStorage';
import { AuthContext } from '../../context/AuthContext';

import '../LoginForm/LoginForm.scss';

const ProfileForm = () => {
  const [inputValue, setInputValue] = useState('');
  const { value, setValue } = useLocalStorage('user');
  const { setIsAuth } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue({ ...value, userName: inputValue });
    setIsAuth({ ...value, userName: inputValue });
    setInputValue('');
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        name="userName"
        type="text"
        className="login-form__input"
        autoFocus
        required
        value={inputValue}
        placeholder={value.userName}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="login-form__button">
        Submit
      </button>
    </form>
  );
};

export default ProfileForm;
