import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fetchPosts } from "../api";
import CommunityEach from "./CommunityEach";
import loupe from "assets/loupe.svg";
import CommunityPagination from "./CommunityPagination";
import LoadingSpinner from "components/views/LoadingSpinner";
import { getLangUrl } from "locales/utils";
import { useQuery } from "react-query";

const CommunityList = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { t, i18n } = useTranslation();

  // URL에서 파라미터를 읽어 기본값 설정
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("page_size") || "10", 10);
  const searchKeyword = searchParams.get("search_query") || "";
  const searchType = searchParams.get("search_type") || "both";

  // 임시 검색어 상태
  const [tempSearchKeyword, setTempSearchKeyword] = useState(searchKeyword);
  const [tempSearchType, setTempSearchType] = useState(searchType);

  const setCurrentPage = (page) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", page.toString());
    setSearchParams(newParams);
  };

  // React Query 사용하여 데이터 로드
  // 검색 타입이 "title"이면 제목만, "content"이면 내용만, "both"면 제목 또는 내용에 포함된 데이터 사용
  // keepPreviousData: true로 설정하여 페이지 변경 시 이전 데이터를 유지하도록 설정
  // refetchOnWindowFocus: true로 설정하여 창이 focus 될 때마다 데이터를 다시 불러오도록 설정
  const {
    data: originData,
    isLoading,
    error,
  } = useQuery(["fetchPosts", { currentPage, pageSize, searchKeyword, searchType }], fetchPosts, {
    keepPreviousData: true,
    refetchOnWindowFocus: true,
  });

  // 데이터 다시 불러오기 및 URL 파라미터 업데이트 함수
  const fetchDataWithNewParams = (newParams) => {
    const newSearchParams = new URLSearchParams();

    // 모든 새로운 파라미터들을 URLSearchParams 객체에 설정
    for (const [key, value] of Object.entries(newParams)) {
      if (value !== undefined) {
        newSearchParams.set(key, value);
      }
    }

    navigate(`?${newSearchParams.toString()}`);
  };

  // 검색어 변경 핸들러
  const handleSearchChange = (e) => {
    setTempSearchKeyword(e.target.value); // 임시 검색어 상태 업데이트
  };

  const handleSearchTypeChange = (e) => {
    setTempSearchType(e.target.value); // 임시 검색 타입 상태 업데이트
  };

  // 검색 실행 버튼 클릭 핸들러
  const handleSearchClick = () => {
    fetchDataWithNewParams({
      page: "1", // 검색 실행 시 항상 첫 페이지로 이동
      page_size: pageSize.toString(),
      search_query: tempSearchKeyword,
      search_type: tempSearchType,
    });
  };
  // 폼 제출 핸들러
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // 폼의 기본 제출 동작 방지
    handleSearchClick(); // 검색 실행 함수 호출
  };

  // URL 파라미터 유효성 검사 및 조정
  useEffect(() => {
    // pageSize, searchType의 유효한 값
    const validPageSizes = [10, 30, 50];
    const validSearchTypes = ["title", "content", "both"];

    // 현재 값 검사
    let shouldUpdate = false;
    const newParams = new URLSearchParams(searchParams.toString());

    // 페이지 번호 검사
    if (currentPage < 1 || (originData && currentPage > originData.total_pages)) {
      newParams.set("page", "1");
      shouldUpdate = true;
    }

    // pageSize 검사
    if (!validPageSizes.includes(pageSize)) {
      newParams.set("page_size", "10");
      shouldUpdate = true;
    }

    // searchType 검사
    if (!validSearchTypes.includes(searchType)) {
      newParams.set("search_type", "both");
      shouldUpdate = true;
    }

    // 필요한 경우 URL 파라미터 업데이트
    if (shouldUpdate) {
      setSearchParams(newParams);
    }
  }, [currentPage, pageSize, searchType, searchParams, setSearchParams, originData]);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="mx-auto px-5 w-[375px] md:w-[960px] py-[150px] font-['Pretendard-Regular'] leading-[normal]">
      {/* Title 및 검색 하십시오.. */}
      <div className="gap-[26px] flex md:flex-row flex-col md:items-center mb-9 md:h-10">
        <h1 className="text-[24px] leading-[28px] font-semibold text-[#171923]">
          {i18n.language === "en" ? "Community" : "커뮤니티"}
        </h1>
        <form className="flex gap-4 md:flex-row flex-col" onSubmit={handleSearchSubmit}>
          <select value={tempSearchType} onChange={handleSearchTypeChange}>
            <option value="both">{t("searchType.both")}</option>
            <option value="title">{t("searchType.title")}</option>
            <option value="content">{t("searchType.content")}</option>
          </select>
          <div className="w-[326px] md:w-[360px] gap-[14px] h-10 flex rounded-[6px] items-center border-[#E0E4E8] border-[1px]">
            <input
              className="overflow-ellipsis text-[14px] font-medium leading-[18px] tracking-[0.203px] w-[264px] focus:outline-none ml-4"
              type="text"
              placeholder={`${t("search.guide")}`}
              value={tempSearchKeyword}
              onChange={handleSearchChange}
            />
            <button type="submit">
              <img src={loupe} alt="Search" />
            </button>
          </div>
        </form>
        <Link
          className="flex ml-auto items-center border-2 rounded-md px-4 md:h-full h-10 flex-shrink-0"
          to={getLangUrl("/community/create")}>
          {i18n.language === "en" ? "Create" : "글쓰기"}
        </Link>
      </div>
      {error && <div>{error}</div>}
      {!isLoading && originData ? (
        <CommunityPagination
          data={originData.posts}
          totalPage={originData.total_pages === 0 ? 1 : originData.total_pages}
          pageSize={pageSize}
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
