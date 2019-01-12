import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Skill extends Component {
  render() {
    const { name } = this.props;
    const { percentage } = this.props;

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
  }
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
