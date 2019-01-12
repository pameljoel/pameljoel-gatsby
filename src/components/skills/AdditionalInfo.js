import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './additionalInfo.css';

export default class AdditionalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
    };

    this.setAnimate = this.setAnimate.bind(this);
  }

  setAnimate() {
    this.setState({ animate: true });
  }

  componentDidMount() {
    setTimeout(this.setAnimate, 200);
  }
  render() {
    return (
      this.props.show ? (
        <div className={`skill-additional-info ${this.state.animate ? 'animate' : ''}`}>
          <div className="skill-additional-info-icon" >{this.props.title}</div>
          <div className="skill-additional-info-text">{this.props.description}</div>
        </div>
      ) : (null)
    );
  }
}

AdditionalInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
};

AdditionalInfo.defaultProps = {
  title: 'How can I help you?',
};

