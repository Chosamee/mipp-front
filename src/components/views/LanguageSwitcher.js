import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);

    // 현재 경로를 가져온 후, 언어 코드 부분만 변경
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split("/");
    pathParts[1] = language; // URL의 언어 부분을 변경 (예: /en/about -> /ko/about)
    const newPath = pathParts.join("/");

    navigate(newPath); // 변경된 URL로 이동
  };

  return (
    <select
      onChange={(e) => changeLanguage(e.target.value)}
      value={i18n.language}
      className="bg-blue-700 bg-opacity-0 text-white py-1 px-2 rounded focus:outline-none">
      <option value="en" className="bg-black">
        English
      </option>
      <option value="ko" className="bg-black">
        한국어
      </option>
      {/* 추가 언어 옵션을 여기에 추가할 수 있습니다. */}
    </select>
  );
};

export default LanguageSwitcher;
