import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Pagination from "backup/Pagination_Prev";
import LoadingSpinner from "components/views/LoadingSpinner";
import { deleteResult, fetchResults } from "pages/result/api";
import { getLangUrl } from "locales/utils";
import { useTranslation } from "react-i18next";
import { useAuth } from "components/auth/AuthContext";

import loupe from "assets/loupe.svg";
import down_vector from "assets/result/down_vector.svg";
import VoteBanner from "./VoteBanner";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getStatusFieldColor, getStatusText, getStatusTextColor } from "./utils";
import ResultItem from "./ResultItem";
import { IResultItem } from "../types";

const ResultList = () => {
  const itemsPerPage = 10;
  const { t, i18n } = useTranslation();
  const { updateAuthState } = useAuth();
  const navigate = useNavigate();

  const {
    data: resultData,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery("results", fetchResults, {
    // 실패 시 자동 재시도 방지
    // retry: false,
    refetchInterval: 10000,
    refetchIntervalInBackground: true,
    refetchOnMount: true,
    onSuccess: (data) => {
      // 데이터 불러오기 성공 시 필요한 작업 수행
      console.log("Data fetched successfully:", data);
    },
    onError: (error) => {
      // 에러 핸들링
      // console.error("Error fetching results:", error);
    },
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

  const deleteMutation = useMutation(deleteResult, {
    onSuccess: () => {
      queryClient.refetchQueries("results"); // 삭제 작업 성공 후 관련 쿼리를 다시 가져옵니다.
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
        <Notify />
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
        <div className="flex w-[326px] md:w-[920px] h-14 items-center md:gap-6 gap-4">
          <div className="py-1 gap-[10px] flex">
            <button>
              <img src={down_vector} alt="Vector" />
            </button>

            {i18n.language === "en" ? (
              <div className="text-[14px] text-center font-medium leading-[20px] text-[#171923]">
                Latest
              </div>
            ) : (
              <div className="text-[14px] text-center font-medium leading-[20px] text-[#171923]">
                최신순
              </div>
            )}
          </div>
          <div className="h-[13px] w-px bg-[#E5E8EB] flex-shrink-0" />
          <div className="flex">
            {["all", "vocal", "melody", "boundary"].map((item, index) => {
              return (
                <button
                  className={`h-7 text-sm leading-5 font-semibold  md:px-3 px-2.5 py-1 items-center justify-center ${
                    inst === item
                      ? "rounded-[9999px] text-[#171923] bg-[#E2E8F0]"
                      : "text-[#999DA1]"
                  }`}
                  onClick={() => {
                    setInst(item);
                  }}>
                  {t(`home.${item}`)}
                </button>
              );
            })}
          </div>
        </div>

        {/* 이름/ 타입/ 업로드 날짜/ 진행상황/ 삭제 
          600   100   120   100
      */}
        {i18n.language === "en" ? (
          <div className="hidden md:flex w-full px-5 h-10 gap-6 items-center text-[#828487] text-sm font-medium border-y-[1px] border-[#E5E8EB]">
            <div className="flex-grow">Name</div>
            <div className="w-20">Type</div>
            <div className="w-24">Upload Date</div>
            <div className="w-32">Progress</div>
            <div className="w-11 text-center">Delete</div>
          </div>
        ) : (
          <div className="hidden md:flex w-full px-5 h-10 gap-6 items-center text-[#828487] text-sm font-medium border-y-[1px] border-[#E5E8EB]">
            <div className="flex-grow">이름</div>
            <div className="w-20">타입</div>
            <div className="w-24">업로드 날짜</div>
            <div className="w-32">진행상황</div>
            <div className="w-11 text-center">삭제</div>
          </div>
        )}

        {filteredData ? (
          <Pagination
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

const Notify = () => {
  const { i18n } = useTranslation();
  return (
    <div className="bg-[#F7F8FB] px-10 py-6 flex mb-[88px] rounded-[10px] justify-center">
      <div className="flex rounded-full bg-[#3553F3] w-[18px] h-[18px] text-white text-xs leading-5 justify-center mr-4 mt-[2px] flex-shrink-0">
        !
      </div>
      <div className="text-sm leading-6 text-[#4D535B]">
        {i18n.language === "en" ? (
          <>
            Welcome to beta test version of MIPP! The Checking will take about 10 minutes, but it
            may take longer <br />
            if there are many applicants. If errors persist, please apply through a{" "}
            <Link to={getLangUrl("/support?menu=contact")} className="underline text-blue-600">
              Contact
            </Link>
            . <br />
            You can only request up to 10 songs within 24 hours per account.
          </>
        ) : (
          <>
            MIPP 표절 검사 시스템 베타 테스트 버전에 오신 것을 환영합니다! 검사는 10분 내외, 혹은
            신청자가 많다면 더 오래 걸릴 수도 있습니다.
            <br />
            오류가 지속적으로 생긴다면,{" "}
            <Link to={getLangUrl("/support?menu=contact")} className="underline text-blue-600">
              1대1 문의하기
            </Link>
            를 통해 신청해주세요. 한 계정당 24시간 이내에 10번의 곡만 신청할 수 있습니다.
          </>
        )}
      </div>
    </div>
  );
};

export default ResultList;
