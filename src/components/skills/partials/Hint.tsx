import React, { useState, useEffect } from 'react';

import './additionalInfo.scss';

type ShowHintProps = {
  showAdditionalInfo: boolean;
  hint: string;
  title: string;
};

type Props = {
  showAdditionalInfo: boolean;
  title: string;
  description: string;
};

export const ShowHint: React.FC<ShowHintProps> = ({
  showAdditionalInfo,
  hint,
  title,
}) => {
  return showAdditionalInfo && hint ? (
    <div data-test="skill-additional-info">
      <Hint
        showAdditionalInfo={showAdditionalInfo}
        title={title}
        description={hint}
      />
    </div>
  ) : null;
};

const Hint: React.FC<Props> = ({
  showAdditionalInfo,
  title = 'How can I help you?',
  description,
}) => {
  const [animate, setAnimate] = useState(false);

  const setAnimateTrue = () => {
    setAnimate(true);
  };

  useEffect(() => {
    setTimeout(setAnimateTrue, 200);
  }, [animate]);

  return showAdditionalInfo ? (
    <div className={`skill-additional-info ${animate ? 'animate' : ''}`}>
      <div className="skill-additional-info-icon">{title}</div>
      <div className="skill-additional-info-text">{description}</div>
    </div>
  ) : null;
};

export default Hint;