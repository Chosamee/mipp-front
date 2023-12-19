import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loadTokenFromLocalStorage } from "../../util/HandleToken";

const YoutubeLinkComp = (props) => {
  const token = loadTokenFromLocalStorage();
  const apiUrl = props.apiUrl;
  // 유튜브 링크 값 입력 인식
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // routing을 위한 함수
  const navigate = useNavigate();

  // 서버에 전송하는 함수
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("url", inputValue);
    formData.append("token", token);
    formData.append("inst", props.inst);
    await axios
      .post(apiUrl, formData)
      .then((response) => {
        // 서버로부터의 응답 처리
        console.log("서버 응답:", response.data);
        // 결과 페이지로 라우팅하면서 state 전달
        navigate("/result", { state: { result: response.data.result } });
      })
      .catch((error) => {
        console.error("서버 요청 오류:", error);
        navigate("/home");
      });
  };

  return (
    <div className="flex flex-col mx-auto">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="주소 입력"
        className="w-full px-4 py-2 border rounded-md mb-4"
      />
      <button
        onClick={handleSubmit}
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2">
        서버에 전송
      </button>
    </div>
  );
};

export default YoutubeLinkComp;
