import React from 'react';
import Proptypes from 'prop-types';

const Image = (props) => {
  const dailyItemStyle = {
    animationDelay: '1000ms',
  };
  const { day, imageSource, description, callback, delay } = props;
  return (
    <div className="daily-item" style={dailyItemStyle}>
      <div className="day">{day}</div>
      <img
        className="daily-image"
        src={imageSource}
        alt={description}
        onClick={() => callback(day)}
      />
    </div>
  );
};

Image.propTypes = {
  day: Proptypes.number.isRequired,
  imageSource: Proptypes.string.isRequired,
  description: Proptypes.string,
  callback: Proptypes.func.isRequired,
};

Image.defaultProps = {
  description: '',
};

export default Image;
