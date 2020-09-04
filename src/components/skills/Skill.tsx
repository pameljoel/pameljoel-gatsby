import React, { useState } from 'react';
import 'react-tippy/dist/tippy.css';
import { SkillType } from '../../types';
import Graph from './partials/Graph';
import SkillText from './partials/SkillText';

type Props = {
  name: string;
  percentage: number;
  startDate: StartDate;
  endDate?: EndDate;
  description: string;
  hint: string;
  color?: string;
  showAdditionalInfo: boolean;
  toggleAdditionalInfo: () => void;
};

const Skill: React.FC<Props> = ({
  percentage,
  color = '#E38627',
  hint,
  description,
  name,
  startDate,
  endDate,
}) => {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  const toggleAdditionalInfo = () => {
    setShowAdditionalInfo((prevState) => !prevState);
  };

  const cssClass = hint ? 'clickable' : '';

  return (
    <div className={`skill-graph ${cssClass}`} data-test="skill">
      <Graph percentage={percentage} color={color} />
      <SkillText
        name={name}
        startDate={startDate}
        endDate={endDate}
        description={description}
        hint={hint}
        showAdditionalInfo={showAdditionalInfo}
        toggleAdditionalInfo={toggleAdditionalInfo}
      />
    </div>
  );
};

export default Skill;
