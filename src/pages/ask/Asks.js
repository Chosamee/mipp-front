import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/views/Pagination";
import LoadingSpinner from "../../components/views/LoadingSpinner";
import { fetchAsks } from "../../api/askService";
import { getLangUrl } from "locales/utils";

const Asks = () => {
  const [resultData, setResultData] = useState([]);
  const itemsPerPage = 10;

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
    <div className="container mx-auto max-w-7xl p-5 xl:mt-32 md:mt-48 mt-32 ">
      <div className="flex justify-between ">
        <h1 className="mb-10">내 문의 (My doors 아님)</h1>
        <button
          onClick={() => {
            navigate(getLangUrl("/asks/create"));
          }}>
          문의하기
        </button>
      </div>

      {filteredData ? <div>총 {Object.keys(filteredData).length} 개</div> : <div></div>}
      {filteredData ? (
        <Pagination
          data={filteredData}
          itemsPerPage={itemsPerPage}
          renderItem={(item, index) => (
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
                <span className="font-bold text-blue-800">{item.responsed}</span>
              </div>
              <div className="flex-grow text-blue-800 items-center" style={{ flexBasis: "25%" }}>
                <span className="font-bold text-blue-800">{item.requested_at}</span>
              </div>
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
          placeholder={`검색어를 입력하세요 (${searchType})`}
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

export default Asks;
