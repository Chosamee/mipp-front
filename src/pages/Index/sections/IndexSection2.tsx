import React from "react";
import { useTranslation } from "react-i18next";
import TestReportImg from "../components/TestReportImg";
import FindPlagiarismImg from "../components/FindPlagiarismImg";
import IncomeImg from "../components/IncomeImg";

const IndexSection2 = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#F4F6FA] w-full">
      <div className="flex flex-col items-center md:gap-[90px] md:py-[160px] py-20 px-5 mx-auto w-cp md:w-full md:max-w-7xl">
        <h2 className="md:text-[50px] text-[28px] text-center font-semibold md:leading-[68px] leading-[38px] md:mb-0 mb-7">
          {t("index.1.title")}
        </h2>
        <div className="flex flex-col items-center md:gap-[100px] gap-[50px] mx-auto w-full">
          {/* Content 1 Start */}
          <div className="flex lg:flex-row flex-col md:items-center w-fit md:w-full md:justify-between gap-12 md:gap-10">
            <TestReportImg />
            <ContentText num={1} />
          </div>
          {/* Content 1 End */}
          {/* Content 2 Start */}
          <div className="flex lg:flex-row flex-col md:items-center w-fit md:w-full md:justify-between gap-12 md:gap-10">
            <div className="lg:hidden">
              <FindPlagiarismImg />
            </div>
            <ContentText num={2} />
            <div className="lg:flex hidden">
              <FindPlagiarismImg />
            </div>
          </div>
          {/* Content 2 End */}
          {/* Content 3 Start */}
          <div className="flex lg:flex-row flex-col md:items-center w-fit md:w-full md:justify-between gap-12 md:gap-10">
            <IncomeImg />
            <ContentText num={3} />
          </div>
          {/* Content 3 End */}
        </div>
      </div>
    </div>
  );
};

const ContentText = ({ num }: { num: number }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:items-start self-start md:self-center gap-[10px] md:min-w-[400px] md:w-[500px] flex-shrink">
      <div className="md:text-[34px] text-[22px] font-semibold leading-[32px] text-[#2E2E2E] py-[10px]">
        {t(`index.1.subtitle${num}`)}
      </div>
      <div className="md:text-[22px] md:leading-[35px] text-[15px] leading-[25px] text-[#7A7A7A] py-[10px] font-medium break-keep text-balance md:text-pretty">
        {t(`index.1.content${num}`)}
      </div>
    </div>
  );
};
export default IndexSection2;
