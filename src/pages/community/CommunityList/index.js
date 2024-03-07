import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fetchAllPosts } from "../api";
import CommunityEach from "./CommunityEach";
import loupe from "assets/loupe.svg";
import Pagination from "components/views/Pagination";
import LoadingSpinner from "components/views/LoadingSpinner";
import { getLangUrl } from "locales/utils";
import { useQuery } from "react-query";

const CommunityList = () => {
  const { data: originData, loading, error } = useQuery("fetchAllPosts", fetchAllPosts);

  // 검색 기능
  const [searchKeyword, setSearchKeyword] = useState("");

  const filteredData = searchKeyword
    ? originData.filter(
        (item) => item["title"] && item["title"].toLowerCase().includes(searchKeyword.toLowerCase())
      )
    : originData;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(parseInt(queryParams.get("page") || "1", 10));
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const urlPage = parseInt(queryParams.get("page"), 10) || 1;
    if (urlPage !== currentPage) {
      setCurrentPage(urlPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <div className="mx-auto px-5 w-[375px] desktop:w-[960px] py-[150px] font-['Pretendard-Regular'] leading-[normal]">
      {/* Title 및 검색 하십시오.. */}
      <div className="gap-[26px] flex desktop:flex-row flex-col desktop:items-center mb-9 desktop:h-10">
        <h1 className="text-[24px] leading-[28px] font-semibold text-[#171923]">
          {i18n.language === "en" ? "Community" : "커뮤니티"}
        </h1>
        <div className="w-[326px] desktop:w-[360px] gap-[14px] h-10 flex rounded-[6px] items-center border-[#E0E4E8] border-[1px]">
          <input
            className="overflow-ellipsis text-[14px] font-medium leading-[18px] tracking-[0.203px] w-[264px] focus:outline-none ml-4"
            type="text"
            placeholder={`${t("search.guide")}`}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <img src={loupe} alt="Loupe" />
        </div>
        <Link
          className="flex ml-auto items-center border-2 rounded-md px-4 h-full"
          to={getLangUrl("/community/create")}>
          {i18n.language === "en" ? "Create" : "글쓰기"}
        </Link>
      </div>
      {error && <div>{error}</div>}
      {!loading && filteredData ? (
        <Pagination
          data={filteredData}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          renderItem={(item) => {
            return <CommunityEach key={item.id} item={item} />;
          }}
        />
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};
export default CommunityList;
