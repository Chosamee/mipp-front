import React, { useEffect, useState } from "react";
import FileUploadComp from "./components/FileUploadComp";
import YoutubeLinkComp from "./components/YoutubeLinkComp";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getLangUrl } from "locales/utils";
import { getRemain } from "./api";

const Home = () => {
  // 탭 선택
  const [activeTab, setActiveTab] = useState("upload");
  const [inst, setInst] = useState("vocal");
  const [remain, setRemain] = useState();
  const [totalNum, setTotalNum] = useState(10); // [임시] 총 사용가능 횟수 [임시]
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRemain();
        setRemain(data.avail_num);
        setTotalNum(data.total_num);
      } catch (error) {
        console.error("Error:", error);
        navigate(getLangUrl("/"));
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  const SelectMusicType = ({ selected, optionNum }: { selected: string; optionNum: number }) => {
    const { t } = useTranslation();
    const isSelected = inst === selected;
    return (
      <button
        onClick={() => setInst(selected)}
        className={`flex px-5 py-3.5 text-[16px] font-medium rounded-[10px] w-[326px] md:w-[400px] gap-[10px] ${
          isSelected
            ? "shadow-[0_0_0_2px_#3553F3] bg-white text-[#3553F3]"
            : "bg-[#F6F6F6] text-[#A9A9A9]"
        }`}>
        <div
          className={`border-[1px] ${
            isSelected ? "border-[#3553F3]" : "border-[#E6E8ED]"
          } p-[3px] rounded-[100px]`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none">
            <circle cx="5" cy="5.5" r="5" fill={isSelected ? "#3553F3" : "white"} />
          </svg>
        </div>
        <div className="flex gap-4">
          <div>
            {t("home.type")} {optionNum}
          </div>
          <div
            className={`w-px h-[19px] flex-shrink-0 ${
              isSelected ? "bg-[#C0D8FD]" : "bg-[#E0E1E3]"
            }`}
          />
          <div>{t(`home.${selected}`)}</div>
        </div>
      </button>
    );
  };

  return (
    <div className="px-[20px] pb-[70px] md:px-[60px] md:pb-[150px]">
      <div className="flex flex-col w-[335px] md:w-[520px] mx-auto leading-[normal] py-[100px] justify-center items-center">
        <div className="flex flex-col py-6 md:pt-[99px] md:pb-[60px] mx-auto gap-[11px] md:gap-[14px] text-center md:px-5">
          <div
            className="leading-[34px] text-[24px]
          md:leading-[56px] md:text-[40px] font-semibold text-nowrap">
            {t("home.title")}
          </div>
          <div
            className="leading-[27px] text-[16px]
          md:leading-[35px] font-medium md:text-[22px]">
            {t("home.guide")}
          </div>
        </div>

        {/* 음원 타입 선택 */}
        <div className="flex flex-col mb-20 mx-auto py-[100px]">
          <div className="py-5 text-center">
            {" "}
            Your Usage Limit: {remain} / {totalNum}
          </div>

          <div className="text-start mb-[10px] text-[20px] md:text-[22px] font-semibold">
            {t("home.step1")}
          </div>
          <div className="text-start mb-5 text-[17px] text-[#9B9B9B] font-medium hidden md:block">
            {t("home.step1guide")}
          </div>
          <div className="text-start mb-5 text-[15px] leading-[24px] text-[#9B9B9B] font-medium md:hidden">
            {t("home.step1guideMobile")}
          </div>
          <div className="flex flex-col justify-center mb-4 gap-2">
            <SelectMusicType selected={"vocal"} optionNum={1} />
            <SelectMusicType selected={"melody"} optionNum={2} />
            <SelectMusicType selected={"boundary"} optionNum={3} />
          </div>
        </div>

        {/* 업로드 방식 선택 */}
        <div className="flex flex-col mx-auto">
          <div className="text-start text-[20px] mb-[11px] md:text-[22px] font-semibold">
            {t("home.step2")}
          </div>
          <div className="text-start mb-7 text-[17px] text-[#9B9B9B] font-medium hidden md:block">
            {t("home.step2guide")}
          </div>
          <div className="text-start mb-7 text-[15px] leading-[24px]  text-[#9B9B9B] font-medium md:hidden">
            {t("home.step2guideMobile")}
          </div>
          {/* Select Bar */}
          <div className="flex justify-center mb-[30px]">
            <button
              onClick={() => setActiveTab("upload")}
              className={`md:px-[60px] py-3 text-[15px] md:text-[16px] mb-2 font-semibold
              w-[162.5px] md:w-[210px] text-center ${
                activeTab === "upload"
                  ? "shadow-[0_2px_0_0_#3553F3] text-[#3553F3]"
                  : "shadow-[0_2px_0_0_#A9A9A9] text-[#A9A9A9]"
              }`}>
              {t("home.option1-1")}
            </button>
            <button
              onClick={() => setActiveTab("link")}
              className={`md:px-[60px] py-3 text-[15px] md:text-[16px] mb-2 font-semibold
              w-[162.5px] md:w-[210px] text-center ${
                activeTab === "link"
                  ? "shadow-[0_2px_0_0_#3553F3] text-[#3553F3]"
                  : "shadow-[0_2px_0_0_#A9A9A9] text-[#A9A9A9]"
              }`}>
              {t("home.option1-2")}
            </button>
          </div>
          <div className="mx-auto w-full flex flex-col justify-center items-center">
            {activeTab === "upload" && <FileUploadComp inst={inst} />}
            {activeTab === "link" && <YoutubeLinkComp inst={inst} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
