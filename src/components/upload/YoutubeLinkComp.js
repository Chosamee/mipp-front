import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadMedia } from "../../api/uploadService";

const YoutubeLinkComp = ({ inst, bpm }) => {
  // 유튜브 링크 값 입력 인식
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // routing을 위한 함수
  const navigate = useNavigate();

  // 서버에 전송하는 함수
  const handleSubmit = async () => {
    try {
      await uploadMedia({ url: inputValue, inst: inst, bpm: bpm });
      navigate("/result");
    } catch (error) {
      console.log(error);
      navigate("/home");
    }
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
