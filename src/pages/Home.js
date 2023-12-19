import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FileUploadComp from "../components/upload/FileUploadComp";
import YoutubeLinkComp from "../components/upload/YoutubeLinkComp";
const Home = () => {
  const apiUrl = process.env.REACT_APP_MIPP_API_URL + "/classify";
  // 탭 선택
  const [activeTab, setActiveTab] = useState("tab1");
  const [inst, setInst] = useState("vocal");

  return (
    <div className="mx-auto w-1/2 bg-gray-300 h-80 my-5 rounded-lg flex-row">
      <div className="grid grid-cols-2 p-4">
        <button
          className={`${activeTab === "tab1" ? "text-blue-500" : ""}`}
          onClick={() => setActiveTab("tab1")}>
          .wav Upload
        </button>
        <button
          className={`${activeTab === "tab2" ? "text-blue-500" : ""}`}
          onClick={() => setActiveTab("tab2")}>
          Youtube Link
        </button>
      </div>
      <div className="h-1 bg-white"></div>
      <div className="grid grid-cols-2 p-4">
        <button
          className={`${inst === "vocal" ? "text-blue-500" : ""}`}
          onClick={() => setInst("vocal")}>
          vocal
        </button>
        <button
          className={`${inst === "melody" ? "text-blue-500" : ""}`}
          onClick={() => setInst("melody")}>
          melody
        </button>
      </div>
      <div className="mx-auto p-6  my-auto">
        {activeTab === "tab1" && <FileUploadComp apiUrl={apiUrl} inst={inst} />}
        {activeTab === "tab2" && (
          <YoutubeLinkComp apiUrl={apiUrl} inst={inst} />
        )}
      </div>
    </div>
  );
};

export default Home;
