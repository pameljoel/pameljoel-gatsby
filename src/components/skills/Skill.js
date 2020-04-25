import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PieChart from 'react-minimal-pie-chart';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

import AdditionalInfo from './AdditionalInfo';

export const getExperience = (startDate, endDate) => {
  const now = new Date().getFullYear();
  const end = endDate ? endDate : now;
  return end - startDate;
};

const skillLevel = (percentage) => {
  if (percentage >= 90) return 'Expert';
  if (percentage >= 75) return 'Proficient';
  if (percentage >= 50) return 'Competent';
  return 'Learning';
};

const Skill = (props) => {
  const {
    percentage,
    color,
    hint,
    description,
    name,
    startDate,
    endDate,
  } = props;

  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  const toggleAdditionalInfo = () => {
    setShowAdditionalInfo((prevState) => !prevState);
  };

  const hasAdditionalInfo = showAdditionalInfo && hint;
  const chartObject = [
    {
      value: percentage,
      color: color,
    },
  ];

  const graph = (
    <div className="skill-graph-image" data-test="skill-graph">
      <div className="skill-level-container">
        <div className="skill-level-label">Proficiency: </div>
        <div className="skill-level">{skillLevel(percentage)}</div>
      </div>
      <PieChart
        className="graph-item"
        data={chartObject}
        lineWidth={20}
        rounded
        totalValue={100}
        animate
        animationDuration={5000}
        animationEasing="ease-in-out"
      />
    </div>
  );

  const additionalInfo = hasAdditionalInfo && (
    <div data-test="skill-additional-info">
      <AdditionalInfo show={showAdditionalInfo} description={hint} />
    </div>
  );

  const experienceClass = () => {
    const experience = getExperience(startDate, endDate);
    const baseClass = 'skill__experience';
    if (experience < 2) return baseClass + '--beginner';
    if (experience < 5) return baseClass + '--intermediate';
    return baseClass + '--expert';
  };

  const experienceTooltip = () => {
    const base = `I have been working with <strong>${name}</strong>`;
    return endDate
      ? base + ` from ${startDate} to ${endDate}`
      : base + ` since ${startDate}`;
  };

  const skillExperience = startDate && (
    <div
      className={`skill__experience ${experienceClass()}`}
      data-test="skill-experience"
    >
      <Tooltip
        className="tag__tooltip"
        title={experienceTooltip()}
        position="top"
        trigger="mouseenter"
        data-test={`tooltip-${name}`}
        arrow={true}
      >
        {getExperience(startDate, endDate)} years{' '}
      </Tooltip>
    </div>
  );

  const skillTitle = name && (
    <header
      className="skill__title"
      onClick={toggleAdditionalInfo}
      data-test="skill-title"
    >
      <h1>{name}</h1>
      {skillExperience}
    </header>
  );

  const skillDescription = description && (
    <div className="skill__description" data-test="skill-description">
      {description}
    </div>
  );

  const skillText = (
    <article className="skill__text" data-test="skill-text">
      {skillTitle}
      {skillDescription}
      {additionalInfo}
    </article>
  );

  const cssClass = hint ? 'clickable' : '';

  return (
    <div className={`skill-graph ${cssClass}`} data-test="skill">
      {graph}
      {skillText}
    </div>
  );
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hint: PropTypes.string,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string,
};

Skill.defaultProps = {
  hint: '',
  color: '#E38627',
};

export default Skill;
