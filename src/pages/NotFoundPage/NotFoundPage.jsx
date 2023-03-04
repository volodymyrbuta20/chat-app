import React from 'react';
import { Link } from 'react-router-dom';

import img from '../../images/error.gif';
import './NotFoundPage.scss';

const NotFoundPage = () => (
  <div className="notfound">
    <div className="notfound__wrapper">
      <h2 className="notfound__title">This page doesn&apos;t exist</h2>
      <img className="notfound__img" src={img} alt="Error" />
      <Link to="/" className="notfound__btn">
        Go to home page
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
