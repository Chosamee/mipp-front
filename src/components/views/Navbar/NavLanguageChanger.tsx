import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface ILanguageChangerProps {
  changeLanguage: (language: string) => string;
  className?: string;
}

const NavLanguageChanger = ({ changeLanguage, className }: ILanguageChangerProps) => {
  const { i18n } = useTranslation();
  return (
    <div className="flex md:text-lg text-base gap-1 font-medium">
      <Link
        className={i18n.language === "ko" ? "text-black" : "text-[#A5A5A5]"}
        to={changeLanguage("ko")}
        onClick={() => {
          i18n.changeLanguage("ko");
        }}>
        KO
      </Link>
      <div className="w-px h-5 bg-[#D9D9D9] self-center"></div>
      <Link
        className={i18n.language === "en" ? "text-black" : "text-[#A5A5A5]"}
        to={changeLanguage("en")}
        onClick={() => {
          i18n.changeLanguage("en");
        }}>
        EN
      </Link>
    </div>
  );
};

export default NavLanguageChanger;
