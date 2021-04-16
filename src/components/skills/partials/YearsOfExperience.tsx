import React from 'react';
import { Tooltip } from 'react-tippy';
import { generateExperienceClassName, formatExperienceTooltip } from '../utils';
import Experience from './Experience';

type Props = {
  startDate: number;
  endDate?: number;
  tooltipName: string;
};

const YearsOfExperience: React.FC<Props> = ({ startDate, endDate, tooltipName: name }) => {
  const experienceClass = generateExperienceClassName({
    startDate,
    endDate,
  });

  const title = formatExperienceTooltip({
    name,
    startDate,
    endDate,
  });

  return startDate ? (
    <div className={`skill__experience ${experienceClass}`} data-test="skill-experience">
      <Tooltip
        className="tag__tooltip"
        title={title}
        position="top"
        trigger="mouseenter"
        data-test={`tooltip-${name}`}
        arrow={true}
      >
        <Experience startDate={startDate} endDate={endDate} />
      </Tooltip>
    </div>
  ) : null;
};

export default YearsOfExperience;
