import React from 'react';
import DailyItem from '../DailyItem';
import { showNoResults } from './day';

const basePath = '/images/daily/works/';

export const showMonthName = (month) => {
  const { name } = month;
  const nameLetter = name.substring(0, 1);
  return (
    <div className="daily-item daily-item-month">
      <div className="daily-month-name">{name}</div>
      <div className="month-initial">{nameLetter}</div>
      <img
        className="daily-image"
        src={`${basePath}blank.jpg`}
        alt="more images coming soon"
      />
    </div>
  );
};

export const showMonthImages = (month, callback) => {
  return month.dailiesOfTheMonth.map((daily) => {
    const { description, day, format } = daily;
    const imgSrc = `${basePath}${day}.${format}`;
    const id = `daily-${month.name}-${day}-${format}`;
    return (
      <DailyItem
        description={description}
        day={day}
        format={format}
        imageSource={imgSrc}
        key={id}
        callback={callback}
      />
    );
  });
};

export const showResults = (month, callback) => {
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

export const setDailyInMonth = (dailies = [], month = {}) => {
  const array = [];

  dailies.map((daily) => {
    const { day } = daily;
    const { start, days } = month;
    const isDayInRange = day > start && day <= start + days;

    isDayInRange && array.push(daily);
  });

  return array;
};
