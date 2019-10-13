import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

import headerImage from '../images/logo.png';

export default function Header() {
  return (
    <nav className="header-bar">
      <div className="header-logo">
        <img src={headerImage} alt="header-img-logo" />
        <h1>VOD Application</h1>
      </div>
      <ul className="header-links">
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/history">History</NavLink>
        </li>
      </ul>
    </nav>
  );
}
