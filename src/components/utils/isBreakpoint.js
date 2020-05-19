import { useEffect, useState } from 'react';
import { breakpoints } from './breakpoints';

const defaultBreakpoint = breakpoints.sm;

const isLessThanBreakpoint = (breakpoint) => {
  return window.innerWidth < breakpoint;
};

const isBreakpoint = (breakpoint = defaultBreakpoint) => {
  const [isMobile, setIsMobile] = useState(true);

  const check = () => {
    const result = isLessThanBreakpoint(breakpoint);
    setIsMobile(result);
  };

  useEffect(() => {
    check();
    window.addEventListener('resize', check, { passive: true });

    return () => {
      window.removeEventListener('resize', check);
    };
  });

  return isMobile;
};

export default isBreakpoint;
