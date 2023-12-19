import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FileUploadComp from "../components/upload/FileUploadComp";
import YoutubeLinkComp from "../components/upload/YoutubeLinkComp";
import { useAuth } from "../util/AuthContext";

const Home = () => {
  const apiUrl = process.env.REACT_APP_MIPP_API_URL + "/classify";
  // 탭 선택
  const [activeTab, setActiveTab] = useState("upload");
  const [inst, setInst] = useState("vocal");
  const { authState } = useAuth();

  return (
    <div className="p-6 flex flex-col items-center justify-center">
      <div className="flex justify-center space-x-2 mb-4 mt-20 w-full max-w-2xl">
        <button
          onClick={() => setActiveTab("upload")}
          className={`px-4 py-2 text-sm font-semibold rounded-md w-full ${
            activeTab === "upload" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}>
          .wav Upload
        </button>
        <button
          onClick={() => setActiveTab("link")}
          className={`px-4 py-2 text-sm font-semibold rounded-md w-full ${
            activeTab === "link" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}>
          Youtube / Soundcloud Link
        </button>
      </div>
      <div className="flex justify-center space-x-2 mb-4 w-full max-w-2xl">
        <button
          onClick={() => setInst("vocal")}
          className={`px-4 py-2 text-sm font-semibold rounded-md w-1/3 ${
            inst === "vocal" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}>
          vocal
        </button>
        <button
          onClick={() => setInst("melody")}
          className={`px-4 py-2 text-sm font-semibold rounded-md w-1/3 ${
            inst === "melody" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}>
          melody
        </button>
        <button
          onClick={() => setInst("bass")}
          className={`px-4 py-2 text-sm font-semibold rounded-md w-1/3 ${
            inst === "bass" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}>
          bass
        </button>
      </div>
      <div className="mx-auto p-6 my-auto max-w-2xl w-full">
        {activeTab === "upload" && <FileUploadComp apiUrl={apiUrl} inst={inst} />}
        {activeTab === "link" && <YoutubeLinkComp apiUrl={apiUrl} inst={inst} />}
      </div>
    </div>
  );
};

export default Home;
