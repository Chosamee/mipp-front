import i18n from "i18next";

export function getLangUrl(path) {
  const currentLang = i18n.language;
  return `/${currentLang}${path}`;
}
