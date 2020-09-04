import SkillTitle from './SkillTitle';
import SkillDescription from './SkillDescription';
import AdditionalInfo from './AdditionalInfo';
import React from 'react';

type Props = {
  name: string;
  startDate: StartDate;
  endDate?: EndDate;
  description: string;
  hint?: string;
  showAdditionalInfo: boolean;
  toggleAdditionalInfo: () => void;
};

const SkillText: React.FC<Props> = ({
  name,
  startDate,
  endDate,
  description,
  hint,
  showAdditionalInfo,
  toggleAdditionalInfo,
}) => (
  <article className="skill__text" data-test="skill-text">
    <SkillTitle
      name={name}
      startDate={startDate}
      endDate={endDate}
      toggleAdditionalInfo={toggleAdditionalInfo}
    />
    <SkillDescription description={description} />
    <AdditionalInfo showAdditionalInfo={showAdditionalInfo} hint={hint} title={name} />
  </article>
);

export default SkillText;
