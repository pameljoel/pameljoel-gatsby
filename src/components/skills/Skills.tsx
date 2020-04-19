import React from 'react';
import Skill from './Skill';
import { skill, skills, skillsList } from '../../types';
import skillsJson from '../../../static/resources/skills.json';
import { filterSkills } from '../utils/skills';
import './skills.scss';

type props = {
  list: skillsList;
};

type renderSkillsProps = {
  skillsJson: skills;
  list: skillsList;
};

const renderSkills = (props: renderSkillsProps) => {
  const { skillsJson, list } = props;
  const skills = filterSkills(list, skillsJson);

  return skills
    ? skills.map((skill: skill) => {
        const {
          name,
          description,
          percentage,
          hint,
          startDate,
          endDate,
        } = skill;

        return (
          <Skill
            name={name}
            description={description}
            percentage={percentage}
            hint={hint}
            key={name}
            startDate={startDate}
            endDate={endDate}
          />
        );
      })
    : null;
};

export default function Skills(props: props) {
  const { list }: { list: skillsList } = props;
  return (
    <div className="skill-container">{renderSkills({ skillsJson, list })}</div>
  );
}
