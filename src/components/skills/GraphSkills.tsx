import React, { Component } from 'react';
import { skills } from '../../types/index';
import GraphSkill from './GraphSkill';

import './graphSkills.scss';

export default class GraphSkills extends Component {
  render() {
    const { skills }: { skills: skills } = this.props;
    return (
      <div className="skill-graph-container">
        {skills.map((skill) => {
          const { name, description, percentage, pro } = skill;
          return (
            <GraphSkill
              name={name}
              description={description}
              percentage={percentage}
              pro={pro}
              key={name}
            />
          );
        })}
      </div>
    );
  }
}
