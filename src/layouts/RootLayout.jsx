import React, { useState } from 'react';
import { Outlet } from 'react-router';

import Navbar from '../components/Navbar/Navbar';
import Modal from '../components/Modal/Modal';
import ProfileForm from '../components/ProfileForm/ProfileForm';

const RootLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div id="app" className="app">
      <Navbar handleOpenModal={handleOpenModal} />
      <main>
        <Outlet />
      </main>
      <Modal handleCloseModal={handleCloseModal} isOpen={isOpen}>
        <ProfileForm handleCloseModal={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default RootLayout;
