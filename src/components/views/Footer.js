import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="flex flex-col items-center">
      <div className="bg-blue-600 text-white w-full">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-start mb-4 md:mb-0">
            <span className="text-lg">{t("footer.email")}</span>
          </div>
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <span className="text-2xl">{t("footer.company")}</span>
            <span className="text-sm">주소, 서울특별시 영등포구 도림로 17길</span>
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="language-select" className="mr-2">
              언어선택
            </label>
            <select
              id="language-select"
              className="bg-blue-700 text-white py-1 px-2 rounded focus:outline-none">
              <option value="ko">KO</option>
              <option value="en">EN</option>
            </select>
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
