import React, { useState, useEffect } from 'react';

import './additionalInfo.scss';

type Props = {
  showAdditionalInfo: boolean;
  hint?: string;
  title: string;
};

const AdditionalInfo: React.FC<Props> = ({
  showAdditionalInfo,
  hint,
  title = 'How can I help you?',
}) => {
  const [animate, setAnimate] = useState(false);

  const setAnimateTrue = () => {
    setAnimate(true);
  };

  useEffect(() => {
    setTimeout(setAnimateTrue, 200);
  }, [animate]);

  return showAdditionalInfo && hint ? (
    <div data-test="skill-additional-info">
      <div className={`skill-additional-info ${animate ? 'animate' : ''}`}>
        <div className="skill-additional-info-icon">{title}</div>
        <div className="skill-additional-info-text">{hint}</div>
      </div>
    </div>
  ) : null;
};

export default AdditionalInfo;
