export type skillsList = skillName[];
export type skillName = string;

export type skills = skill[];

export type skill = {
  name: string;
  percentage: number;
  description: string;
  hint?: string;
  startDate?: number;
  endDate?: number;
};

export type tags = tag[];

export type tagObj = {
  name: string;
  topSkill: boolean;
  newSkill: boolean;
  handleClick?: (name: string) => {};
};

export type tag = string;

export type sections = section[];

export type section = {
  name: string;
  description: string;
  skills: skillsList;
  tags: tags;
};

export type tooltip = {
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
