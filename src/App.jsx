import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactModal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';

import useLocalStorage from './hooks/useLocalStorage';
import { setUser } from './store/userSlice';
import router from './router/RouterProvider';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  ReactModal.setAppElement('#root');

  const { value } = useLocalStorage('user');
  const dispatch = useDispatch();

  useEffect(() => {
    if (value) {
      dispatch(setUser(value));
    }
  }, [value]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </>
  );
};

export default App;
