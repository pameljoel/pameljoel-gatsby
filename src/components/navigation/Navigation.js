import React, { Fragment, useEffect, useState } from 'react';
import { enableCrisp } from '../crisp/Crisp';

import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';

import './navigation.scss';

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(true);

  const checkIsMobile = () => {
    const mobileBreakPoint = 768;
    const bool = window.innerWidth < mobileBreakPoint;

    setIsMobile(bool);
  };

  useEffect(() => {
    checkIsMobile();
    enableCrisp();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  });

  const HandleNavigation = () => {
    return isMobile ? <MobileNavigation /> : <DesktopNavigation />;
  };

  return (
    <Fragment>
      <nav className="main-navigation">{HandleNavigation()}</nav>
    </Fragment>
  );
};

export default Navigation;
