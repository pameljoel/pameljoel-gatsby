import React, { Fragment, useState } from 'react';
import Link from 'gatsby-link';

import { openCrisp } from '../crisp/Crisp';
import Branding from './Branding';
import Hamburger from './Hamburger';

import './mobileNavigation.scss';

const MobileNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const ListItem = (props) => {
    const { text, to } = props;
    return (
      <li onClick={toggleMenu}>
        <Link to={to} activeClassName="active">
          <div className="nav-link">{text}</div>
          <div className="active-bar" />
        </Link>
      </li>
    );
  };

  return (
    <Fragment>
      <div className={`mobile-navigation ${menuOpen ? 'open' : ''}`}>
        <Hamburger open={menuOpen} callback={toggleMenu} />
        <ul className="mobile-navigation-links">
          <ListItem to="/" text="Home" />
          <ListItem to="/daily" text="Daily" />
          <ListItem to="/curriculum" text="Curriculum Vitae" />
          <ListItem to="/projects" text="Projects" />
          <li
            onClick={() => {
              toggleMenu();
              openCrisp();
            }}
          >
            <button className="nav-button">Contact me</button>
          </li>
        </ul>
        <Branding />
      </div>
      <div
        className={`overlay-layer ${menuOpen ? 'open' : ''}`}
        key="overlay-layer"
        onClick={toggleMenu}
      />
    </Fragment>
  );
};

export default MobileNavigation;
