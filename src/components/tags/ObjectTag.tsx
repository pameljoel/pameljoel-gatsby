import React from 'react';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { TagObj, TooltipType } from '../../types';

import './tag.scss';

type props = TagObj;

const showToolTip = (tooltip: TooltipType) => {
  const { description, name } = tooltip;
  return (
    <Tooltip
      className="tag__tooltip"
      title={description}
      position="top"
      trigger="mouseenter"
      data-test={`tooltip-${name}`}
    >
      <span className={`tag-label ${name}`}>{name}</span>
    </Tooltip>
  );
};

export default function ObjectTag(props: props) {
  const { name, topSkill, newSkill, handleClick } = props;

  const hasTooltip = topSkill || newSkill;
  const topSkillTitle = `<strong>${name}</strong> <small>is one of my strong skills</small>`;
  const newSkillTitle = `<small>I learned</small> <strong>${name}</strong> <small>during this work experience</small>`;
  const tooltips = {
    TOP: {
      name: 'top',
      description: topSkillTitle,
    },
    NEW: {
      name: 'new',
      description: newSkillTitle,
    },
  };

  const tooltipText = topSkill ? tooltips.TOP : tooltips.NEW;

  return (
    <div className="tag" onClick={() => handleClick && handleClick(name)}>
      <span className="tag__name">{name}</span>
      {hasTooltip && showToolTip(tooltipText)}
    </div>
  );
}
