import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

import './Navbar.scss';

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    if (isAuth) {
      setIsAuth(null);
      window.localStorage.removeItem('user');
      navigate('/login', { replace: true });
    }
  };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <nav className="navbar__navigation">
          <ul className="navbar__list">
            <li className="navbar__item">
              <NavLink to="/chat" className="navbar__link">
                Chat
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink to="/" className="navbar__link">
                About
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink to="/partners" className="navbar__link">
                Partners
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink to="/privacy" className="navbar__link">
                Privacy policy
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="navbar__login">
          {isAuth ? (
            <div className="btns">
              <Link to="/profile" type="button" className="navbar__btn">
                Profile
              </Link>
              <button type="button" className="navbar__btn" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" type="button" className="navbar__btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
