import i18n from "i18next";

export function getLangUrl(path: string) {
  const currentLang = i18n.language;
  return `/${currentLang}${path}`;
}
