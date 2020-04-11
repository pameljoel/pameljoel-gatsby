import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/browser';
import Error from './Error';

export default class ErrorBoundary extends Component {
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);

    this.setState({ hasError: true });
    Sentry.withScope((scope) => {
      Object.keys(info).forEach((key) => {
        scope.setExtra(key, info[key]);
      });
      Sentry.captureException(error);
    });
  }

  render() {
    const { error, children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div className="loading-panel">
          <Error message={error} />
        </div>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  hasError: PropTypes.bool,
  error: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ErrorBoundary.defaultProps = {
  hasError: false,
  error: 'Could not load the data from the server, please try again.',
};
