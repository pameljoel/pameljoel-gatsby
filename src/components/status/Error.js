import React from 'react';
import * as Sentry from '@sentry/browser';
import PropTypes from 'prop-types';

import './error.scss';

const Error = ({ message }) => {
  return (
    <div className="card">
      <div className="error-panel">
        <div className="error-code">404</div>
        <div className="error-message">{message}</div>
        <button
          className="big-button-primary"
          onClick={() => Sentry.showReportDialog()}
        >
          Report feedback
        </button>
      </div>
    </div>
  );
};

export default Error;

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: null,
};
