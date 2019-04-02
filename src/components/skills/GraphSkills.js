import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GraphSkill from './GraphSkill';

import './graphSkills.scss';

export default class GraphSkills extends Component {
  render() {
    return (
      <div className="skill-graph-container">
        {this.props.data.map(skill => (
            <GraphSkill
              name={skill.name}
              description={skill.description}
              percentage={skill.percentage}
              pro={skill.pro}
              key={skill.name}
            />
          ))}
      </div>
    );
  }
}

GraphSkills.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    percentage: PropTypes.number,
    pro: PropTypes.string,
  })).isRequired,
};
