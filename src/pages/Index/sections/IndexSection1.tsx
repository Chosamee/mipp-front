import React from "react";
import step1 from "assets/index/section1/Group 305.svg";
import step2 from "assets/index/section1/Group 306.svg";
import step3 from "assets/index/section1/Group 307.svg";
import step4 from "assets/index/section1/Group 308.svg";
import { useTranslation } from "react-i18next";

const IndexSection1 = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-cp md:w-full md:py-[150px] py-20 px-5 items-center md:gap-[78px] gap-[30px] mx-auto">
      <h2 className="flex p-2 justify-center items-center gap-2 md:text-5xl text-[28px] font-bold">
        {t("index.2.title")}
      </h2>
      <div className="flex md:flex-row flex-col text-[#2E2E2E] items-center 2xl:gap-32 xl:gap-20 lg:gap-14 md:gap-3 gap-5 flex-shrink-0">
        <div className="flex 2xl:gap-32 xl:gap-20 lg:gap-14 md:gap-3 gap-5 flex-shrink-0 items-center h-44 justify-between w-full md:w-fit">
          <StepContent num={1} />
          <div className="w-px h-40 bg-[#E5E5E5] flex-shrink-0" />
          <StepContent num={2} />
        </div>
        <div className="w-px h-40 bg-[#E5E5E5] flex-shrink-0 hidden md:block" />
        <div className="flex gap-[33px] md:hidden ">
          <div className="h-px w-[140px] bg-[#E5E5E5] flex-shrink-0" />
          <div className="h-px w-[140px] bg-[#E5E5E5] flex-shrink-0" />
        </div>
        <div className="flex 2xl:gap-32 xl:gap-20 lg:gap-14 md:gap-3 gap-5 flex-shrink-0 items-center h-44 justify-between w-full md:w-fit">
          <StepContent num={3} />
          <div className="w-px h-40 bg-[#E5E5E5] flex-shrink-0" />
          <StepContent num={4} />
        </div>
      </div>
    </div>
  );
};

const StepContent = ({ num }: { num: number }) => {
  const { t } = useTranslation();
  const imageList = [step1, step2, step3, step4];
  return (
    <div className="flex flex-col items-center flex-shrink-0 justify-between h-full w-32 md:w-40">
      <StepIndicator num={num} />
      <img src={imageList[num - 1]} alt={`Step${num}`} />
      <div className="md:text-xl text-base text-nowrap">{t(`index.2.step${num}`)}</div>
    </div>
  );
};

const StepIndicator = ({ num }: { num: number }) => {
  return (
    <div className="flex items-center gap-[6px] text-[20px] font-semibold">
      STEP
      <div className="flex relative flex-shrink-0 w-6 h-6 bg-[#4965FB] rounded-full items-center justify-center">
        <div className="text-white text-[17px] font-semibold">{num}</div>
      </div>
    </div>
  );
};

export default IndexSection1;
