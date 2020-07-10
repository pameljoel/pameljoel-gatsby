import React from 'react';
import Skill from './Skill';
import { SkillType, SkillsType, SkillsList } from '../../types';
import skillsJson from '../../../static/resources/skills.json';
import { filterSkills } from '../utils/skills';
import './skills.scss';
import { FadeIn } from '../utils/FadeIn';

type props = {
  list: SkillsList;
};

type renderSkillsProps = {
  skillsJson: SkillsType;
  list: SkillsList;
};

const renderSkills = (props: renderSkillsProps) => {
  const { skillsJson, list } = props;
  const skills = filterSkills(list, skillsJson);
  let delayNumber = 0.4;

  if (!skills) return null;

  return skills.map((skill: SkillType) => {
    const { name, description, percentage, hint, startDate, endDate } = skill;

    delayNumber = delayNumber + 0.05;

    return (
      <FadeIn small key={name} delay={delayNumber}>
        <Skill
          name={name}
          description={description}
          percentage={percentage}
          hint={hint}
          startDate={startDate}
          endDate={endDate}
        />
      </FadeIn>
    );
  });
};

export default function Skills(props: props) {
  const { list }: { list: SkillsList } = props;
  return (
    <div className="skill-container">{renderSkills({ skillsJson, list })}</div>
  );
}
