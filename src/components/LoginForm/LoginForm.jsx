import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { Formik, Form, Field } from 'formik';

import useLocalStorage from '../../hooks/useLocalStorage';
import { AuthContext } from '../../context/AuthContext';
import Select from '../Select/Select';
import { userValidation } from './LoginFormSchema';
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
    <Formik
      initialValues={{ userName: '', country: '' }}
      validationSchema={userValidation}
      onSubmit={newUserConnect}
    >
      <Form className="login-form">
        <input
          name="userName"
          label="Name"
          placeholder="Enter your name"
          type="text"
          autoFocus
        />
        <Field
          component={Select}
          name="country"
          label="Country"
          getOptionValue={(option) => option.code}
          getOptionLabel={(option) => option.name}
          placeholder="Select your country"
        />
        <button size="large" color="primary" type="submit">
          Login
        </button>
      </Form>
    </Formik>

  );
};

export default LoginForm;

