import React from 'react';
import PropTypes from 'prop-types';

const Skill = (props) => {
  const { name, percentage } = props;

  const divStyle = {
    width: `${percentage}%`,
  };
  return (
    <div className="skill">
      <div className="skill-name">{name}</div>
      <div className="skill-percentage">
        <div className="skill-percentage-fill" style={divStyle} />
      </div>
    </div>
  );
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Skill;
