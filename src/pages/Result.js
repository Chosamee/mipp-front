import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/views/Pagination";
import LoadingSpinner from "../components/views/LoadingSpinner";
import { setData } from "../store/Store.js";
import { useDispatch } from "react-redux";
import { fetchResults } from "../api/resultService.js";
import { getLangUrl } from "locales/utils";
import { useTranslation } from "react-i18next";

const Result = () => {
  const dispatch = useDispatch();
  const [resultData, setresultData] = useState([]);
  const itemsPerPage = 10;
  const { t } = useTranslation();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchResults();
        setresultData(data);
        dispatch(setData(data));
      } catch (error) {
        console.error("Error:", error);
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
    <div className="container mx-auto xl:mt-32 md:mt-48 mt-32 px-5 max-w-7xl">
      <div className="bg-gray-600 p-4 flex items-center space-x-2 mb-10 rounded-2xl">
        <div className="flex-grow text-white items-center text-center">
          AIMIPP 표절 검사 시스템 베타 테스트 버전에 오신 것을 환영합니다! <br />
          Welcome to beta test version of AIMIPP!
          <br />
          <br />
          검사는 10분 내외, 혹은 신청자가 많다면 더 오래 걸릴 수도 있습니다.
          <br />
          The Checking will take about 10 minutes, but it may take longer if there are many
          applicants.
          <br />
          <br />
          오류가 지속적으로 생긴다면, 1대1 문의하기를 통해 신청해주시면 Mail을 보내드리겠습니다.
          <br />
          If errors persist, please apply through a one-on-one support, and we will send you an
          email.
          <br />
          <br />
          한 계정당 24시간 이내에 10번의 곡만 신청할 수 있습니다.
          <br />
          You can only request up to 10 songs within 24 hours per account.
        </div>
      </div>
      <h1 className="mb-10">{t("result.my")}</h1>
      <div>
        <button
          onClick={() => {
            setInst("");
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none shadow">
          All
        </button>
        <button
          onClick={() => {
            setInst("vocal");
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none shadow">
          Vocal
        </button>
        <button
          onClick={() => {
            setInst("melody");
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none shadow">
          Melody
        </button>
        <button
          onClick={() => {
            setInst("bass");
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none shadow">
          Bass
        </button>
      </div>
      {filteredData ? (
        <Pagination
          data={filteredData}
          itemsPerPage={itemsPerPage}
          renderItem={(item, index) => (
            <div
              key={index}
              className="bg-blue-200 p-4 flex items-center space-x-2 mb-2 rounded-2xl">
              <div className="flex-grow text-blue-800 items-center" style={{ flexBasis: "65%" }}>
                <span>{item.title}</span>
              </div>
              <div style={{ flexBasis: "10%" }}></div>
              <div className="flex-grow items-center justify-center" style={{ flexBasis: "10%" }}>
                <span className="font-bold text-blue-800">{item.inst}</span>
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
          )}
        />
      ) : (
        <LoadingSpinner />
      )}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded w-full"
          placeholder={t("searchGuide") + searchType}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <select
          className="p-2 border border-gray-300 rounded w-1/4"
          onChange={(e) => setSearchType(e.target.value)}
          value={searchType}>
          <option value="title">제목</option>
        </select>
      </div>
    </div>
  );
};

export default Result;
