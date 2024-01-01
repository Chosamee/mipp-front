import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  return (
    <footer className="flex flex-col items-center">
      <div
        className={`${
          !location.pathname.split("/")[2] ? "bg-gray-600" : "bg-blue-500"
        } text-white w-full`}>
        <div className="max-w-6xl mx-auto px-10 py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col  mb-4 md:mb-0 self-center md:items-start items-center">
            <span className="text-lg">{t("footer.email")}</span>
          </div>
          <div className="flex flex-col items-center justify-center mb-4 md:mb-0">
            <span className="text-2xl">{t("footer.company")}</span>
            <span className="text-sm"> </span>
          </div>
          <div className="flex flex-row  items-center md:justify-end justify-center">
            <label>{t("language")}</label>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      <div className="py-2 w-full">
        <div className="max-w-6xl mx-auto text-center text-xs">
          <span>©2023 BY DoubleHCompany.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
