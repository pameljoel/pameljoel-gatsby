import React, { Component } from 'react';
import * as Sentry from '@sentry/browser';
import PropTypes from 'prop-types';

import './error.css';

export default class Error extends Component {
  render() {
    return (
      <div className="card" >
        <div className="error-panel">
          <div className="error-code">404</div>
          <div className="error-message">
            {this.props.message}
          </div>
          <button className="big-button-primary" onClick={() => Sentry.showReportDialog()}>Report feedback</button>
        </div>
      </div>
    );
  }
}

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: null,
};
