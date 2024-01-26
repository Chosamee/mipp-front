import React, { useEffect, useState } from "react";
import FileUploadComp from "../components/upload/FileUploadComp";
import YoutubeLinkComp from "../components/upload/YoutubeLinkComp";
import { useTranslation } from "react-i18next";
import { getRemain } from "api/uploadService";

const Home = () => {
  // 탭 선택
  const [activeTab, setActiveTab] = useState("upload");
  const [inst, setInst] = useState("vocal");
  const [remain, setRemain] = useState();
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRemain();
        setRemain(data.avail_num);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  });
  return (
    <div className="p-6 flex flex-col xl:mt-32 md:mt-48 mt-32 max-w-2xl mx-auto">
      <div className="py-5"> Your Usage Limit: {remain} / 10</div>
      <div className="text-start mb-5">{t("home.step1")}</div>
      <div className="flex md:flex-row flex-col justify-center md:space-x-2 mb-4 w-full max-w-2xl">
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
      <div className="flex md:flex-row flex-col justify-center md:space-x-2 mb-4 w-full max-w-2xl">
        <button
          onClick={() => setInst("boundary")}
          className={`px-4 py-2 text-sm font-semibold rounded-md md:w-1/3 w-full shadow-lg transition-shadow duration-300 ${
            inst === "boundary" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}>
          {t("home.boundary")}
        </button>
        <button
          onClick={() => setInst("vocal")}
          className={`px-4 py-2 text-sm font-semibold rounded-md md:w-1/3 w-full shadow-lg transition-shadow duration-300 ${
            inst === "vocal" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}>
          {t("home.vocal")}
        </button>
        <button
          onClick={() => setInst("melody")}
          className={`px-4 py-2 text-sm font-semibold rounded-md md:w-1/3 w-full shadow-lg transition-shadow duration-300 ${
            inst === "melody" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
          }`}>
          {t("home.melody")}
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
