import React from 'react';
import { skill, skills, skillsList } from '../../types';
import Skill from './Skill';
import skillsJson from '../../../static/resources/skills.json';
import { filterSkills } from '../utils/skills';
import './skills.scss';

type props = {
  list: skillsList;
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
          <Skill
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

export default function Skills(props: props) {
  const { list }: { list: skillsList } = props;
  return (
    <div className="skill-graph-container">
      {/*
      // @ts-ignore */}
      <RenderSkills skillsJson={skillsJson} stringArray={list} />
    </div>
  );
}
