import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PieChart from 'react-minimal-pie-chart';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { breakpoints } from '../utils/breakpoints';
import AdditionalInfo from './partials/AdditionalInfo';
import isBreakpoint from '../utils/isBreakpoint';
import { SkillType } from '../../types';
import { ProgressBar } from './partials/ProgressBar';
import {
  EXPERIENCE_YEARS,
  getExperience,
  randomDelay,
  skillLevel,
} from './utils';

type GraphProps = { percentage: number; chartObject: any[] };

const ShowGraph = ({ percentage, chartObject }: GraphProps) => {
  return isBreakpoint(breakpoints.xs) ? (
    <ProgressBar percentage={percentage} delay={randomDelay()} />
  ) : (
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
  );
};

const Skill = (props: SkillType) => {
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
      <ShowGraph percentage={percentage} chartObject={chartObject} />
    </div>
  );

  const additionalInfo = showAdditionalInfo && hint && (
    <div data-test="skill-additional-info">
      <AdditionalInfo show={showAdditionalInfo} description={hint} />
    </div>
  );

  const generateExperienceClass = (years: number) => {
    const baseClass = 'skill__experience--';
    if (years > 4) return `${baseClass}${EXPERIENCE_YEARS[4]}`;
    if (years < 1) return `${baseClass}${EXPERIENCE_YEARS[1]}`;
    return `${baseClass}${EXPERIENCE_YEARS[years]}`;
  };

  const addExperienceClass = () => {
    if (!startDate || !endDate) return '';
    const years = getExperience(startDate, endDate);
    return generateExperienceClass(years);
  };

  const experienceTooltip = () => {
    const base = `I have been working with <strong>${name}</strong>`;
    return endDate
      ? base + ` from ${startDate} to ${endDate}`
      : base + ` since ${startDate}`;
  };

  const skillExperience = startDate && endDate && (
    <div
      className={`skill__experience ${addExperienceClass()}`}
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

Skill.defaeultProps = {
  hint: '',
  color: '#E38627',
};

export default Skill;
