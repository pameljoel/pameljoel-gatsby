import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './additionalInfo.scss';

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
    const { show, title, description } = this.props;
    const { animate } = this.state;
    return (
      show ? (
        <div className={`skill-additional-info ${animate ? 'animate' : ''}`}>
          <div className="skill-additional-info-icon" >{title}</div>
          <div className="skill-additional-info-text">{description}</div>
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

