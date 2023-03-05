import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';

import ChatPage from '../pages/ChatPage/ChatPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import PartnersPage from '../pages/PartnersPage/PartnersPage';
import PrivacyPage from '../pages/PrivacyPage/PrivacyPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import PrivateRoutes from '../router/PrivateRoutes';
import RootLayout from '../layouts/RootLayout';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route path="*" element={<NotFoundPage />} />
      <Route index element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Route>
  )
);

export default router;
