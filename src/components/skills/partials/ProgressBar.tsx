import React from 'react';

type Props = {
  delay: any;
  percentage: any;
};

export const ProgressBar = (props: Props) => {
  const { delay, percentage } = props;
  return (
    <div className="progress" role="progress">
      <div
        className="meter"
        style={{
          width: `${percentage}%`,
          animationDelay: `${delay}s`,
        }}
      />
    </div>
  );
};
