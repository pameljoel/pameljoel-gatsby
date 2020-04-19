import { skill, skills, skillsList } from '../../types';

const hasSkill = (array: skillsList, string: string) => {
  const isValid = Array.isArray(array) && array;
  return isValid ? array.includes(string) : false;
};

export const filterSkills = (stringArray: skillsList, skillsJson: skills) => {
  return skillsJson.filter((skill: skill) => hasSkill(stringArray, skill.name));
};
