import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PaginationAllData from "components/PaginationAllData";
import LoadingSpinner from "components/views/LoadingSpinner";
import { deleteResult, fetchResults } from "pages/result/api";
import { useTranslation } from "react-i18next";

import loupe from "assets/loupe.svg";
import down_vector from "assets/result/down_vector.svg";
import VoteBanner from "./VoteBanner";
import ResultItem from "./ResultItem";
import { IResultItem } from "../types";
import ResultNotice from "./ResultNotice";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const ResultList = () => {
  const itemsPerPage = 10;
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const {
    data: resultData,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["results"],
    queryFn: fetchResults,
    // 실패 시 자동 재시도 방지
    // retry: false,
    refetchInterval: 10000,
    refetchIntervalInBackground: true,
    refetchOnMount: true,
  });

  // 검색 기능
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchType, setSearchType] = useState("title");
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const [currentPage, setCurrentPage] = useState(parseInt(queryParams.get("page") || "1", 10));
  const [inst, setInst] = useState(queryParams.get("inst") || "all");

  const prevInstRef = useRef(inst);
  // URL 파라미터로부터 inst와 currentPage 값을 초기화
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const urlInst = queryParams.get("inst") || "all";
    const urlPage = parseInt(queryParams.get("page") ?? "1", 10);

    // URL에서 읽은 값이 현재 상태와 다를 경우에만 상태를 업데이트합니다.
    if (urlInst !== inst || urlPage !== currentPage) {
      setInst(urlInst);
      setCurrentPage(urlPage);
    }
  }, [location.search]); // location.search가 변경될 때마다 실행됩니다.

  // inst 값이 변경될 때만 실행되는 useEffect
  useEffect(() => {
    if (inst !== prevInstRef.current) {
      setCurrentPage(1); // inst가 변경되면 page를 1로 설정
      const params = new URLSearchParams();
      if (inst !== "all") params.append("inst", inst);
      // inst가 변경되었을 때는 page 파라미터를 URL에 포함시키지 않습니다.
      navigate({ pathname: location.pathname, search: String(params) }, { replace: true });
      prevInstRef.current = inst;
    }
  }, [inst]); // 의존성 배열에 inst만 포함시켜 inst 값이 변경될 때만 이 useEffect가 실행되도록 합니다.

  // currentPage 값이 변경될 때만 실행되는 useEffect
  const filteredData = searchKeyword
    ? inst !== "all"
      ? resultData?.filter(
          (item: IResultItem) =>
            item[searchType as keyof IResultItem] &&
            String(item[searchType as keyof IResultItem])
              .toLowerCase()
              .includes(searchKeyword.toLowerCase()) &&
            item["inst"] === inst
        )
      : resultData?.filter(
          (item: IResultItem) =>
            item[searchType as keyof IResultItem] &&
            String(item[searchType as keyof IResultItem])
              .toLowerCase()
              .includes(searchKeyword.toLowerCase())
        )
    : inst !== "all"
    ? resultData?.filter(
        (item: IResultItem) => item[searchType as keyof IResultItem] && item["inst"] === inst
      )
    : resultData;

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteResult,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["results"] }); // 삭제 작업 성공 후 관련 쿼리를 다시 가져옵니다.
    },
  });

  const handleDeleteResult = async (id: string) => {
    const confirmSubmit = window.confirm(t("request.confirmDelete"));
    if (confirmSubmit) {
      try {
        await deleteMutation.mutateAsync(id);
      } catch (error) {
        console.error("delete front error: ", error);
      }
    }
  };

  return (
    <>
      <div className="mx-auto px-5 w-[375px] md:w-full max-w-5xl py-[150px] font-['Pretendard-Regular']">
        <ResultNotice />
        {/* Title 및 검색 하십시오.. */}
        <div className="gap-[26px] flex md:flex-row flex-col md:items-center mb-9 md:h-10">
          <h1 className="text-[24px] leading-[28px] font-semibold text-[#171923]">
            {t("result.my")}
          </h1>
          <div className="w-[326px] md:w-[360px] gap-[14px] h-10 flex rounded-[6px] items-center border-[#E0E4E8] border-[1px]">
            <input
              className="overflow-ellipsis text-[14px] font-medium leading-[18px] tracking-[0.203px] w-[264px] focus:outline-none ml-4"
              type="text"
              placeholder={`${t("search.guide")}`}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <img src={loupe} alt="Loupe" />
          </div>
        </div>

        {/* 선택 버튼 */}
        <div className="flex w-full md:w-full md:h-14 h-20 md:items-center md:gap-6 px-2 md:flex-row flex-col items-start justify-between md:justify-start">
          <div className="gap-2 flex">
            <button className="py-1 flex-shrink-0">
              <img src={down_vector} alt="Vector" />
            </button>

            {i18n.language === "en" ? (
              <div className="text-sm text-center font-medium text-[#171923]">Latest</div>
            ) : (
              <div className="text-sm text-center font-medium text-[#171923]">최신순</div>
            )}
          </div>
          {/* <div className="h-4 w-px bg-[#E5E8EB] flex-shrink-0" /> */}

          <div className="flex justify-between w-full items-center md:w-fit">
            {["all", "vocal", "melody", "boundary"].map((item, index) => {
              return (
                <>
                  <div className="flex flex-col w-fit">
                    <button
                      className={`h-7 text-sm font-semibold md:px-3 px-3 py-1 items-center justify-center ${
                        inst === item ? "rounded-[9999px] text-blue-700 " : "text-[#999DA1]"
                      }`}
                      onClick={() => {
                        setInst(item);
                      }}>
                      {t(`home.${item}`)}
                    </button>
                    <div className={`w-full h-0.5  ${inst === item ? "bg-blue-700" : ""}`}></div>
                  </div>
                  {index !== 3 && <div className="h-4 w-px bg-[#E5E8EB] flex-shrink-0 md:hidden" />}
                </>
              );
            })}
          </div>
          <div className="h-px w-full bg-[#E5E8EB] flex-shrink-0 md:hidden" />
        </div>

        {/* 이름/ 타입/ 업로드 날짜/ 진행상황/ 삭제 
          600   100   120   100
      */}
        {i18n.language === "en" ? (
          <div className="hidden md:flex w-full px-5 h-10 gap-8 items-center text-[#828487] text-sm font-medium border-y-[1px] border-[#E5E8EB]">
            <div className="flex-grow">Name</div>
            <div className="w-20">Type</div>
            <div className="w-24">Upload Date</div>
            <div className="w-32 pl-2">Progress</div>
            <div className="w-11 text-center">Delete</div>
          </div>
        ) : (
          <div className="hidden md:flex w-full px-5 h-10 gap-8 items-center text-[#828487] text-sm font-medium border-y-[1px] border-[#E5E8EB]">
            <div className="flex-grow">이름</div>
            <div className="w-20">타입</div>
            <div className="w-24">업로드 날짜</div>
            <div className="w-32 pl-2">진행상황</div>
            <div className="w-11 text-center">삭제</div>
          </div>
        )}

        {filteredData ? (
          <PaginationAllData
            data={filteredData}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            renderItem={(item: IResultItem, index: number) => {
              return <ResultItem resultItem={item} handleDeleteResult={handleDeleteResult} />;
            }}
          />
        ) : (
          <LoadingSpinner />
        )}
        {/* search */}
        {/* <div className="flex gap-2 mb-4 mt-2">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded w-full"
          placeholder={`${t("search.guide")} (${t(`search.${searchType}`)})`}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />

        <select
          className="p-2 border border-gray-300 rounded w-1/4"
          onChange={(e) => setSearchType(e.target.value)}
          value={searchType}>
          <option value="title">{t("search.title")}</option>
        </select>
      </div> */}
      </div>
      <VoteBanner />
    </>
  );
};

export default ResultList;
