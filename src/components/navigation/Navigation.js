import React, { Fragment, useEffect } from 'react';
import { enableCrisp } from '../crisp/Crisp';
import isBreakpoint from '../utils/isBreakpoint';

import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';

import './navigation.scss';

const Navigation = () => {
  useEffect(() => {
    enableCrisp();
  });

  const HandleNavigation = () => {
    return isBreakpoint() ? <MobileNavigation /> : <DesktopNavigation />;
  };

  return (
    <Fragment>
      <nav className="main-navigation">{HandleNavigation()}</nav>
    </Fragment>
  );
};

export default Navigation;
