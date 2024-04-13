import { useEffect, useState } from "react";
import React from "react";
import FAQs from "./FAQs";
import NoticeList from "./notice/NoticeList";
import { useTranslation } from "react-i18next";
import { SearchParamsProvider, useSearchParamsContext } from "components/SearchParamsContext";
import Ask from "./Ask";
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { getLangUrl } from "locales/utils";
import AskCreate from "./Ask/AskCreate";

const Support = () => {
  const { t } = useTranslation();
  const { searchParams, setSearchParams } = useSearchParamsContext();

  const location = useLocation();

  return (
    <>
      <div className="w-cp md:w-[960px] mx-auto relative pt-24">
        <div className="flex md:flex-row flex-col justify-center mx-auto gap-5">
          {["notice", "faq", "contact"].map((item) => (
            <div className="relative flex flex-col justify-center items-center">
              <Link
                key={item}
                className="flex text-lg p-2 w-72 justify-center"
                to={getLangUrl(`/support/${item}`)}>
                {t(`nav.${item}`)}
              </Link>
              <div
                className="h-[2px] w-48 z-10"
                style={
                  location.pathname.split("/")[3] === item ? { backgroundColor: "#F56226" } : {}
                }
              />
              <div className="absolute bottom-0 h-[2px] w-full md:hidden bg-neutral-300" />
            </div>
          ))}
        </div>
        <div className="absolute h-[2px] w-full bg-neutral-200 bottom-0 hidden md:block"></div>
      </div>
      <div className="h-12" />
      <Routes>
        <Route path="notice" element={<NoticeList />} />
        <Route path="faq" element={<FAQs />} />
        <Route path="contact" element={<Ask />} />
        <Route path="contact/create" element={<AskCreate isGuest={false} />} />
        <Route path="*" element={<Navigate to={"notice"} replace />} />
      </Routes>
    </>
  );
};

export default Support;
