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
      });
  };

  return (
    <div className="flex flex-col mx-auto">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="p-1 mx-2 rounded-lg"
      />
      <button
        onClick={handleSubmit}
        className="p-1 mt-4  rounded-lg
        bg-blue-300 hover:bg-blue-500">
        서버에 전송
      </button>
    </div>
  );
};

export default YoutubeLinkComp;
