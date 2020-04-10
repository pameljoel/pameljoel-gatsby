export type skills = [skill];

export type skill = {
  name: string;
  percentage: number;
  description: string;
  pro: boolean;
};

export type tags = [tag];

export type tag = string;

export type sections = [section];

export type section = {
  name: string;
  description: string;
  skills: skills;
  tags: tags;
};
