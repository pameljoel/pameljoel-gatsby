import { setDailyInMonth } from './month';

export const addImagesToMonths = (months, dailies) => {
  if (!dailies || !months) return;

  months.map((month) => {
    month.dailiesOfTheMonth = setDailyInMonth(dailies, month);
  });

  return months;
};
