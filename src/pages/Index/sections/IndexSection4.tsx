import React from "react";
import { useTranslation } from "react-i18next";
import lockSvg from "assets/index/Group 294.svg";
import { getLangUrl } from "locales/utils";
import { Link } from "react-router-dom";

const IndexSection4 = () => {
  const { t } = useTranslation();

  return (
    <div className="md:py-[120px] py-[70px] px-[23px] flex md:px-5 flex-col bg-[#19275F] w-full">
      <div className="flex flex-col items-center mx-auto md:w-full w-[320px]">
        <img src={lockSvg} alt="Lock" className="mb-[22px]" />
        <h2 className="text-white md:text-[50px] text-2xl font-semibold text-center mb-[20px] md:leading-[60px] break-keep">
          {t("index.4.title")}
        </h2>
        <div className="text-white md:text-[22px] md:leading-[36px] text-[15px] leading-[25px] text-center md:mb-[54px] mb-[30px] text-balance break-keep">
          {t("index.4.content")}
        </div>
        <Link
          className="bg-white md:px-[46px] md:py-[22px] px-9 py-[15px] items-center rounded-[100px] md:text-[23px] text-[16px] font-semibold mb-[30px]"
          to={getLangUrl("/home")}>
          {t("startChecking")}
        </Link>
        <div className="text-[#5967A3] md:text-[20px] text-[14px] font-medium leading-[36px]">
          {t("index.4.subcontent")}
        </div>
      </div>
    </div>
  );
};

export default IndexSection4;
