import React from "react";
import { getLangUrl } from "locales/utils";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const StartCheckBtn = ({ textColor }: { textColor: string }) => {
  const { t } = useTranslation();
  return (
    <Link
      to={getLangUrl("/home")}
      className={`py-[22px] px-[46px] items-center bg-white font-semibold md:font-bold
      leading-[normal] md:text-[23px] text-[16px] text-[${textColor}]
      rounded-[100px] w-fit`}>
      {t("startChecking")}
    </Link>
  );
};

export default StartCheckBtn;
