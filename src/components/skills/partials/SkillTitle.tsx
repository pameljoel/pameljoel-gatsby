import React, { useState } from 'react';
import YearsOfExperience from './YearsOfExperience';

type SkillTitleProps = {
  name: string;
  startDate: number;
  endDate?: number;
  toggleAdditionalInfo: () => void;
};

const SkillTitle: React.FC<SkillTitleProps> = ({
  name,
  startDate,
  endDate,
  toggleAdditionalInfo,
}) => {
  return name ? (
    <header
      className="skill__title"
      onClick={toggleAdditionalInfo}
      data-test="skill-title"
    >
      <h1>{name}</h1>
      <YearsOfExperience
        startDate={startDate}
        endDate={endDate}
        tooltipName={name}
      />
    </header>
  ) : null;
};

export default SkillTitle;
