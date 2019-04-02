import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Error from './Error';
import loading from './loading.gif';
import './loading.scss';

export default class Loading extends Component {
  render() {
    return (
      <div className="loading-panel">
        {this.props.isLoading ? <img src={loading} alt="loading" /> : (this.props.error && <Error message={this.props.error} />)}
      </div>
    );
  }
}

Loading.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

Loading.defaultProps = {
  error: 'Could not load the data from the server, please try again.',
  isLoading: false,
};
