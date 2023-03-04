import React from 'react';

import android from '../../images/logo-android.svg';
import airbnb from '../../images/logo-airbnb.svg';
import basecamp from '../../images/logo-basecamp.svg';

import './PartnersPage.scss';

const PartnersPage = () => (
  <div className="partners">
    <div className="partners__wrapper">
      <h2 className="partners__title">Partners</h2>
      <p className="partners__subtitle">
        Most calendars are designed for teams. Slate is designed for freelancers
      </p>
      <div className="partners__blocks">
        <div className="partners__item">
          <p className="partners__name">Client name</p>
          <div className="partners__img">
            <img src={android} alt="apiary logo" />
          </div>
          <p className="partners__descr">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year.
          </p>
        </div>
        <div className="partners__item">
          <p className="partners__name">Client name</p>
          <div className="partners__img">
            <img src={airbnb} alt="android logo" />
          </div>
          <p className="partners__descr">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year.
          </p>
        </div>
        <div className="partners__item">
          <p className="partners__name">Client name</p>
          <div className="partners__img">
            <img src={basecamp} alt="basecamp logo" />
          </div>
          <p className="partners__descr">
            Slate helps you see how many more days you need to work to reach
            your financial goal for the month and year.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default PartnersPage;
