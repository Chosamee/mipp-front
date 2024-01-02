import React, { useState } from "react";
import FileUploadComp from "../components/upload/FileUploadComp";
import YoutubeLinkComp from "../components/upload/YoutubeLinkComp";
import { useTranslation } from "react-i18next";

const Home = () => {
  // 탭 선택
  const [activeTab, setActiveTab] = useState("upload");
  const [inst, setInst] = useState("vocal");
  const { t } = useTranslation();
  return (
    <div className="p-6 flex flex-col mt-32 max-w-2xl mx-auto">
      <div className="text-start mb-5">{t("home.step1")}</div>
      <div className="flex md:flex-row flex-col justify-center space-x-2 mb-4 w-full max-w-2xl">
        <button
          onClick={() => setActiveTab("upload")}
          className={`px-4 py-2 text-sm font-semibold rounded-md w-full shadow-lg transition-shadow duration-300 ${
            activeTab === "upload" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}>
          {t("home.option1-1")}
        </button>
        <button
          onClick={() => setActiveTab("link")}
          className={`px-4 py-2 text-sm font-semibold rounded-md w-full shadow-lg transition-shadow duration-300 ${
            activeTab === "link" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}>
          {t("home.option1-2")}
        </button>
      </div>
      <div className="text-start mb-5">{t("home.step2")}</div>
      <div className="flex md:flex-row flex-col justify-center space-x-2 mb-4 w-full max-w-2xl">
        <button
          onClick={() => setInst("vocal")}
          className={`px-4 py-2 text-sm font-semibold rounded-md md:w-1/3 w-full shadow-lg transition-shadow duration-300 w-full ${
            inst === "vocal" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}>
          {t("home.option2-1")}
        </button>
        <button
          onClick={() => setInst("melody")}
          className={`px-4 py-2 text-sm font-semibold rounded-md md:w-1/3 w-full shadow-lg transition-shadow duration-300 ${
            inst === "melody" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}>
          {t("home.option2-2")}
        </button>
        <button
          onClick={() => setInst("bass")}
          className={`px-4 py-2 text-sm font-semibold rounded-md md:w-1/3 w-full shadow-lg transition-shadow duration-300 ${
            inst === "bass" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}>
          {t("home.option2-3")}
        </button>
      </div>

      <div className="mx-auto p-6 my-auto max-w-2xl w-full flex flex-col justify-center">
        {activeTab === "upload" && <FileUploadComp inst={inst} />}
        {activeTab === "link" && <YoutubeLinkComp inst={inst} />}
      </div>
    </div>
  );
};

export default Home;
