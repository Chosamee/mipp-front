import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "components/views/Pagination";
import LoadingSpinner from "components/views/LoadingSpinner";
import { fetchResults } from "api/resultService.js";
import { getLangUrl } from "locales/utils";
import { useTranslation } from "react-i18next";
import { useAuth } from "components/auth/AuthContext";

import loupe from "assets/result/loupe.svg";
import down_vector from "assets/result/down_vector.svg";

const Result = () => {
  const [resultData, setresultData] = useState([]);
  const itemsPerPage = 10;
  const { t, i18n } = useTranslation();
  const { updateAuthState } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
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

    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 검색 기능
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchType, setSearchType] = useState("title");
  const [inst, setInst] = useState("");

  const filteredData = searchKeyword
    ? inst
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
    : inst
    ? resultData.filter((item) => item[searchType] && item["inst"] === inst)
    : resultData;

  return (
    <div className="mx-auto px-5 w-[960px] py-[150px] font-[Pretendard] leading-[normal]">
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

      {/* Title 및 검색 하십시오.. */}
      <div className="gap-[26px] flex items-center mb-9 h-10">
        <h1 className="text-[24px] leading-[28px] font-semibold">{t("result.my")}</h1>
        <div className="w-[360px] gap-[14px] h-10 flex rounded-[6px] items-center border-[#E0E4E8] border-[1px]">
          <input
            className="overflow-ellipsis text-[14px] font-medium leading-[18px] tracking-[0.203px] w-[291px] focus:outline-none ml-4"
            type="text"
            placeholder={`${t("search.guide")}`}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <img src={loupe} alt="Loupe" />
        </div>
      </div>

      {/* 선택 버튼 */}
      <div className="flex w-[920px] h-14 items-center gap-6">
        <div className="py-1 gap-[10px] flex">
          <button>
            <img src={down_vector} alt="Vector" />
          </button>
          <div className="text-[14px] text-center font-medium leading-[20px]">
            {i18n.language === "en" ? "Latest" : "최신순"}
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => {
            setInst("");
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none shadow w-1/4">
          All
        </button>
        <button
          onClick={() => {
            setInst("boundary");
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none shadow w-1/4">
          {t("home.boundary")}
        </button>
        <button
          onClick={() => {
            setInst("vocal");
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none shadow w-1/4">
          {t("home.vocal")}
        </button>
        <button
          onClick={() => {
            setInst("melody");
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none shadow w-1/4">
          {t("home.melody")}
        </button>
      </div>
      {filteredData ? (
        <Pagination
          data={filteredData}
          itemsPerPage={itemsPerPage}
          renderItem={(item, index) => {
            // Date 객체로 변환
            const date = new Date(item.requested_at);

            // 사용자의 지역 시간대에 맞춰 포맷팅
            const options = {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false,
              // timeZoneName: "short",
            };
            const formattedDate = new Intl.DateTimeFormat(i18n.language, options).format(date);
            return (
              <div
                key={index}
                className="bg-blue-200 p-4 flex items-center space-x-2 mb-2 rounded-2xl">
                <div className="flex-grow text-blue-800 items-center" style={{ flexBasis: "50%" }}>
                  <span>
                    {item.title === "처리 대기 중" || item.title === "업로드 중"
                      ? t(`result.${item.title}`)
                      : item.title}
                  </span>
                </div>
                <div style={{ flexBasis: "3%" }}></div>
                <div className="flex-grow text-blue-800 items-center" style={{ flexBasis: "15%" }}>
                  <span>{formattedDate}</span>
                </div>
                <div style={{ flexBasis: "2%" }}></div>
                <div className="flex-grow items-center justify-center" style={{ flexBasis: "15%" }}>
                  <span className="font-bold text-blue-800">{t(`home.${item.inst}`)}</span>
                </div>
                <div className="flex-grow items-center justify-center" style={{ flexBasis: "15%" }}>
                  <span className="font-bold text-blue-800">
                    {isNaN(item.status)
                      ? t(`result.${item.status}`)
                      : t("result.percent") + item.status + "%"}
                  </span>
                </div>
                <button
                  onClick={() => navigate(getLangUrl("/detail/" + item.id))}
                  className="flex-grow bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded focus:outline-none shadow"
                  style={{ flexBasis: "10%" }}
                  disabled={item.status !== "Complete" && item.status !== "완료"}>
                  {t("detail")}
                </button>
              </div>
            );
          }}
        />
      ) : (
        <LoadingSpinner />
      )}
      {/* search */}
      <div className="flex gap-2 mb-4 mt-2">
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
      </div>
    </div>
  );
};

export default Result;
