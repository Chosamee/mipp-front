import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Pagination from "../../../backup/Pagination_Prev";
import LoadingSpinner from "../../../components/views/LoadingSpinner";
import { fetchAsks } from "../../../api/askService";
import { getLangUrl } from "locales/utils";
import { useTranslation } from "react-i18next";
import { useAuth } from "components/auth/AuthContext";

const Asks = () => {
  const [resultData, setResultData] = useState([]);
  const itemsPerPage = 10;
  const { t, i18n } = useTranslation();
  const { updateAuthState } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAsks();
        console.log(response);
        setResultData(response ? response : []);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const queryParams = new URLSearchParams(location.search);
  const [currentPage, setCurrentPage] = useState(parseInt(queryParams.get("page") || "1", 10));

  // URL 파라미터로부터 currentPage 값을 초기화
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const urlPage = parseInt(queryParams.get("page"), 10) || 1;

    // URL에서 읽은 값이 현재 상태와 다를 경우에만 상태를 업데이트합니다.
    if (urlPage !== currentPage) {
      setCurrentPage(urlPage);
    }
  }, [location.search]); // location.search가 변경될 때마다 실행됩니다.

  // currentPage 값이 변경될 때만 실행되는 useEffect
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (currentPage !== 1) params.set("page", currentPage);
    else params.delete("page"); // 1페이지인 경우 page 파라미터를 URL에서 제거합니다.
    navigate({ pathname: location.pathname, search: params.toString() }, { replace: true });
  }, [currentPage]); // 의존성 배열에 currentPage만 포함시켜 currentPage 값이 변경될 때만 이 useEffect가 실행되도록 합니다.

  // 검색 기능
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchType, setSearchType] = useState("title");

  const filteredData = searchKeyword
    ? resultData.filter(
        (item) =>
          item[searchType] && item[searchType].toLowerCase().includes(searchKeyword.toLowerCase())
      )
    : resultData;

  return (
    <div className="container mx-auto max-w-7xl p-5 pt-32">
      <div className="flex justify-between ">
        <h1 className="mb-10">{t("ask.myask")}</h1>
        <button
          onClick={() => {
            navigate(getLangUrl("/asks/create"));
          }}
          className="border-2 px-2 rounded-xl">
          {t("ask.submit")}
        </button>
      </div>

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
                <div
                  onClick={() => {
                    handleNavLinkClick(getLangUrl(`/asks/detail/${item.id}`));
                  }}
                  className="flex-grow text-blue-800 items-center"
                  style={{ flexBasis: "60%" }}>
                  <span className="font-bold text-blue-800">{item.title}</span>
                </div>
                <div className="flex-grow text-blue-800 items-center" style={{ flexBasis: "15%" }}>
                  <span className="font-bold text-blue-800">
                    {!item.is_responsed ? t(`ask.답변 대기중`) : t(`ask.답변 완료`)}
                  </span>
                </div>
                <div className="flex-grow text-blue-800 items-center" style={{ flexBasis: "25%" }}>
                  <span className="font-bold text-blue-800">{formattedDate}</span>
                </div>
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

export default Asks;
