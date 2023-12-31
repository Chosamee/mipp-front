import React from "react";
import { useTranslation } from "react-i18next";

function MyComponent() {
  const { t } = useTranslation();

  return (
    <div className="mt-40">
      <h1>{t("welcome")}</h1>
      {/* 여기서 'welcome'은 en.json 또는 ko.json 파일의 키입니다. */}
    </div>
  );
}

export default MyComponent;
