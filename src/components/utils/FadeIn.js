import React, { useEffect, useRef, useState } from 'react';
import './FadeIn.scss';

export const FadeIn = (props) => {
  const [visible, setVisible] = useState(false);
  const fadeRef = useRef(null);
  const onChange = (entries) => {
    entries.forEach((entry) => {
      const { isIntersecting } = entry;
      isIntersecting && setVisible(true);
    });
  };

  useEffect(() => {
    if (!window.IntersectionObserver) return;
    const observer = new IntersectionObserver(onChange);
    observer.observe(fadeRef.current);
    return () => observer.unobserve(fadeRef.current);
  });

  const { children, small, delay } = props;
  const baseCssClass = small ? 'fade-small' : 'fade';
  const cssClass = visible
    ? `${baseCssClass}--visible`
    : `${baseCssClass}--hidden`;
  const inlineStyle = delay ? { transitionDelay: `${delay}s` } : {};

  return (
    <div
      className={`${baseCssClass} ${cssClass}`}
      ref={fadeRef}
      style={inlineStyle}
    >
      {children}
    </div>
  );
};
