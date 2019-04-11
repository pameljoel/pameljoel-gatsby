import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './hamburger.scss';

export default class Hamburger extends Component {
  render() {
    const { open, callback } = this.props;
    return (
      <div role="button" aria-label="open sidebar" tabIndex="0" className={`hamburger ${open ? 'open' : ''}`}
        onClick={callback}
        onKeyPress={callback}>
        <div className="hamburger-box">
          <div className="hamburger-inner" />
        </div>
      </div>
    );
  }
}

Hamburger.propTypes = {
  open: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
};
