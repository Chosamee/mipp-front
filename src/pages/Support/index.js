import { useEffect, useState } from "react";
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
    if (searchParams.get("menu")) {
      setMenu(searchParams.get("menu"));
    }
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({ menu: menu });
  }, [menu]);

  return (
    <>
      <h1 className="flex justify-center mx-auto text-xl">Support</h1>
      <div className="flex justify-center mx-auto gap-5">
        {["notice", "faq", "ask"].map((item) => (
          <button
            key={item}
            className="flex text-lg border-2 p-2 rounded-lg w-32 justify-center"
            onClick={() => setMenu(item)}>
            {item}
          </button>
        ))}
      </div>
      {menu === "notice" && <NoticeList />}
      {menu === "faq" && <FAQs />}
      {menu === "ask" && <Asks />}
    </>
  );
};

export default Support;
