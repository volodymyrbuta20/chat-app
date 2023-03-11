import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './Button.scss';

const Button = ({ children, to, size, color, position, ...props }) => {
  const buttonClasses = classNames('button', {
    'button--small': size === 'small',
    'button--medium': size === 'medium',
    'button--large': size === 'large',
    'button--primary': color === 'primary',
    'button--dark': color === 'dark',
    'button--transparent': color === 'transparent',
    'button--absolute': position === 'absolute'
  });

  if (to) {
    return (
      <Link to={to} {...props} className={buttonClasses}>
        {children}
      </Link>
    );
  } else {
    return (
      <button {...props} className={buttonClasses}>
        {children}
      </button>
    );
  }
};

export default Button;
