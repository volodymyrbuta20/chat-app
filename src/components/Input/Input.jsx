import React from 'react';
import { Field, ErrorMessage } from 'formik';
import classNames from 'classnames';

import './Input.scss';

const Input = ({ name, placeholder, type, className, ...props }) => (
  <>
    <Field
      name={name}
      type={type}
      className={classNames('input', className)}
      placeholder={placeholder}
      {...props}
    />
    <ErrorMessage component="div" className="error" name={name} />
  </>
);

export default Input;
