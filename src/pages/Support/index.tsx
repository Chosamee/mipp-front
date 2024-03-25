import { useEffect, useState } from "react";
import React from "react";
import FAQs from "./FAQs";
import Asks from "./Ask";
import NoticeList from "./notice/NoticeList";
import { useTranslation } from "react-i18next";
import { SearchParamsProvider, useSearchParamsContext } from "components/SearchParamsContext";

const Support = () => {
  const [menu, setMenu] = useState("notice");
  const { t } = useTranslation();
  const { searchParams, setSearchParams } = useSearchParamsContext();

  useEffect(() => {
    // URL에서 'menu' 파라미터 값이 변경될 때마다 실행
    let urlMenu = searchParams.get("menu");
    if (!["notice", "faq", "ask"].includes(urlMenu)) {
      urlMenu = "notice";
    }
    if (urlMenu && urlMenu !== menu) {
      // 현재 URL의 'menu' 파라미터와 상태가 다를 때만 상태 업데이트
      setSearchParams({ menu: urlMenu });
      setMenu(urlMenu);
    }
  }, []); // searchParams 변경 시 useEffect 재실행

  useEffect(() => {
    const urlMenu = searchParams.get("menu");
    console.log(urlMenu);

    if (!urlMenu && menu !== "notice") {
      setSearchParams({ menu: menu });
    } else if (urlMenu) {
      setSearchParams({ menu: menu });
    }
  }, [menu]); // menu 변경 시 useEffect 재실행

  return (
    <>
      <div className="w-[375px] desktop:w-[960px] mx-auto relative pt-24">
        <div className="flex justify-center mx-auto gap-5">
          {["notice", "faq", "ask"].map((item) => (
            <div className="flex  flex-col justify-center items-center">
              <button
                key={item}
                className="flex text-lg p-2 w-72 justify-center"
                onClick={() => setMenu(item)}>
                {item}
              </button>
              <div
                className="h-[2px] w-48 z-10"
                style={menu === item ? { backgroundColor: "#F56226" } : {}}
              />
            </div>
          ))}
        </div>
        <div className="absolute h-[2px] w-full bg-neutral-200 bottom-0"></div>
      </div>
      <div className="h-12" />
      {menu === "notice" && <NoticeList />}
      {menu === "faq" && <FAQs />}
      {menu === "ask" && <Asks />}
    </>
  );
};

export default Support;
