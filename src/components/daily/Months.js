import Month from './Month';
import React from 'react';

const Months = (props) => {
  const { months = [], callback } = props;
  return (
    <div className="daily-container">
      {months.map((month) => (
        <Month key={month.name} month={month} callback={callback} />
      ))}
    </div>
  );
};

export default Months;
