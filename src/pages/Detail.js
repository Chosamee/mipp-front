import { useEffect, useState } from "react";
import React from "react";
import { loadTokenFromLocalStorage } from "../util/HandleToken";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const Detail = () => {
  const { id } = useParams();
  const [resultData, setresultData] = useState();
  useEffect(() => {
    const apiUrl = process.env.REACT_APP_MIPP_API_URL + "/detail";
    const token = loadTokenFromLocalStorage();
    const formData = new FormData();
    formData.append("token", token);
    formData.append("music_id", parseInt(id, 10));
    axios
      .post(apiUrl, formData)
      .then((response) => {
        console.log(response.data);
        setresultData(response.data.results);
      })
      .catch((error) => {
        console.error("Error: 유효하지 않은 토큰. 로그인 후 사용해주세요", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 파일 다운로드
  const handleDownload = async (filepath) => {
    const downUrl = process.env.REACT_APP_MIPP_API_URL + "/download";
    const formData = new FormData();
    formData.append("filepath", filepath);
    axios
      .post(downUrl, formData, {
        responseType: "blob", // 중요: 서버의 응답을 Blob으로 처리',
      })
      .then((response) => {
        // Blob 데이터를 이용하여 다운로드 링크 생성
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filepath + ".ppt"); // 파일명 설정
        document.body.appendChild(link);
        link.click();

        // 사용 후 링크 제거 및 URL 해제
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error("Download error:", error));
  };
  return (
    <div className="container my-10">
      <h1 className="my-10">상세 정보</h1>
      {resultData ? (
        resultData.map((item, index) => (
          <div key={index} className="text-lg container h-20 bg-blue-300 my-2 grid">
            <button
              className=""
              onClick={() => {
                handleDownload(item.path);
              }}>
              {item.path}
            </button>
          </div>
        ))
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default Detail;
