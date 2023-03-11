import React from 'react';
import ReactSelect from 'react-select';
import { ErrorMessage } from 'formik';

import { customStyles } from './customStyles';
import './Select.scss';

const Select = ({ field, form, options, customOption, ...props }) => {
  const getValue = () => {
    if (options) {
      return props.isMulti
        ? options.filter((option) => field.value.includes(option))
        : options.find((option) => option === field.value);
    }
  };

  const onChange = (option) => {
    form.setFieldValue(
      field.name,
      props.isMulti ? option.map((item) => item) : option
    );
  };

  return (
    <>
      <ReactSelect
        name={field.name}
        value={getValue()}
        onChange={onChange}
        onBlur={field.onBlur}
        styles={customStyles}
        options={options}
        placeholder={props.placeholder}
        components={{
          Option: customOption,
          ...props
        }}
        {...props}
      />
      <ErrorMessage component="div" className="error" name={field.name} />
    </>
  );
};

export default Select;
