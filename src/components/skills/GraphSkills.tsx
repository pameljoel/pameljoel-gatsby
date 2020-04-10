import React from 'react';
import { skills } from '../../types';
import GraphSkill from './GraphSkill';

import './graphSkills.scss';

type props = {
  skills: skills;
};

export default function GraphSkills(props: props) {
  const { skills }: { skills: skills } = props;
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
