import React from 'react';
import Skill from './Skill';
import { skill, skills, skillsList } from '../../types';
import skillsJson from '../../../static/resources/skills.json';
import { filterSkills } from '../utils/skills';
import './skills.scss';
import { FadeIn } from '../utils/FadeIn';

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
  let delayNumber = 0.4;

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
      })
    : null;
};

export default function Skills(props: props) {
  const { list }: { list: skillsList } = props;
  return (
    <div className="skill-container">{renderSkills({ skillsJson, list })}</div>
  );
}
