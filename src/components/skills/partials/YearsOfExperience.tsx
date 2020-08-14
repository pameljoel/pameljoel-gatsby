import React from 'react';
import { Tooltip } from 'react-tippy';
import { EXPERIENCE_YEARS, getExperience } from '../utils';

type Props = {
  startDate: number;
  endDate?: number;
  tooltipName: string;
};

type ExperienceTooltip = {
  startDate: number;
  endDate?: number;
};

const generateExperienceClass = (years: number) => {
  const baseClass = 'skill__experience--';
  if (years > 4) return `${baseClass}${EXPERIENCE_YEARS[4]}`;
  if (years < 1) return `${baseClass}${EXPERIENCE_YEARS[1]}`;
  return `${baseClass}${EXPERIENCE_YEARS[years]}`;
};

const experienceClass = ({ startDate, endDate }: ExperienceTooltip) => {
  if (!startDate || !endDate) return '';
  const years = getExperience(startDate, endDate);
  return generateExperienceClass(years);
};

const experienceTooltip = ({ startDate, endDate }: ExperienceTooltip) => {
  const base = `I have been working with <strong>${name}</strong>`;
  return endDate
    ? base + ` from ${startDate} to ${endDate}`
    : base + ` since ${startDate}`;
};

const YearsOfExperience: React.FC<Props> = ({
  startDate,
  endDate,
  tooltipName,
}) => {
  return startDate ? (
    <div
      className={`skill__experience ${experienceClass({ startDate, endDate })}`}
      data-test="skill-experience"
    >
      <Tooltip
        className="tag__tooltip"
        title={experienceTooltip({ startDate, endDate })}
        position="top"
        trigger="mouseenter"
        data-test={`tooltip-${tooltipName}`}
        arrow={true}
      >
        {getExperience(startDate, endDate)} years{' '}
      </Tooltip>
    </div>
  ) : null;
};

export default YearsOfExperience;
