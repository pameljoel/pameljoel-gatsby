import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Fade from 'react-reveal/Fade';

export default class DialyItem extends Component {
  render() {
    const dailyItemStyle = {
      animationDelay: '1000ms'
    };
    const { day, imageSource, description, callback } = this.props;
    return (
      <Fade
        bottom
      >
        <div className="daily-item" style={dailyItemStyle}>
          <div className="day">{day}</div>
          <img
            className="daily-image"
            src={imageSource}
            alt={description}
            onClick={() => callback(day)}
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

