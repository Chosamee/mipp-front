import React, { useState } from "react";
import FileUploadComp from "../components/upload/FileUploadComp";
import YoutubeLinkComp from "../components/upload/YoutubeLinkComp";

const Home = () => {
  // 탭 선택
  const [activeTab, setActiveTab] = useState("upload");
  const [inst, setInst] = useState("vocal");

  const [bpm, setBpm] = useState("");
  const handleInputChange = (event) => {
    setBpm(event.target.value);
  };

  return (
    <div className="p-6 flex flex-col items-center justify-center pt-40">
      <div className="flex justify-center space-x-2 mb-4 mt-20 w-full max-w-2xl">
        <button
          onClick={() => setActiveTab("upload")}
          className={`px-4 py-2 text-sm font-semibold rounded-md w-full shadow-lg transition-shadow duration-300 ${
            activeTab === "upload" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}>
          .wav Upload
        </button>
        <button
          onClick={() => setActiveTab("link")}
          className={`px-4 py-2 text-sm font-semibold rounded-md w-full shadow-lg transition-shadow duration-300 ${
            activeTab === "link" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}>
          Youtube / Soundcloud Link
        </button>
      </div>
      <div className="flex justify-center space-x-2 mb-4 w-full max-w-2xl">
        <button
          onClick={() => setInst("vocal")}
          className={`px-4 py-2 text-sm font-semibold rounded-md w-1/3 shadow-lg transition-shadow duration-300 ${
            inst === "vocal" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}>
          vocal
        </button>
        <button
          onClick={() => setInst("melody")}
          className={`px-4 py-2 text-sm font-semibold rounded-md w-1/3 shadow-lg transition-shadow duration-300 ${
            inst === "melody" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}>
          melody
        </button>
        <button
          onClick={() => setInst("bass")}
          className={`px-4 py-2 text-sm font-semibold rounded-md w-1/3 shadow-lg transition-shadow duration-300 ${
            inst === "bass" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}>
          bass
        </button>
      </div>
      <div className="mx-auto p-6 my-auto max-w-2xl w-full flex flex-col justify-center">
        <label className="text-center mb-2">
          BPM 잘못 넣으면 진짜 혼나요 큰일나요 이상한 결과가 나와요
        </label>
        <input
          type="text"
          value={bpm}
          onChange={handleInputChange}
          placeholder="BPM 입력 (선택사항)"
          className="w-full px-4 py-2 border border-blue-500 rounded-md mb-4"
        />
        {activeTab === "upload" && <FileUploadComp inst={inst} bpm={bpm} />}
        {activeTab === "link" && <YoutubeLinkComp inst={inst} bpm={bpm} />}
      </div>
    </div>
  );
};

export default Home;
