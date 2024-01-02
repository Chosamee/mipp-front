import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/views/Pagination";
import LoadingSpinner from "../components/views/LoadingSpinner";
import { setData } from "../store/Store.js";
import { useDispatch } from "react-redux";
import { fetchResults } from "../api/resultService.js";
import { getLangUrl } from "locales/utils";

const Result = () => {
  const dispatch = useDispatch();
  const [resultData, setresultData] = useState([]);
  const itemsPerPage = 10;

  const navigate = useNavigate();
  const handleNavLinkClick = (path) => {
    navigate(path);
  };

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
    <div className="container mx-auto pt-40 max-w-7xl">
      <h1 className="mb-10">내 신청</h1>
      <div>
        <button
          onClick={() => {
            setInst("");
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none shadow">
          모두
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
      {filteredData ? <div>총 {Object.keys(filteredData).length} 개</div> : <div></div>}
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
                <span className="font-bold text-blue-800">{item.status}</span>
              </div>
              <button
                onClick={() => handleNavLinkClick(getLangUrl("/detail/" + item.id))}
                className="flex-grow bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded focus:outline-none shadow"
                style={{ flexBasis: "10%" }}
                disabled={item.status !== "완료"}>
                상세결과
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

export default Result;
