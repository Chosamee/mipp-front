import React, { useState, useEffect } from "react";
import { loadTokenFromLocalStorage } from "../util/HandleToken";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import LoadingSpinner from "../components/LoadingSpinner";
import { setData } from "../util/Store.js";
import { useDispatch } from "react-redux";

const Mypage = () => {
  const dispatch = useDispatch();
  const [resultData, setresultData] = useState([]);
  const itemsPerPage = 10;

  const navigate = useNavigate();
  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_MIPP_API_URL + "/result";

    const fetchData = () => {
      const token = loadTokenFromLocalStorage();
      const formData = new FormData();
      formData.append("token", token);
      axios
        .post(apiUrl, formData)
        .then((response) => {
          console.log(response);
          setresultData(response.data.index);
          dispatch(setData(response.data.index));
          console.log(response.data.index);
        })
        .catch((error) => {
          console.error("Error: 잘못된 접근", error);
        });
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
    <div className="container my-10">
      <h1 className="my-10">내 신청</h1>
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
          handleNavLinkClick={handleNavLinkClick}
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

export default Mypage;
