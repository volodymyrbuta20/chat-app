import React, { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { toast } from 'react-toastify';

import useLocalStorage from '../../hooks/useLocalStorage';
import { AuthContext } from '../../context/AuthContext';
import { userValidation } from '../LoginForm/LoginFormSchema';
import { countries } from '../../utils/countries';
import SelectOptionWithFlag from '../SelectOptionWithFlag/SelectOptionWithFlag';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Select from '../Select/Select';

import './ProfileForm.scss';

const ProfileForm = ({ handleCloseModal }) => {
  const { value, setValue } = useLocalStorage('user');
  const { setIsAuth } = useContext(AuthContext);

  const handleSubmit = ({ userName, country }) => {
    const formData = { ...value, userName, country };
    setValue(formData);
    setIsAuth(formData);
    handleCloseModal();
    toast.success('Data changed succsessfully!');
  };

  return (
    <Formik
      initialValues={{ userName: value.userName, country: value.country }}
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
          defaultInputValue={value.country.name}
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
