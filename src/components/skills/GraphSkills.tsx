import React from 'react';
import { skill, skills, skillsList } from '../../types';
import GraphSkill from './GraphSkill';
import skillsJson from '../../../static/resources/skills.json';
import { filterSkills } from '../utils/skills';
import './graphSkills.scss';

type props = {
  skills: skillsList;
};

type renderSkillsProps = {
  skillsJson: skills;
  stringArray: skillsList;
};

const RenderSkills = (props: renderSkillsProps) => {
  const { skillsJson, stringArray } = props;
  const skills = filterSkills(stringArray, skillsJson);

  return skills
    ? skills.map((skill: skill) => {
        const { name, description, percentage, hint } = skill;
        return (
          <GraphSkill
            name={name}
            description={description}
            percentage={percentage}
            hint={hint}
            key={name}
          />
        );
      })
    : null;
};

export default function GraphSkills(props: props) {
  const { skills }: { skills: skillsList } = props;
  return (
    <div className="skill-graph-container">
      {/*
      // @ts-ignore */}
      <RenderSkills skillsJson={skillsJson} stringArray={skills} />
    </div>
  );
}
