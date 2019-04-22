import React, { Component } from 'react';
import Link from 'gatsby-link';

import Branding from './Branding';
import { openCrisp } from '../crisp/Crisp';

import './desktopNavigation.scss';

export default class DesktopNavigation extends Component {
  render() {
    return (
      <div className="desktop-navigation">
        <ul className="main-navigation-branding">
          <li>
            <Branding />
          </li>
        </ul>
        <ul className="main-navigation-links">
          <li>
            <Link to="/">
              <div className="nav-link">Home</div>
              <div className="active-bar" />
            </Link>
          </li>
          <li>
            <Link to="/daily">
              <div className="nav-link">Daily</div>
              <div className="active-bar" />
            </Link>
          </li>
          <li>
            <Link to="/curriculum">
              <div className="nav-link">CV</div>
              <div className="active-bar" />
            </Link>
          </li>
          <li>
            <Link to="/projects">
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
  }
}