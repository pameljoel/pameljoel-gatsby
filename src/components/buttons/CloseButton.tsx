import React from 'react';

import './closeButton.scss';

type Props = {
  callback: () => void;
};

const CloseButton: React.FC<Props> = ({ callback }) => {
  return (
    <div className="close-button" onClick={callback}>
      ×
    </div>
  );
};

export default CloseButton;
