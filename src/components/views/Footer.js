import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="flex flex-col items-center">
      <div className="bg-gray-600 text-white w-full">
        <div className="max-w-6xl mx-auto px-10 py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col  mb-4 md:mb-0 self-center md:items-start items-center">
            <span className="text-lg">{t("footer.email")}</span>
          </div>
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <span className="text-2xl">{t("footer.company")}</span>
            <span className="text-sm">주소, 서울특별시 영등포구 도림로 17길</span>
          </div>
          <div className="flex flex-row  items-center md:justify-end justify-center">
            <label>언어 선택</label>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      <div className="py-2 w-full">
        <div className="max-w-6xl mx-auto text-center text-xs">
          <span>©2023 BY POLY. PROUDLY CREATED WITH DoubleHCompany.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
