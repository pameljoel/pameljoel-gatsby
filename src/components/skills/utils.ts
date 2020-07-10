export const getExperience = (startDate: number, endDate: number) => {
  const now = new Date().getFullYear();
  const end = endDate ? endDate : now;
  return end - startDate;
};

const EXPERIENCE = {
  EXPERT: 'Expert',
  PROFICIENT: 'Proficient',
  COMPETENT: 'Competent',
  LEARNING: 'Learning',
};

export const EXPERIENCE_YEARS: { [key: number]: string } = {
  4: EXPERIENCE.EXPERT.toLowerCase(),
  3: EXPERIENCE.PROFICIENT.toLowerCase(),
  2: EXPERIENCE.COMPETENT.toLowerCase(),
  1: EXPERIENCE.LEARNING.toLowerCase(),
};

export const skillLevel = (percentage: number) => {
  if (percentage >= 90) return EXPERIENCE.EXPERT;
  if (percentage >= 75) return EXPERIENCE.PROFICIENT;
  if (percentage >= 50) return EXPERIENCE.COMPETENT;
  return EXPERIENCE.LEARNING;
};

export const randomDelay = () => Math.random().toFixed(2);
