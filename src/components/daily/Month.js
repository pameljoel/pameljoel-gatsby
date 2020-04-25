import React from 'react';
import { showMonthImages, showMonthName, showNoResults } from './utils';

const Month = (props) => {
  const { month, callback } = props;
  const { dailiesOfTheMonth, name, days } = month;
  const hasDaily = dailiesOfTheMonth && dailiesOfTheMonth.length > 0;
  const classToAdd = `month-container ${name}`;
  const id = `daily-${name}-${days}`;

  return (
    <div className={classToAdd} key={id}>
      {showMonthName(month)}
      {hasDaily ? showMonthImages(month, callback) : showNoResults}
    </div>
  );
};

export default Month;
