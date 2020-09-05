import React from 'react';
import PropTypes from 'prop-types';
import './hamburger.scss';

const Hamburger = ({ open, callback }) => {
  return (
    <div
      role="button"
      aria-label="open sidebar"
      tabIndex="0"
      className={`hamburger ${open ? 'open' : ''}`}
      onClick={callback}
      onKeyPress={callback}
    >
      <div className="hamburger-box">
        <div className="hamburger-inner" />
      </div>
    </div>
  );
};

export default Hamburger;

Hamburger.propTypes = {
  open: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
};
