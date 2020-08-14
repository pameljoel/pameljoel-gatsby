import React from 'react';

type Props = {
  description?: string;
};

const SkillDescription: React.FC<Props> = ({ description }) => {
  return description ? (
    <div className="skill__description" data-test="skill-description">
      {description}
    </div>
  ) : null;
};

export default SkillDescription;
