export type SkillsList = SkillName[];
export type SkillName = string;

export type SkillsType = SkillType[];

export type SkillType = {
  name: string;
  percentage: number;
  description: string;
  hint?: string;
  startDate?: number;
  endDate?: number;
};

export type Tags = Tag[];

export type TagObj = {
  name: string;
  topSkill: boolean;
  newSkill: boolean;
  handleClick?: (name: string) => {};
};

export type Tag = string;

export type Sections = SectionType[];

export type SectionType = {
  name: string;
  description: string;
  skills: SkillsList;
  tags: Tags;
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
