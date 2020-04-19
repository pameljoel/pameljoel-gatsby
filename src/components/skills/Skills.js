import React from 'react';
import PropTypes from 'prop-types';
import Skill from './skill';
import InlineSkill from './InlineSkill';
import './skills.scss';

import './../../themes/import-red.scss';

const RenderDefaultSkill = (skills) => {
  return skills.map((skill, i) => {
    return (
      <Skill
        name={skill.name}
        percentage={skill.percentage}
        key={'skill-default-' + i}
      />
    );
  });
};

const RenderInlineSkill = (skills) => {
  return skills.map((skill, i) => {
    return (
      <InlineSkill
        name={skill.name}
        percentage={skill.percentage}
        key={'skill-inline-' + i}
      />
    );
  });
};

const RenderSkillWithGraph = (skills) => {
  return skills.map((skill, i) => {
    return (
      <Skill
        name={skill.name}
        percentage={skill.percentage}
        key={'skill-graph-' + i}
      />
    );
  });
};

const Skills = () => {
  const { data, type } = this.props.data;

  return (
    <div className="skills">
      {type === 'default' && <RenderDefaultSkill skills={data} />}
      {type === 'inline' && <RenderInlineSkill skills={data} />}
      {type === 'graph' && <RenderSkillWithGraph skills={data} />}
    </div>
  );
};

Skills.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        percentage: PropTypes.string,
      })
    ),
    type: PropTypes.string,
  }),
};

export default Skills;
