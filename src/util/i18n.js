// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // 원격 또는 로컬 서버에서 번역 파일 로드
  .use(LanguageDetector) // 사용자 언어 감지
  .use(initReactI18next) // i18next를 React와 연결
  .init({
    fallbackLng: "ko", // 기본 언어 설정
    debug: true, // 디버깅 목적
    interpolation: {
      escapeValue: false, // React에서 이미 안전하게 이스케이핑됨
    },
  });

export default i18n;
