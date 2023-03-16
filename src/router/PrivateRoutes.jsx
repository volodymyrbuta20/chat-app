import React from 'react';
import { Outlet, Navigate } from 'react-router';

import useLocalStorage from '../hooks/useLocalStorage';

const PrivateRoutes = () => {
  const { value } = useLocalStorage('user');

  return value ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
