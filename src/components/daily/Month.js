import React from 'react';
import { showMonthImages, showMonthName } from './utils';

const Month = (props) => {
  const { month, callback } = props;
  const { dailiesOfTheMonth, name, days } = month;
  const hasDaily = dailiesOfTheMonth && dailiesOfTheMonth.length > 0;
  const classToAdd = `month-container ${name}`;
  const id = `daily-${name}-${days}`;

  const MonthGrid = () => {
    return (
      hasDaily && (
        <>
          {showMonthName(month)}
          {showMonthImages(month, callback)}
        </>
      )
    );
  };

  return (
    <div className={classToAdd} key={id}>
      <MonthGrid />
    </div>
  );
};

export default Month;
