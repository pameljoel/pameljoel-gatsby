import { SkillType, SkillsType, SkillsList } from '../../types';

const hasSkill = (array: SkillsList, string: string) => {
  const isValid = Array.isArray(array) && array;
  return isValid ? array.includes(string) : false;
};

export const filterSkills = (stringArray: SkillsList, skillsJson: SkillsType) => {
  return skillsJson.filter((skill: SkillType) => hasSkill(stringArray, skill.name));
};
