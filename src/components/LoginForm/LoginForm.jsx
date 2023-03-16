import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';

import { setUser } from '../../store/userSlice';
import { countries } from '../../utils/countries';
import SelectOptionWithFlag from '../SelectOptionWithFlag/SelectOptionWithFlag';
import useLocalStorage from '../../hooks/useLocalStorage';
import Select from '../Select/Select';
import Input from '../Input/Input';
import Button from '../Button/Button';

import { userValidation } from './LoginFormSchema';
import './LoginForm.scss';

const LoginForm = () => {
  const { setValue } = useLocalStorage('user');
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fromPage = location.state?.from?.pathname || '/';

  const newUserConnect = ({ userName, country }) => {
    const message = {
      id: uuidv4(),
      userName,
      country
    };
    dispatch(setUser(message));
    setValue(message);
    setTimeout(() => {
      navigate(fromPage, { replace: true });
    }, 0);
  };

  return (
    <Formik
      initialValues={{ userName: '', country: null }}
      validationSchema={userValidation}
      onSubmit={newUserConnect}
    >
      <Form className="login-form">
        <Input
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
          options={countries}
          getOptionValue={(option) => option.code}
          getOptionLabel={(option) => option.name}
          placeholder="Select your country"
          customOption={SelectOptionWithFlag}
        />
        <Button size="large" color="primary" type="submit">
          Login
        </Button>
      </Form>
    </Formik>
  );
};

LoginForm.propTypes = {
  setUser: PropTypes.func
};

export default LoginForm;
