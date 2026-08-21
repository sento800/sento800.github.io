import en from "./en.json";
import vi from "./vi.json";

const dictionaries = {
  en: en,
  vi: vi,
};

export const getDictionary = (locale) => dictionaries[locale] || dictionaries.vi;
