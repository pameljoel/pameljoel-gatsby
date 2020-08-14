type ExperienceName = {
  [key: number]: string;
};

type ExperienceTooltip = {
  startDate: number;
  endDate?: number;
};

const EXPERIENCE = {
  EXPERT: 'Expert',
  PROFICIENT: 'Proficient',
  COMPETENT: 'Competent',
  LEARNING: 'Learning',
};

export const EXPERIENCE_YEARS: ExperienceName = {
  4: EXPERIENCE.EXPERT.toLowerCase(),
  3: EXPERIENCE.PROFICIENT.toLowerCase(),
  2: EXPERIENCE.COMPETENT.toLowerCase(),
  1: EXPERIENCE.LEARNING.toLowerCase(),
};

export const getYearsOfExperience = (startDate: number, endDate?: number) => {
  const now = new Date().getFullYear();
  const end = endDate ? endDate : now;
  return end - startDate;
};

export const formatExperienceClassName = (years: number) => {
  const baseClass = 'skill__experience--';
  if (years > 4) return `${baseClass}${EXPERIENCE_YEARS[4]}`;
  if (years < 1) return `${baseClass}${EXPERIENCE_YEARS[1]}`;
  return `${baseClass}${EXPERIENCE_YEARS[years]}`;
};

export const generateExperienceClassName = ({
  startDate,
  endDate,
}: ExperienceTooltip) => {
  if (!startDate || !endDate) return '';
  const years = getYearsOfExperience(startDate, endDate);
  return formatExperienceClassName(years);
};

export const formatExperienceTooltip = ({
  startDate,
  endDate,
}: ExperienceTooltip) => {
  const base = `I have been working with <strong>${name}</strong>`;
  return endDate
    ? base + ` from ${startDate} to ${endDate}`
    : base + ` since ${startDate}`;
};

export const skillLevel = (percentage: number) => {
  if (percentage >= 90) return EXPERIENCE.EXPERT;
  if (percentage >= 75) return EXPERIENCE.PROFICIENT;
  if (percentage >= 50) return EXPERIENCE.COMPETENT;
  return EXPERIENCE.LEARNING;
};

export const randomDelay = () => Math.random().toFixed(2);
