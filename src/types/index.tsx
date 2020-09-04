export type SkillsList = SkillName[];
export type SkillName = string;

export type SkillsType = SkillType[];

export type SkillType = {
  name: string;
  percentage: number;
  description: string;
  color?: string;
  hint?: string;
  startDate: StartDate;
  endDate?: EndDate;
};

export type Tags = Tag[];

export type TagObj = {
  name: string;
  topSkill: boolean;
  newSkill: boolean;
  handleClick?: (name: string) => {};
};

export type Tag = string;

export type Sections = SectionType[] | null;

export type SectionType = {
  name: string;
  description: string;
  skills: SkillsList;
};

export type TooltipType = {
  description: string;
  name: string;
};

interface NodeJS {
  global: Global;
}

interface Global {
  shallow: () => {};
  render: () => {};
  mount: () => {};
}
