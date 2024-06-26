import { getLangUrl } from "locales/utils";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const LeftNavItems = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex gap-2 items-center text-nowrap font-medium">
        <Link to={getLangUrl("/intro")} onMouseOver={() => import("pages/Intro")}>
          {t("nav.intro")}
        </Link>
        <Link to={getLangUrl("/howtouse")} onMouseOver={() => import("pages/Howtouse")}>
          {t("nav.howToUse")}
        </Link>
        <Link to={getLangUrl("/community")}>{t("nav.request")}</Link>
        <Link
          to={getLangUrl("/support/notice")}
          onMouseOver={() => import("pages/Support/notice/NoticeList")}>
          {t("nav.support")}
        </Link>
      </div>
    </>
  );
};

export default LeftNavItems;
