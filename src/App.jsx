import React, { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactModal from 'react-modal';

import useLocalStorage from './hooks/useLocalStorage';
import { AuthContext } from './context/AuthContext';
import router from './router/RouterProvider';

const App = () => {
  ReactModal.setAppElement('#root');

  const [isAuth, setIsAuth] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { value } = useLocalStorage('user');

  useEffect(() => {
    if (value) {
      setIsAuth(value);
    }
    setIsLoading(false);
  }, [value]);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
};

export default App;
