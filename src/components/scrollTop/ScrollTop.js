import React, { useEffect, useState } from 'react';

import { animateScroll } from 'react-scroll';

import ArrowUp from './arrow-up.svg';
import './scrollTop.scss';

const ScrollTop = () => {
  const [isTop, setIsTop] = useState(true);

  const goToTop = () => {
    animateScroll.scrollTo(0, 0);
  };

  const handleAboveTheFold = () => {
    const viewportHeight = window.outerHeight;
    const isAboveTheFold = window.scrollY < viewportHeight / 2;

    if (isAboveTheFold !== isTop) {
      setIsTop(isAboveTheFold);
    }
  };

  const addEvent = () =>
    document.addEventListener('scroll', handleAboveTheFold, { passive: true });
  const removeEvent = () =>
    document.removeEventListener('scroll', handleAboveTheFold, true);

  useEffect(() => {
    addEvent();

    return removeEvent();
  });

  return (
    <div
      className={`scroll-to-top ${isTop ? 'not-visible' : 'visible'}`}
      onClick={goToTop}
    >
      <img src={ArrowUp} alt="arrow up" />
    </div>
  );
};

export default ScrollTop;
