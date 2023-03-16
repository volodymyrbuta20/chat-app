import React from 'react';
import { Formik, Form, Field } from 'formik';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { updateUser } from '../../store/userSlice';
import { userSelector } from '../../store/selectors';
import useLocalStorage from '../../hooks/useLocalStorage';
import { userValidation } from '../LoginForm/LoginFormSchema';
import { countries } from '../../utils/countries';
import SelectOptionWithFlag from '../SelectOptionWithFlag/SelectOptionWithFlag';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Select from '../Select/Select';

import './ProfileForm.scss';

const ProfileForm = ({ handleCloseModal }) => {
  const { setValue } = useLocalStorage('user');
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const handleSubmit = ({ userName, country }) => {
    const formData = { ...user, userName, country };
    setValue(formData);
    dispatch(updateUser(formData));
    handleCloseModal();
    toast.success('Data changed succsessfully!');
  };

  return (
    <Formik
      initialValues={{ userName: user.userName, country: user.country }}
      validationSchema={userValidation}
      onSubmit={handleSubmit}
    >
      <Form className="profile-form">
        <Input
          name="userName"
          label="Name"
          placeholder="Enter your name"
          type="text"
          autoFocus
        />
        <Field
          component={Select}
          defaultInputValue={user.country.name}
          name="country"
          label="Country"
          options={countries}
          getOptionValue={(option) => option.code}
          getOptionLabel={(option) => option.name}
          placeholder="Select your country"
          customOption={SelectOptionWithFlag}
        />
        <Button size="large" color="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default ProfileForm;
