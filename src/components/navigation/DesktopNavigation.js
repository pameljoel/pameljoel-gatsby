import React from 'react';
import Link from 'gatsby-link';

import Branding from './Branding';
import { openCrisp } from '../crisp/Crisp';

import './desktopNavigation.scss';

const DesktopNavigation = () => {
  return (
    <div className="desktop-navigation">
      <ul className="main-navigation-branding">
        <li>
          <Branding />
        </li>
      </ul>
      <ul className="main-navigation-links">
        <li>
          <Link to="/" activeClassName="active">
            <div className="nav-link">Home</div>
            <div className="active-bar" />
          </Link>
        </li>
        <li>
          <Link to="/daily" activeClassName="active">
            <div className="nav-link">Daily</div>
            <div className="active-bar" />
          </Link>
        </li>
        <li>
          <Link to="/curriculum" activeClassName="active">
            <div className="nav-link">CV</div>
            <div className="active-bar" />
          </Link>
        </li>
        <li>
          <Link to="/projects" activeClassName="active">
            <div className="nav-link">Projects</div>
            <div className="active-bar" />
          </Link>
        </li>
        <li>
          <button className="nav-button" onClick={openCrisp}>
            Contact me
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNavigation;
