import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Fade from 'react-reveal/Fade';

export default class DialyItem extends Component {
  render() {
    const dailyItemStyle = {
      animationDelay: '1000ms'
    };
    return (
      <Fade
        bottom
      >
        <div className="daily-item" style={dailyItemStyle}>
          <div className="day">{this.props.day}</div>
          <img
            className="daily-image"
            src={this.props.imageSource}
            alt={this.props.description}
            onClick={() => this.props.callback(this.props.day)}
          />
        </div>
      </Fade>
    );
  }
}

DialyItem.propTypes = {
  day: Proptypes.number.isRequired,
  imageSource: Proptypes.string.isRequired,
  description: Proptypes.string,
  callback: Proptypes.func.isRequired,
};


DialyItem.defaultProps = {
  description: '',
};

