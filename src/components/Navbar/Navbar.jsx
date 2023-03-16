import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { removeUser } from '../../store/userSlice';
import { userSelector } from '../../store/selectors';
import Button from '../Button/Button';

import './Navbar.scss';

const Navbar = ({ handleOpenModal }) => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const logout = () => {
    if (user) {
      dispatch(removeUser());
      window.localStorage.removeItem('user');
      navigate('/login', { replace: true });
    }
  };

  useEffect(() => {
    if (mobileMenuIsOpen) {
      document.body.classList.add('scroll-lock');
    } else {
      document.body.classList.remove('scroll-lock');
    }
  }, [mobileMenuIsOpen]);

  return (
    <div className="navbar">
      <div className="navbar__container">
        <button
          className={classNames('burger', { active: mobileMenuIsOpen })}
          onClick={
            mobileMenuIsOpen
              ? () => setMobileMenuIsOpen(false)
              : () => setMobileMenuIsOpen(true)
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className="navbar__navigation">
          <ul
            className={classNames('navbar__list', { active: mobileMenuIsOpen })}
          >
            <li className="navbar__item">
              <NavLink
                to="/chat"
                className="navbar__link"
                onClick={() => setMobileMenuIsOpen(false)}
              >
                Chat
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                to="/"
                className="navbar__link"
                onClick={() => setMobileMenuIsOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                to="/partners"
                className="navbar__link"
                onClick={() => setMobileMenuIsOpen(false)}
              >
                Partners
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                to="/privacy"
                className="navbar__link"
                onClick={() => setMobileMenuIsOpen(false)}
              >
                Privacy policy
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="navbar__login">
          {user ? (
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
