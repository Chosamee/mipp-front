import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en.json";
import translationKO from "./locales/ko.json";

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  ko: {
    translation: translationKO,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: window.localStorage.getItem("i18nextLng") || window.location.pathname.split("/")[1] || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
