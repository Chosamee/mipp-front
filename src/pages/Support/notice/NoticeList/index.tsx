import React from "react";
import Pagination from "components/Pagination";
import NoticeEach from "./NoticeEach";
import LoadingSpinner from "components/views/LoadingSpinner";
import { fetchAllNotices } from "../api";
import { useTranslation } from "react-i18next";
import NoticeSEOEN from "seo/NoticeSEO.en";
import NoticeSEOKO from "seo/NoticeSEO.ko";
import { useQuery } from "react-query";
import SearchForm from "components/SearchForm.tsx";
import { useSearchParamsContext } from "components/SearchParamsContext";

const NoticeList = () => {
  const { searchParams, setSearchParams } = useSearchParamsContext();
  const setCurrentPage = (page: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", page.toString());
    setSearchParams(newParams);
  };
  // URL에서 파라미터를 읽어 기본값 설정
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("page_size") || "10", 10);
  const searchKeyword = searchParams.get("search_query") || "";
  const searchType = searchParams.get("search_type") || "both";

  const { data, isLoading, error } = useQuery(
    ["fetchAllNotices", { currentPage, pageSize, searchKeyword, searchType }],
    fetchAllNotices,
    {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
    }
  );

  const { i18n } = useTranslation();
  const seoFiles: { [key: string]: JSX.Element } = {
    en: <NoticeSEOEN />,
    ko: <NoticeSEOKO />,
  };

  return (
    <div className="mx-auto px-5 w-[375px] desktop:w-[960px] pb-[150px] font-['Pretendard-Regular'] leading-[normal]">
      {seoFiles[i18n.language]}

      <div className="gap-[26px] flex desktop:flex-row flex-col desktop:items-center mb-9 desktop:h-10">
        <h1 className="text-[24px] leading-[28px] font-semibold text-[#171923]">
          {i18n.language === "en" ? "Notice" : "공지사항"}
        </h1>
        {data && (
          <SearchForm
            total_pages={data.total_pages}
            currentPage={currentPage}
            pageSize={pageSize}
            searchKeyword={searchKeyword}
            searchType={searchType}
          />
        )}
      </div>

      {!isLoading && data ? (
        <Pagination
          data={data.notices}
          totalPage={data.total_pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          renderItem={(item: any) => {
            return <NoticeEach key={item.id} item={item} />;
          }}
        />
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default NoticeList;
