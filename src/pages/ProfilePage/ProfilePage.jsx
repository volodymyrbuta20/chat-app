import React from 'react';

import ProfileForm from '../../components/ProfileForm/ProfileForm';

import '../LoginPage/LoginPage.scss';

const ProfilePage = () => (
  <div className="login">
    <div className="login__wrapper">
      <h2 className="title">Change name</h2>
      <ProfileForm />
    </div>
  </div>
);

export default ProfilePage;
