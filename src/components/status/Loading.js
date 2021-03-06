import React from 'react';
import PropTypes from 'prop-types';

import Error from './Error';
import loading from './loading.gif';
import './loading.scss';

const Loading = ({ error, isLoading }) => {
  return (
    <div className="loading-panel">
      {isLoading ? (
        <img src={loading} alt="loading" />
      ) : (
        error && <Error message={error} />
      )}
    </div>
  );
};

export default Loading;

Loading.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

Loading.defaultProps = {
  error: 'Could not load the data from the server, please try again.',
  isLoading: false,
};
