import React, { useState } from 'react';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

import MyModal from '../components/MyModal/MyModal';
import Navbar from '../components/Navbar/Navbar';

import 'react-toastify/dist/ReactToastify.css';

const RootLayout = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div id="app" className="app">
      <Navbar handleOpenModal={handleOpenModal} />
      <main>
        <Outlet />
      </main>
      <MyModal
        handleCloseModal={handleCloseModal}
        showModal={showModal}
        style={{ background: '#000000' }}
      />
      <ToastContainer />
    </div>
  );
};

export default RootLayout;
