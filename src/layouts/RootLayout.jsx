import React from 'react';
import { Outlet } from 'react-router';

import Navbar from '../components/Navbar/Navbar';

const RootLayout = () => (
  <div className="app">
    <Navbar />
    <main>
      <Outlet />
    </main>
  </div>
);

export default RootLayout;

