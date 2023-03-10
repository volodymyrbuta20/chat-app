import React from 'react';
import Select from 'react-select';
import Flag from 'react-world-flags';
import { Field, ErrorMessage } from 'formik';

import { countries } from '../../utils/countries';

import { customStyles } from './customStyles';
import './Select.scss';

const MySelect = ({ name, value, onChange, ...props }) => {
  const options = countries.map((country) => ({
    value: country.code,
    label: country.name
  }));

  const customOption = ({ data, innerProps }) => (
    <div {...innerProps} className="myoption">
      <Flag code={data.value} className="myoption__flag" />
      <span className="myoption__country">{data.label}</span>
    </div>
  );

  return (
    <>
      <Field
        name={name}
        as={Select}
        value={value}
        onChange={onChange}
        styles={customStyles}
        options={options}
        components={{ Option: customOption }}
        placeholder="Select your country"
        {...props}
      />
      <ErrorMessage component="div" className="error" name={name} />
    </>
  );
};

export default MySelect;
