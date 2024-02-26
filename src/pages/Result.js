import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "components/views/Pagination";
import LoadingSpinner from "components/views/LoadingSpinner";
import { deleteResult, fetchResults } from "api/resultService.js";
import { getLangUrl } from "locales/utils";
import { useTranslation } from "react-i18next";
import { useAuth } from "components/auth/AuthContext";

import loupe from "assets/loupe.svg";
import down_vector from "assets/result/down_vector.svg";

const Result = () => {
  const [resultData, setresultData] = useState([]);
  const itemsPerPage = 10;
  const { t, i18n } = useTranslation();
  const { updateAuthState } = useAuth();
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const data = await fetchResults();
      setresultData(data);
    } catch (error) {
      console.error("Error:", error);
      updateAuthState({ isLoggedIn: false });
      navigate(getLangUrl("/login"));
    }
  };
  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    const urlPage = parseInt(queryParams.get("page"), 10) || 1;

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
      navigate({ pathname: location.pathname, search: params.toString() }, { replace: true });
      prevInstRef.current = inst;
    }
  }, [inst]); // 의존성 배열에 inst만 포함시켜 inst 값이 변경될 때만 이 useEffect가 실행되도록 합니다.

  // currentPage 값이 변경될 때만 실행되는 useEffect
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (currentPage !== 1) params.set("page", currentPage);
    else params.delete("page"); // 1페이지인 경우 page 파라미터를 URL에서 제거합니다.
    navigate({ pathname: location.pathname, search: params.toString() }, { replace: true });
  }, [currentPage]); // 의존성 배열에 currentPage만 포함시켜 currentPage 값이 변경될 때만 이 useEffect가 실행되도록 합니다.

  const filteredData = searchKeyword
    ? inst !== "all"
      ? resultData.filter(
          (item) =>
            item[searchType] &&
            item[searchType].toLowerCase().includes(searchKeyword.toLowerCase()) &&
            item["inst"] === inst
        )
      : resultData.filter(
          (item) =>
            item[searchType] && item[searchType].toLowerCase().includes(searchKeyword.toLowerCase())
        )
    : inst !== "all"
    ? resultData.filter((item) => item[searchType] && item["inst"] === inst)
    : resultData;

  const errorMessage = [
    "해당 악기를 발견하지 못함",
    "오류가 발생했습니다",
    "완료",
    "링크 혹은 파일에 문제가 있습니다",
    "해당 악기가 없습니다",
    "표절곡이 없거나 파일 생성에 문제가 있습니다",
  ];

  const handleDeleteResult = async (id) => {
    const confirmSubmit = window.confirm(t("request.confirmDelete"));
    if (confirmSubmit) {
      try {
        await deleteResult(id);
        fetchData();
      } catch (error) {
        console.error("delete front error: ", error);
      }
    }
  };

  return (
    <div className="mx-auto px-5 w-[375px] desktop:w-[960px] py-[150px] font-[Pretendard] leading-[normal]">
      <Notify />
      {/* Title 및 검색 하십시오.. */}
      <div className="gap-[26px] flex desktop:flex-row flex-col desktop:items-center mb-9 desktop:h-10">
        <h1 className="text-[24px] leading-[28px] font-semibold text-[#171923]">
          {t("result.my")}
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
      </div>

      {/* 선택 버튼 */}
      <div className="flex w-[326px] desktop:w-[920px] h-14 items-center desktop:gap-6 gap-4">
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
                className={`h-7 text-sm leading-5 font-semibold  desktop:px-3 px-2.5 py-1 items-center justify-center ${
                  inst === item ? "rounded-[9999px] text-[#171923] bg-[#E2E8F0]" : "text-[#999DA1]"
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
        <div className="w-[920px] h-10 hidden desktop:flex mx-auto items-center text-[#828487] text-sm font-medium border-y-[1px] border-[#E5E8EB]">
          <div className="w-[460px] pl-7 pr-3">Name</div>
          <div className="w-[160px] px-3">Type</div>
          <div className="w-[120px] px-3">Upload Date</div>
          <div className="w-[120px] px-3">Progress</div>
          <div className="w-[60px] px-3">Delete</div>
        </div>
      ) : (
        <div className="w-[920px] h-10 hidden desktop:flex mx-auto items-center text-[#828487] text-sm font-medium border-y-[1px] border-[#E5E8EB]">
          <div className="w-[460px] pl-7 pr-3">이름</div>
          <div className="w-[160px] px-3">타입</div>
          <div className="w-[120px] px-3">업로드 날짜</div>
          <div className="w-[120px] px-3">진행상황</div>
          <div className="w-[60px] px-3">삭제</div>
        </div>
      )}

      {filteredData ? (
        <Pagination
          data={filteredData}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          renderItem={(item, index) => {
            // Date 객체로 변환
            const date = new Date(item.requested_at);

            // 사용자의 지역 시간대에 맞춰 포맷팅
            const options = {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              // hour: "2-digit",
              // minute: "2-digit",
              // second: "2-digit",
              // hour12: false,
              // timeZoneName: "short",
            };
            const formatter = new Intl.DateTimeFormat(i18n.language, options).format(date);
            const formattedDate = formatter.replace(/\s+/g, "");

            return (
              <React.Fragment>
                <div
                  key={`desktop-${item.id}`}
                  className="hidden desktop:flex w-[920px] h-[60px] mx-auto items-center text-[#171923] text-sm font-medium border-b-[1px] border-[#E5E8EB] hover:bg-[#ECF2F8]">
                  <button
                    className="w-[460px] h-[60px] pl-7 pr-3 text-start"
                    onClick={() => navigate(getLangUrl("/detail/" + item.id))}
                    disabled={item.status !== "완료"}>
                    {item.title === "처리 대기 중" || item.title === "업로드 중"
                      ? t(`result.${item.title}`)
                      : item.title}
                  </button>
                  <div className="w-[160px] px-3">{t(`home.${item.inst}`)}</div>
                  <div className="w-[120px] px-3">{formattedDate}</div>
                  <div className="w-[120px] px-3">
                    {isNaN(item.status)
                      ? t(`result.${item.status}`)
                      : t("result.percent") + item.status + "%"}
                  </div>
                  <button
                    onClick={() => handleDeleteResult(item.id)}
                    className="w-[60px] px-3 text-red-600"
                    disabled={!errorMessage.includes(item.status)}
                    hidden={!errorMessage.includes(item.status)}>
                    X
                  </button>
                </div>
                <div
                  key={`mobile-${item.id}`}
                  className="flex flex-col desktop:hidden w-[326px]  py-6 px-3 gap-2.5 mx-auto text-[#171923] text-sm font-medium border-b-[1px] border-[#E5E8EB] hover:bg-[#ECF2F8]">
                  <button
                    className="w-[302px] text-start"
                    onClick={() => navigate(getLangUrl("/detail/" + item.id))}
                    disabled={item.status !== "완료"}>
                    {item.title === "처리 대기 중" || item.title === "업로드 중"
                      ? t(`result.${item.title}`)
                      : item.title}
                  </button>
                  <div className="flex w-[302px] items-center justify-center">
                    <div className="w-20 pr-2 text-nowrap">{t(`home.${item.inst}`)}</div>
                    <div className="h-3 w-px bg-[#E3E3E3] self-center" />
                    <div className="px-2 w-24 text-center">{formattedDate}</div>
                    <div className="h-3 w-px bg-[#E3E3E3]" />

                    <div className="px-1">
                      {isNaN(item.status)
                        ? t(`result.${item.status}`)
                        : t("result.percent") + item.status + "%"}
                    </div>

                    <div className="flex items-center ml-auto">
                      <div className="h-3 mr-2 w-px bg-[#E3E3E3]" />
                      <button
                        onClick={() => handleDeleteResult(item.id)}
                        className=" pl-2 text-red-600"
                        disabled={!errorMessage.includes(item.status)}
                        hidden={!errorMessage.includes(item.status)}>
                        X
                      </button>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
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
  );
};

const Notify = () => {
  const { i18n } = useTranslation();
  return (
    <div className="bg-gray-600 p-4 flex items-center space-x-2 mb-10 rounded-2xl">
      {i18n.language === "en" ? (
        <div className="flex-grow text-white items-center text-center">
          Welcome to beta test version of AIMIPP!
          <br />
          <br />
          The Checking will take about 10 minutes, but it may take longer if there are many
          applicants.
          <br />
          <br />
          If errors persist, please apply through a one-on-one support. email.
          <br />
          <br />
          You can only request up to 10 songs within 24 hours per account.
        </div>
      ) : (
        <div className="flex-grow text-white items-center text-center">
          AIMIPP 표절 검사 시스템 베타 테스트 버전에 오신 것을 환영합니다!
          <br />
          <br />
          검사는 10분 내외, 혹은 신청자가 많다면 더 오래 걸릴 수도 있습니다.
          <br />
          <br />
          오류가 지속적으로 생긴다면, 1대1 문의하기를 통해 신청해주세요.
          <br />
          <br />한 계정당 24시간 이내에 10번의 곡만 신청할 수 있습니다.
        </div>
      )}
    </div>
  );
};

export default Result;
