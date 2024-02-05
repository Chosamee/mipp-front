import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/views/Pagination";
import LoadingSpinner from "../../components/views/LoadingSpinner";
import { fetchAsks } from "../../api/askService";
import { getLangUrl } from "locales/utils";
import { useTranslation } from "react-i18next";
import { useAuth } from "components/auth/AuthContext";

const Asks = () => {
  const [resultData, setResultData] = useState([]);
  const itemsPerPage = 10;
  const { t, i18n } = useTranslation();
  const { updateAuthState } = useAuth();

  const navigate = useNavigate();
  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAsks();
        setResultData(response);
      } catch (error) {
        console.error("Error:", error);
        updateAuthState({ isLoggedIn: false });
        navigate(getLangUrl("/login"));
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                  <span className="font-bold text-blue-800">{t(`ask.${item.responsed}`)}</span>
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
