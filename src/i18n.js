import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en.json";
import translationKR from "./locales/kr.json";

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  kr: {
    translation: translationKR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // 초기 언어 설정
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
