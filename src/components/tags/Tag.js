import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

import './tag.scss';

const showToolTip = ({ description, name }) => {
  return (
    <Tooltip
      className="tag__tooltip"
      title={description}
      position="top"
      trigger="mouseenter"
    >
      <span className={`tag-label ${name}`}>{name}</span>
    </Tooltip>
  );
};

export default function Tag(props) {
  const { name, top, new: newSkill, handleClick } = props;

  const hasTooltip = top || newSkill;
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

  const tooltipText = top ? tooltips.TOP : tooltips.NEW;

  return (
    <div className="tag" onClick={() => handleClick(name)}>
      <span className="tag__name">{name}</span>
      {hasTooltip && showToolTip(tooltipText)}
    </div>
  );
}

Tag.propTypes = {
  name: PropTypes.string,
  top: PropTypes.bool,
  new: PropTypes.bool,
  handleClick: PropTypes.func,
};

Tag.defaultProps = {
  name: null,
  top: null,
  new: null,
  handleClick() {
    return false;
  },
};
