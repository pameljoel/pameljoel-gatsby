import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './hamburger.css';

export default class Hamburger extends Component {
  render() {
    return (
      <div role="button" aria-label="open sidebar" tabIndex="0" className={`hamburger ${this.props.open ? 'open' : ''}`} onClick={this.props.callback} onKeyPress={this.props.callback}>
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
