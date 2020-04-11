import React, { Component, Fragment } from 'react';
import Link from 'gatsby-link';

import { openCrisp } from '../crisp/Crisp';
import Branding from './Branding';
import Hamburger from './Hamburger';

import './mobileNavigation.scss';

export default class MobileNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState((prevState) => ({ sidebarOpen: !prevState.sidebarOpen }));
  }

  render() {
    const { sidebarOpen } = this.state;
    return (
      <Fragment>
        <div className={`mobile-navigation ${sidebarOpen ? 'open' : ''}`}>
          <Hamburger open={sidebarOpen} callback={this.toggleSidebar} />
          <ul className="mobile-navigation-links">
            <li onClick={this.toggleSidebar}>
              <Link to="/" activeClassName="active">
                <div className="nav-link">Home</div>
                <div className="active-bar" />
              </Link>
            </li>
            <li onClick={this.toggleSidebar}>
              <Link to="/daily" activeClassName="active">
                <div className="nav-link">Daily</div>
                <div className="active-bar" />
              </Link>
            </li>
            <li onClick={this.toggleSidebar}>
              <Link to="/curriculum" activeClassName="active">
                <div className="nav-link">CV</div>
                <div className="active-bar" />
              </Link>
            </li>
            <li onClick={this.toggleSidebar}>
              <Link to="/projects" activeClassName="active">
                <div className="nav-link">Projects</div>
                <div className="active-bar" />
              </Link>
            </li>
            <li
              onClick={() => {
                this.toggleSidebar();
                openCrisp();
              }}
            >
              <button className="nav-button">Contact me</button>
            </li>
          </ul>
          <Branding />
        </div>
        <div
          className={`overlay-layer ${sidebarOpen ? 'open' : ''}`}
          key="overlay-layer"
          onClick={this.toggleSidebar}
        />
      </Fragment>
    );
  }
}
