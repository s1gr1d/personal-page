export type MarkdownData = {
  fileName: string;
  contentHtml: string;
};

export type WorkMeta = {
  order: number;
  position: string;
  company: string;
  timePeriod: string;
};

export type EducationMeta = {
  order: number;
  title: string;
  timePeriod: string;
};

export type SkillMeta = {
  order: number;
  title: string;
};

export type EntryData = WorkMeta | SkillMeta | EducationMeta;
