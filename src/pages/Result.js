import React, { useState, useEffect } from "react";
import {
  loadTokenFromLocalStorage,
  removeTokenFromLocalStorage,
} from "../util/HandleToken";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";

const Mypage = () => {
  const [resultData, setresultData] = useState(null);
  const itemsPerPage = 10;

  const navigate = useNavigate();
  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_MIPP_API_URL + "/result";
    const token = loadTokenFromLocalStorage();
    const formData = new FormData();
    formData.append("token", token);
    axios
      .post(apiUrl, formData)
      .then((response) => {
        console.log(response);
        setresultData(response.data.index);
        console.log(response.data.index);
      })
      .catch((error) => {
        console.error("Error: 잘못된 접근", error);
        removeTokenFromLocalStorage();
      });
  }, []);

  return (
    <div className="container my-10">
      <h1 className="my-10">내 정보</h1>
      {resultData ? (
        <Pagination
          data={resultData}
          itemsPerPage={itemsPerPage}
          handleNavLinkClick={handleNavLinkClick}
        />
      ) : (
        <p>정보를 불러오는 중...</p>
      )}
    </div>
  );
};

export default Mypage;
