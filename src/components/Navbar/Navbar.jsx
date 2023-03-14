import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import { AuthContext } from '../../context/AuthContext';
import Button from '../Button/Button';

import './Navbar.scss';

const Navbar = ({ handleOpenModal }) => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    if (isAuth) {
      setIsAuth(null);
      window.localStorage.removeItem('user');
      navigate('/login', { replace: true });
    }
  };

  const handleNavOpen = () => {
    setActive(true);
  };

  const handleNavClose = () => {
    setActive(false);
  };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <button
          className={classNames('burger', { active: active })}
          onClick={active ? handleNavClose : handleNavOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className="navbar__navigation">
          <ul className={classNames('navbar__list', { active: active })}>
            <li className="navbar__item">
              <NavLink
                to="/chat"
                className="navbar__link"
                onClick={handleNavClose}
              >
                Chat
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink to="/" className="navbar__link" onClick={handleNavClose}>
                About
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                to="/partners"
                className="navbar__link"
                onClick={handleNavClose}
              >
                Partners
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                to="/privacy"
                className="navbar__link"
                onClick={handleNavClose}
              >
                Privacy policy
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="navbar__login">
          {isAuth ? (
            <div className="btns">
              <Button size="small" color="dark" onClick={handleOpenModal}>
                Profile
              </Button>
              <Button size="small" color="dark" onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <Button to="/login" size="small" color="dark">
              Login
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
