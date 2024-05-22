import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import loupe from "assets/loupe.svg";
import { useSearchParamsContext } from "./SearchParamsContext";
import React from "react";
interface SearchFormProps {
  total_pages: number;
  currentPage: number;
  pageSize: number;
  searchKeyword: string;
  searchType: string;
}

interface Params {
  page: string;
  page_size: string;
  search_query: string;
  search_type: string;
}

const SearchForm = ({
  total_pages,
  currentPage,
  pageSize,
  searchKeyword,
  searchType,
}: SearchFormProps) => {
  const navigate = useNavigate();
  const { searchParams, setSearchParams } = useSearchParamsContext();
  const { t } = useTranslation();

  // 임시 검색어 상태
  const [tempSearchKeyword, setTempSearchKeyword] = useState(searchKeyword);
  const [tempSearchType, setTempSearchType] = useState(searchType);

  // 데이터 다시 불러오기 및 URL 파라미터 업데이트 함수
  const fetchDataWithNewParams = (newParams: Params) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    // 모든 새로운 파라미터들을 URLSearchParams 객체에 설정
    for (const [key, value] of Object.entries(newParams)) {
      if (value !== undefined) {
        newSearchParams.set(key, value);
      }
    }

    navigate(`?${newSearchParams.toString()}`);
  };

  const handleSearchClick = () => {
    fetchDataWithNewParams({
      page: "1", // 검색 실행 시 항상 첫 페이지로 이동
      page_size: pageSize.toString(),
      search_query: tempSearchKeyword,
      search_type: tempSearchType,
    });
  };

  // 검색어 변경 핸들러
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempSearchKeyword(e.target.value); // 임시 검색어 상태 업데이트
  };

  const handleSearchTypeChange = (e: any) => {
    setTempSearchType(e.target.value); // 임시 검색 타입 상태 업데이트
  };

  // 폼 제출 핸들러
  const handleSearchSubmit = (e: any) => {
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
    if (currentPage < 1 || (total_pages && currentPage > total_pages)) {
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
  }, [currentPage, pageSize, searchType, searchParams, setSearchParams, total_pages]);

  return (
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
  );
};

export default SearchForm;
