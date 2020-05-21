import React from 'react';
import Image from './Image';

const basePath = '/images/daily/works/';

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

export const addImagesToMonths = (months, dailies) => {
  if (!dailies || !months) return;

  months.map((month) => {
    month.dailiesOfTheMonth = setDailyInMonth(dailies, month);
  });

  return months;
};

export const showMonthName = (month) => {
  const { name } = month;
  const nameLetter = name.substring(0, 1);
  return (
    <div className="daily-item daily-item-month">
      <div className="daily-month-name">{name}</div>
      <div className="month-initial">{nameLetter}</div>
    </div>
  );
};

export const showMonthImages = (month, callback) => {
  const baseDelay = 0.1;
  let delay = baseDelay;
  return month.dailiesOfTheMonth.map((daily) => {
    const { description, day, format } = daily;
    const imgSrc = `${basePath}${day}.${format}`;
    const id = `daily-${month.name}-${day}-${format}`;
    delay = delay + 0.01;
    return (
      <Image
        description={description}
        day={day}
        format={format}
        imageSource={imgSrc}
        key={id}
        callback={callback}
        delay={delay}
      />
    );
  });
};

export const createLightBoxUrl = (day, dailies) => {
  const basePath = '/images/daily/works/';
  const { format } = dailies[day > 0 ? day - 1 : day];

  let url = null;

  if (day > 0) {
    url = `${basePath}${day}.${format}`;
  }

  return url;
};

export const showNoResults = (
  <div className="daily-item">
    <img className="daily-image" src={`${basePath}/0.jpg`} alt="" />
  </div>
);
