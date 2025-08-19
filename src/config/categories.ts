export const CATEGORIES = {
  PROFILE: 1,
  STUDIES_FORMAL: 2,
  STUDIES_OTHER: 3,
  EXPERIENCE: 4,
  TECHNOLOGIES: 5,
  PORTFOLIO: 6,
  HOBBIES: 8
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
export const getCategoryId = (key: CategoryKey) => CATEGORIES[key];