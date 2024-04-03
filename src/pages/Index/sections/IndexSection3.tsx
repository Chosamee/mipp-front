import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import realArrow from "assets/index/section3/Group 300.svg";
import rule from "assets/index/section3/Group 303.svg";
import tech from "assets/index/section3/Group 304.svg";
import { getLangUrl } from "locales/utils";

const IndexSection3 = () => {
  const { t } = useTranslation();
  return (
    <div className="flex md:py-[180px] py-20 px-5 2xl:flex-row flex-col items-center md:gap-[86px] gap-[44px] mx-auto w-cp md:w-full md:max-w-2xl lg:w-full lg:max-w-7xl 2xl:max-w-[1400px]">
      {/* Content 1 Start */}
      <div className="flex flex-col justify-center md:items-start items-center gap-[46px] mx-auto 2xl:w-80 md:w-full flex-shrink-0 ">
        <h2 className="md:text-5xl text-3xl md:self-start self-center font-semibold">
          {t("index.3.title")}
        </h2>
        <div className="text-[#777A80] md:text-[22px] text-[16px] font-medium md:self-start self-center md:leading-[38px] leading-[27px] break-keep text-pretty">
          {t("index.3.content1")}
        </div>
        <Link className="flex items-center gap-2" to={getLangUrl("/intro")}>
          <div className="text-[#3B5AFA] text-[19px] font-medium">{t("index.3.more")}</div>
          <img src={realArrow} alt="Real Arrow" className=""></img>
        </Link>
      </div>
      {/* Content 1 End */}
      {/* Content 2 Start */}
      <div className="flex flex-col lg:flex-row gap-[20px] md:gap-5 justify-between w-full">
        {/* First */}
        <div
          className="md:py-[57px] md:px-[40px] p-10 gap-[10px] flex flex-col items-center border-[#D2D8E7] border-[1px]
        rounded-[20px] w-full">
          <div className="md:gap-[30px] gap-[10px] flex flex-col items-start ">
            <img src={rule} alt="Rule" />
            <div className="flex flex-col md:gap-[67px] gap-[12px]">
              <div className="text-[#343434] md:text-[34px] text-[20px] font-semibold leading-[32px]">
                {t("index.3.title2")}
              </div>
              <div className="md:block hidden text-[#777A80] text-[22px] font-medium leading-[36px]">
                {t("index.3.content2")}
              </div>
              <div className="md:hidden text-[#777A80] text-[15px] font-medium leading-[25px]">
                {t("index.3.content2mobile")}
              </div>
            </div>
          </div>
        </div>
        {/* Second */}
        <div
          className="md:py-[57px] md:px-[40px] p-10 gap-[10px] flex flex-col items-center border-[#D2D8E7] border-[1px]
          rounded-[20px] w-full">
          <div className="md:gap-[30px] gap-[10px] flex flex-col items-start ">
            <img src={tech} alt="Tech" />
            <div className="flex flex-col md:gap-[67px] gap-[12px]">
              <div className="text-[#343434] md:text-[34px] text-[20px] font-semibold leading-[32px]">
                {t("index.3.title3")}
              </div>
              <div className="md:block hidden text-[#777A80] md:text-[22px] font-medium leading-[36px]">
                {t("index.3.content3")}
              </div>
              <div className="md:hidden text-[#777A80] text-[15px] font-medium leading-[25px]">
                {t("index.3.content3mobile")}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Content 2 End */}
    </div>
  );
};

export default IndexSection3;
