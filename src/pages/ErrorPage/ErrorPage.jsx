import React from 'react';
import { useRouteError } from 'react-router';
import { Link } from 'react-router-dom';

import img from '../../images/error.gif';
import '../NotFoundPage/NotFoundPage.scss';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="notfound">
      <div className="notfound__wrapper">
        <h2 className="notfound__title">{error.status}</h2>
        <p className="notfound__subtitle">
          {error.statusText || 'Something went wrong'}
        </p>
        <img className="notfound__img" src={img} alt="Error" />
        <Link to="/" className="notfound__btn">
          Go to home page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
