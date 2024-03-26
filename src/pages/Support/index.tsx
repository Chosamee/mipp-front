import { useEffect, useState } from "react";
import React from "react";
import FAQs from "./FAQs";
import NoticeList from "./notice/NoticeList";
import { useTranslation } from "react-i18next";
import { SearchParamsProvider, useSearchParamsContext } from "components/SearchParamsContext";
import Ask from "./Ask";
import { useLocation } from "react-router-dom";

const Support = () => {
  const [menu, setMenu] = useState("notice");
  const { t } = useTranslation();
  const { searchParams, setSearchParams } = useSearchParamsContext();

  useEffect(() => {
    let urlMenu = searchParams.get("menu");
    if (!["notice", "faq", "contact"].includes(urlMenu)) {
      setSearchParams({ menu: "notice" });
      urlMenu = "notice";
    }
    if (urlMenu && urlMenu !== menu) {
      // 현재 URL의 'menu' 파라미터와 상태가 다를 때만 상태 업데이트
      setMenu(urlMenu);
    }
  }, []); // searchParams 변경 시 useEffect 재실행

  useEffect(() => {
    const urlMenu = searchParams.get("menu");
    console.log(urlMenu);

    if (!urlMenu && menu !== "notice") {
      setSearchParams({ menu: menu });
    } else if (urlMenu === "contact") {
      setSearchParams({ ...searchParams, menu: menu });
    } else if (urlMenu) {
      setSearchParams({ menu: menu });
    }
  }, [searchParams]); // menu 변경 시 useEffect 재실행

  return (
    <>
      <div className="w-[375px] desktop:w-[960px] mx-auto relative pt-24">
        <div className="flex desktop:flex-row flex-col justify-center mx-auto gap-5">
          {["notice", "faq", "contact"].map((item) => (
            <div className="relative flex flex-col justify-center items-center">
              <button
                key={item}
                className="flex text-lg p-2 w-72 justify-center"
                onClick={() => {
                  setMenu(item);
                  setSearchParams({ menu: item });
                }}>
                {t(`nav.${item}`)}
              </button>
              <div
                className="h-[2px] w-48 z-10"
                style={menu === item ? { backgroundColor: "#F56226" } : {}}
              />
              <div className="absolute bottom-0 h-[2px] w-full desktop:hidden bg-neutral-300" />
            </div>
          ))}
        </div>
        <div className="absolute h-[2px] w-full bg-neutral-200 bottom-0 hidden desktop:block"></div>
      </div>
      <div className="h-12" />
      {menu === "notice" && <NoticeList />}
      {menu === "faq" && <FAQs />}
      {menu === "contact" && <Ask />}
    </>
  );
};

export default Support;
