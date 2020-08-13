import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './additionalInfo.scss';

const AdditionalInfo = (props) => {
  const [animate, setAnimate] = useState(false);

  const setAnimateTrue = () => {
    setAnimate(true);
  };

  useEffect(() => {
    setTimeout(setAnimateTrue, 200);
  }, [animate]);

  const { show, title, description } = props;
  return show ? (
    <div className={`skill-additional-info ${animate ? 'animate' : ''}`}>
      <div className="skill-additional-info-icon">{title}</div>
      <div className="skill-additional-info-text">{description}</div>
    </div>
  ) : null;
};

AdditionalInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};

AdditionalInfo.defaultProps = {
  title: 'How can I help you?',
};

export default AdditionalInfo;
