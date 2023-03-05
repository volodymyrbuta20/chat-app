import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router';

import { AuthContext } from '../context/AuthContext';
import Spinner from '../components/Spinner/Spinner';

const PrivateRoutes = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Spinner />;
  }

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
