import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "components/auth/AuthContext";
import { useTranslation } from "react-i18next";
import { getLangUrl } from "locales/utils";
import main from "assets/index/main.png";

// section 1 assets
import circle from "assets/index/section1/Ellipse 18.svg";
import step1 from "assets/index/section1/Group 305.svg";
import step2 from "assets/index/section1/Group 306.svg";
import step3 from "assets/index/section1/Group 307.svg";
import step4 from "assets/index/section1/Group 308.svg";

// section 2 assets
import arrow from "assets/index/section2/Polygon 14.svg";
import left_elipse from "assets/index/section2/cont1/Ellipse 33.svg";
import right_elipse from "assets/index/section2/cont1/Ellipse 34.svg";

import worldMap from "assets/index/section2/cont2/WorldMap.png";
import circle2 from "assets/index/section2/cont2/Ellipse 36.svg";

import circle3 from "assets/index/section2/cont3/Ellipse 37.svg";

// section 3 assets
import realArrow from "assets/index/section3/Group 300.svg";
import rule from "assets/index/section3/Group 303.svg";
import tech from "assets/index/section3/Group 304.svg";

// section 4 assets
import lockSvg from "assets/index/Group 294.svg";
//style="background: linear-gradient(0deg, #000000cf 5%, #000000ba 40%, #000000b0 58%, #0000008f 70%);
// bg-opacity-50 bg-black
const App = () => {
  const { authState } = useAuth();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen items-center desktop:pt-[132px] pt-[106px] leading-[normal]">
      {/** Section 1 Start */}
      <div className="relative flex flex-col w-full desktop:h-[620px] h-[340px] py-[100px] gap-[10px] desktop:rounded-[45px] justify-center">
        {/* Background Image Start */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 desktop:rounded-[45px]"
          style={{ backgroundImage: `url(${main})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-60 desktop:rounded-[45px]"></div>
        </div>
        {/* Background Image End */}
        {/* Content Start */}
        <div className="flex flex-col justify-center items-center desktop:gap-[54px] gap-[20px] z-10">
          <div className="flex flex-col items-center desktop:gap-[34px] gap-[11px]">
            <div className="text-white font-bold desktop:text-[70px] text-[32px] text-center">
              {t("index.mainTitle")}
            </div>
            <div className="text-white text-[25px] leading-[34px] text-center hidden desktop:block">
              {t("index.mainIntro")}
            </div>
            <div className="text-white text-[15px]  leading-[25px] text-center desktop:hidden">
              {t("index.mainIntroPhone")}
            </div>
          </div>
          <button
            className={`bg-[#3B5AFA] hover:bg-[#2440D7] text-white font-semibold
                    desktop:px-[46px] desktop:py-[22px] px-9 py-[15px] rounded-[100px] gap-2 desktop:text-[23px] text-[16px] mx-auto`}
            onClick={() =>
              authState.isLoggedIn ? navigate(getLangUrl("/home")) : navigate(getLangUrl("/login"))
            }>
            {t("startChecking")}
          </button>
        </div>
        {/* Content End */}
      </div>
      {/* Section 1 End */}

      {/* Section 2 Start */}
      <div className="flex flex-col desktop:py-[150px] py-20 px-2 items-center desktop:gap-[78px] gap-[30px] desktop:min-w-[720px] mx-auto">
        <div className="flex p-2 justify-center items-center gap-2 desktop:text-[50px] text-[28px] font-bold">
          {t("index.2.title")}
        </div>
        <div className="flex desktop:flex-row flex-col text-[#2E2E2E] items-center desktop:gap-[72px] gap-[16px] flex-shrink-0">
          <div className="flex desktop:gap-[72px] gap-[20px] flex-shrink-0">
            {/* Step 1 Start */}
            <div className="flex flex-col items-center gap-[50px] flex-shrink-0">
              <StepIndicator num={1} />
              <div className="flex flex-col items-center gap-[26px]">
                <img src={step1} alt="Step1" />
                <div className="desktop:text-[20px] text-[16px]">{t("index.2.step1")}</div>
              </div>
            </div>
            {/* Step 1 End */}
            <div className="w-px h-[161px] bg-[#E5E5E5] flex-shrink-0" />
            {/* Step 2 Start */}
            <div className="flex flex-col items-center gap-[39px] flex-shrink-0">
              <StepIndicator num={2} />
              <div className="flex flex-col items-center gap-[31px]">
                <img src={step2} alt="Step2" />
                <div className="desktop:text-[20px] text-[16px]">{t("index.2.step2")}</div>
              </div>
            </div>
            {/* Step 2 End*/}
          </div>
          <div className="w-px h-[161px] bg-[#E5E5E5] flex-shrink-0 hidden desktop:block" />
          <div className="flex gap-[33px] desktop:hidden">
            <div className="h-px w-[140px] bg-[#E5E5E5] flex-shrink-0" />
            <div className="h-px w-[140px] bg-[#E5E5E5] flex-shrink-0" />
          </div>
          <div className="flex desktop:gap-[72px] gap-[20px] flex-shrink-0">
            {/* Step 3 Start */}
            <div className="flex flex-col items-center gap-[23px] flex-shrink-0">
              <StepIndicator num={3} />
              <div className="flex flex-col items-center gap-[16px]">
                <img src={step3} alt="Step3" />
                <div className="desktop:text-[20px] text-[16px]">{t("index.2.step3")}</div>
              </div>
            </div>
            {/* Step 3 End*/}
            <div className="w-px h-[161px] bg-[#E5E5E5] flex-shrink-0" />
            {/* Step 4 Start */}
            <div className="flex flex-col items-center gap-[39px] flex-shrink-0">
              <StepIndicator num={4} />
              <div className="flex flex-col items-center gap-[34px]">
                <img src={step4} alt="Step4" />
                <div className="desktop:text-[20px] text-[16px]">{t("index.2.step4")}</div>
              </div>
            </div>
            {/* Step 4 End*/}
          </div>
        </div>
      </div>
      {/* Section 2 End */}

      {/* Section 3 Start */}
      <div className="flex flex-col items-center desktop:gap-[90px] desktop:py-[160px] py-20 px-2 mx-auto">
        <div className="desktop:text-[50px] text-[28px] text-center font-semibold desktop:leading-[68px] leading-[38px] desktop:mb-0 mb-7">
          {t("index.1.title")}
        </div>
        <div className="flex flex-col items-center desktop:gap-[100px] gap-[50px]">
          {/* Content 1 Start */}
          <div className="flex desktop:flex-row flex-col desktop:items-center desktop:w-[1235px] desktop:justify-between">
            <Section2Cont1 />
            <div className="flex flex-col desktop:items-start self-start desktop:self-center gap-[10px] flex-shrink-0 desktop:mt-0 mt-7">
              <div className="desktop:text-[34px] text-[22px] font-semibold leading-[32px] text-[#2E2E2E] py-[10px]">
                {t("index.1.subtitle1")}
              </div>
              <div className="desktop:block hidden text-[22px] leading-[35px] text-[#7A7A7A] py-[10px] font-medium">
                {t("index.1.content1")}
              </div>
              <div className="desktop:hidden text-[15px] leading-[25px] text-[#7A7A7A] py-[10px] font-medium">
                {t("index.1.content1mobile")}
              </div>
            </div>
          </div>
          {/* Content 1 End */}
          {/* Content 2 Start */}
          <div className="flex desktop:flex-row flex-col desktop:items-center desktop:w-[1235px] desktop:justify-between">
            <div className="desktop:hidden">
              <Section2Cont2 />
            </div>
            <div className="flex flex-col desktop:items-start self-start desktop:self-center gap-[10px] flex-shrink-0 desktop:mt-0 mt-[53px]">
              <div className="desktop:text-[34px] text-[22px] font-semibold leading-[32px] text-[#2E2E2E] py-[10px]">
                {t("index.1.subtitle2")}
              </div>
              <div className="desktop:block hidden text-[22px] leading-[35px] text-[#7A7A7A] py-[10px] font-medium">
                {t("index.1.content2")}
              </div>
              <div className="desktop:hidden text-[15px] leading-[25px] text-[#7A7A7A] py-[10px] font-medium">
                {t("index.1.content2mobile")}
              </div>
            </div>{" "}
            <div className="desktop:flex hidden">
              <Section2Cont2 />
            </div>
          </div>
          {/* Content 2 End */}
          {/* Content 3 Start */}
          <div className="flex desktop:flex-row flex-col desktop:items-center desktop:w-[1235px] desktop:justify-between">
            <Section2Cont3 />
            <div className="flex flex-col desktop:items-start self-start desktop:self-center gap-[10px] flex-shrink-0 desktop:mt-0 mt-[53px]">
              <div className="desktop:text-[34px] text-[22px] font-semibold leading-[32px] text-[#2E2E2E] py-[10px]">
                {t("index.1.subtitle3")}
              </div>
              <div className="desktop:block hidden text-[22px] leading-[35px] text-[#7A7A7A] py-[10px] font-medium">
                {t("index.1.content3")}
              </div>
              <div className="desktop:hidden text-[15px] leading-[25px] text-[#7A7A7A] py-[10px] font-medium">
                {t("index.1.content3mobile")}
              </div>
            </div>
          </div>
          {/* Content 3 End */}
        </div>
      </div>
      {/* Section 3 End */}

      {/* Section 4 Start */}
      <div className="flex desktop:py-[180px] py-20 px-2 flex-col items-center gap-[86px] desktop:min-w-[1536px] mx-auto ">
        <div className="flex desktop:flex-row flex-col justify-center items-start desktop:gap-[86px] gap-[44px] ">
          {/* Content 1 Start */}
          <div className="flex flex-col justify-center desktop:items-start items-center gap-[46px] mx-auto desktop:mx-0">
            <div className="flex flex-col justify-center items-start gap-[24px]">
              <div className="desktop:text-[50px] text-[28px] desktop:self-start self-center font-semibold leading-[66px]">
                {t("index.3.title")}
              </div>
              <div className="text-[#777A80] desktop:text-[22px] text-[16px] font-medium desktop:self-start self-center desktop:leading-[38px] leading-[27px]">
                {t("index.3.content1")}
              </div>
            </div>
            <button className="flex items-center gap-2">
              <div className="text-[#3B5AFA] text-[19px] font-medium">{t("index.3.more")}</div>
              <img src={realArrow} alt="Real Arrow" className=""></img>
            </button>
          </div>
          {/* Content 1 End */}
          {/* Content 2 Start */}
          <div className="flex flex-col desktop:flex-row gap-[20px]">
            {/* First */}
            <div
              className="desktop:py-[57px] desktop:px-[40px] p-10 gap-[10px] flex flex-col items-center border-[#D2D8E7] border-[1px]
            rounded-[20px] desktop:w-[530px] w-[326px]">
              <div className="desktop:gap-[30px] gap-[10px] flex flex-col items-start ">
                <img src={rule} alt="Rule" />
                <div className="flex flex-col desktop:gap-[67px] gap-[12px]">
                  <div className="text-[#343434] desktop:text-[34px] text-[20px] font-semibold leading-[32px]">
                    {t("index.3.title2")}
                  </div>
                  <div className="desktop:block hidden text-[#777A80] text-[22px] font-medium leading-[36px]">
                    {t("index.3.content2")}
                  </div>
                  <div className="desktop:hidden text-[#777A80] text-[15px] font-medium leading-[25px]">
                    {t("index.3.content2mobile")}
                  </div>
                </div>
              </div>
            </div>
            {/* Second */}
            <div
              className="desktop:py-[57px] desktop:px-[40px] p-10 gap-[10px] flex flex-col items-center border-[#D2D8E7] border-[1px]
              rounded-[20px] desktop:w-[530px] w-[326px]">
              <div className="desktop:gap-[30px] gap-[10px] flex flex-col items-start ">
                <img src={tech} alt="Tech" />
                <div className="flex flex-col desktop:gap-[67px] gap-[12px]">
                  <div className="text-[#343434] desktop:text-[34px] text-[20px] font-semibold leading-[32px]">
                    {t("index.3.title3")}
                  </div>
                  <div className="desktop:block hidden text-[#777A80] desktop:text-[22px] font-medium leading-[36px]">
                    {t("index.3.content3")}
                  </div>
                  <div className="desktop:hidden text-[#777A80] text-[15px] font-medium leading-[25px]">
                    {t("index.3.content3mobile")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Content 2 End */}
        </div>
      </div>
      {/* Section 4 End */}
      {/* Section 5 Start */}
      <div className="desktop:py-[120px] py-[70px] px-[23px] flex desktop:px-2 flex-col items-center bg-[#19275F] w-full desktop:min-w-[1536px] mx-auto">
        <img src={lockSvg} alt="Lock" className="mb-[22px]" />
        <div className="text-white desktop:text-[50px] text-[24px] font-semibold desktop:leading-[70px] text-center mb-[20px]">
          {t("index.4.title")}
        </div>
        <div className="text-white text-[22px] leading-[36px] text-center mb-[54px] desktop:block hidden">
          {t("index.4.content")}
        </div>
        <div className="text-white text-[15px] leading-[25px] text-center mb-[30px] desktop:hidden">
          {t("index.4.contentmobile")}
        </div>
        <button className="bg-white desktop:px-[46px] desktop:py-[22px] px-9 py-[15px] items-center rounded-[100px] desktop:text-[23px] text-[16px] font-semibold mb-[30px]">
          {t("startChecking")}
        </button>
        <div className="text-[#5967A3] desktop:text-[20px] text-[14px] font-medium leading-[36px]">
          {t("index.4.subcontent")}
        </div>
      </div>
      {/* Section 5 End */}
    </div>
  );
};

const StepIndicator = ({ num }) => {
  return (
    <div className="flex items-center gap-[6px] text-[20px] font-semibold ">
      STEP
      <div className="relative flex-shrink-0">
        <img src={circle} alt="Circle" />
        <div className="absolute right-[8px] top-[1px] text-white text-[17px] font-semibold">
          {num}
        </div>
      </div>
    </div>
  );
};

const Section2Cont1 = () => {
  return (
    <div className="desktop:w-[529px] desktop:h-[413px] w-[326px] h-[270px] relative rounded-[22px] shadow-[10px_10px_20px_0px_rgba(0,0,0,0.05)]">
      <div
        className="absolute desktop:text-[22px] text-[17px] desktop:left-[37px] desktop:top-[53px]
      left-[23px] top-[25px] font-medium leading-[22px] desktop:leading-[normal]">
        Music Plagiarism <br className="desktop:hidden" /> Test Report
      </div>
      <div className="w-[119px] h-9 desktop:left-[373px] desktop:top-[48px] left-[186px] top-[29px] absolute">
        <div className="w-[119px] h-9 left-0 top-0 absolute rounded-[10px] border border-[#E3E3E3]" />
        <div className="left-[14px] top-[9px] absolute text-[#4F4F4F] desktop:text-[16px] text-[14px]">
          Full status
        </div>
        <img src={arrow} alt="Arrow" className="top-[15px] right-[15px] absolute" />
      </div>
      <div className="w-[159px] h-[236px] desktop:left-[37px] desktop:top-[131px] left-[23px] top-[87px] absolute">
        <div className="left-0 top-0 absolute text-[#ACACAC] desktop:text-[18px] text-[14px]">
          Original music
          <br />
          plagiarism section
        </div>
        <div className="left-0 desktop:top-[62px] top-[42px] absolute text-[#3553F3] desktop:text-[33px] text-[22px] font-medium">
          137
        </div>
        <div className="desktop:left-[67px] desktop:top-[68px] left-[43px] top-[50px] absolute text-[#CCC] desktop:text-[25px] text-[15px] font-medium">
          / 212
        </div>
        <div className="left-0 desktop:top-[140px] top-[90px] absolute text-[#ACACAC] desktop:text-[18px] text-[14px]">
          Comarative Music
          <br />
          Plagiarism Section
        </div>
        <div className="left-0 desktop:top-[197px] top-[130px] absolute text-[#3553F3] desktop:text-[33px] text-[22px] font-medium">
          154
        </div>
        <div className="desktop:left-[63px] desktop:top-[202px] left-[43px] top-[136px] absolute text-[#CCC] desktop:text-[25px] text-[15px] font-medium">
          / 224
        </div>
      </div>
      <div className="desktop:w-[188px] desktop:h-[188px] w-[113px] h-[113px] desktop:left-[264.5px] desktop:top-[131px] left-[177px] top-[93px] absolute">
        <img
          src={left_elipse}
          alt="Left elipse"
          className="top-0 absolute flex-shrink-0 desktop:w-[110px] w-[66px]"
        />
        <div
          className="desktop:w-[109px] desktop:h-[72px] desktop:left-[46.5px] desktop:top-[60px]
                      w-[61px] h-[42px] left-[29px] top-[36px] absolute">
          <div className="left-0 top-0 absolute text-[#3553F3] desktop:text-[60px] text-[35px] desktop:font-bold font-semibold">
            52
          </div>
          <div
            className="desktop:left-[75px] desktop:top-[24px] left-[43px] top-[14px] absolute text-[#3553F3]
                        desktop:text-[35px] text-[21px] desktop:font-bold font-semibold">
            %
          </div>
        </div>
        <img
          src={right_elipse}
          alt="Right elipse"
          className="right-0 top-0 absolute flex-shrink-0 desktop:w-[110px] w-[66px]"
        />
      </div>
      <div className="desktop:left-[275.50px] desktop:top-[344px] left-[182px] top-[227px] absolute text-center desktop:text-[18px] text-[11px] font-medium">
        Total Plagiarism Rate
      </div>
    </div>
  );
};

const Section2Cont2 = () => {
  return (
    <div className="desktop:w-[529px] desktop:h-[413px] w-[326px] h-[270px] relative shadow-[10px_10px_20px_0px_rgba(0,0,0,0.05)] rounded-[22px] overflow-hidden">
      <div className="w-[685px] h-[343px] desktop:left-[-100px] desktop:top-[33px] left-[-103px] top-[18px] absolute">
        <img
          src={worldMap}
          alt="World Map"
          className="bg-cover bg-no-repeat desktop:w-[685px] w-[499px]"
        />
      </div>
      <div className="desktop:w-[315px] desktop:h-[274px] w-[234px] h-[206px] absolute desktop:top-[70px] desktop:left-[113px] top-[32px] left-[46px] bg-[#F9FAFC] rounded-[14px] justify-center flex">
        <img
          src={circle2}
          alt="Circle2"
          className="absolute desktop:top-[37px] top-[27px] mx-auto desktop:w-[45px] w-[30px]"
        />
        <div className="desktop:px-[30px] desktop:py-3.5 px-5 py-[11px] mx-auto desktop:top-[192px] top-[149px] absolute bg-[#3553F3] rounded-[100px]">
          <div className="text-[#F9FAFC] font-semibold desktop:text-[16px] text-[12px]">
            표절 검사 확인하기
          </div>
        </div>
        <div className="mx-auto desktop:top-[126px] top-[97px] absolute text-center text-black desktop:text-[15px] text-[12px] font-medium desktop:leading-[24px] leading-[19px]">
          나의 곡과 유사한 음악을 발견하였습니다.
          <br />
          표절 검사 리포트를 확인하시겠습니까?
        </div>
        <div className="mx-auto desktop:top-[91px] top-16 absolute text-[#3553F3] text-[21px] font-bold leading-[26px]">
          표절 의심곡 발견!
        </div>
        <div className="text-[#3553F3] desktop:text-[28px] text-[22px] font-medium desktop:top-[47px] top-[29px] mx-auto absolute leading-[26px]">
          !
        </div>
      </div>
    </div>
  );
};

const Section2Cont3 = () => {
  return (
    <div className="desktop:w-[529px] desktop:h-[413px] w-[326px] h-[270px] relative shadow-[10px_10px_20px_0px_rgba(0,0,0,0.05)] rounded-[22px]">
      <div className="desktop:top-[52px] desktop:left-[34px] top-[35px] left-[25px] absolute">
        <img src={circle3} alt="Circle 3" className="desktop:w-[28px] w-[22px]"></img>
        <div className="text-white desktop:text-[20px] text-[14px] font-medium absolute top-[2px] desktop:left-[8px] left-[7px]">
          $
        </div>
      </div>
      <div className="desktop:left-[72px] desktop:top-[51px] left-[55px] top-[36px] absolute desktop:text-[25px] text-[17px] font-medium">
        Total Income
      </div>
      <div className="w-[119px] h-9 desktop:left-[373px] desktop:top-[48px] left-[179px] top-[27px] absolute">
        <div className="w-[119px] h-9 left-0 top-0 absolute rounded-[10px] border border-[#E3E3E3]" />
        <div className="left-[14px] top-[9px] absolute text-[#4F4F4F]">This Week</div>
        <img src={arrow} alt="Arrow" className="top-[15px] right-[15px] absolute" />
      </div>
      <div className="desktop:w-[455px] desktop:h-[251px] w-[280px] h-[166px] desktop:left-[37px] left-[24px] desktop:top-[116px] top-[83px] absolute">
        <div className="desktop:left-[331px] desktop:top-[230px] left-[177px] top-[148px] absolute text-[#7E7E7E] desktop:text-[18px] text-[15px]">
          1.10 - 1.17, 2024
        </div>
        <div className="desktop:w-[453px] w-[278.769px] h-px left-0 desktop:top-[42px] top-[27px] absolute bg-[#E8E8E8]" />
        <div className="desktop:w-[453px] w-[278.769px] h-px left-0 desktop:top-[84px] top-[54px] absolute bg-[#E8E8E8]" />
        <div className="desktop:w-[453px] w-[278.769px] h-px left-0 desktop:top-[126px] top-[81px] absolute bg-[#E8E8E8]" />
        <div className="desktop:w-[453px] w-[278.769px] h-px left-0 desktop:top-[168px] top-[108px] absolute bg-[#E8E8E8]" />
        <div className="desktop:w-[453px] w-[278.769px] h-px left-0 desktop:top-[210px] top-[135px] absolute bg-[#E8E8E8]" />
        <div className="desktop:w-[453px] w-[278.769px] h-px left-0 top-0 absolute bg-[#E8E8E8]" />
        <div className="desktop:left-[0.50px] desktop:top-[11px] left-[2px] top-[12px] absolute desktop:text-[42px] text-[28px] font-semibold z-2">
          $18,756
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="455"
          height="163"
          viewBox="0 0 455 163"
          fill="none"
          className="absolute desktop:top-[36px] top-[12px] desktop:w-[453px] w-[280px]">
          <path
            d="M1 161.256L83.5381 113.364L160.318 103.786L231.339 48.2318L302.36 78.8824L377.22 17.5812L454 2.25586"
            stroke="#3553F3"
            stroke-width="4"
          />
        </svg>
        <div className="desktop:left-[0.50px] desktop:top-[63px] left-[4px] top-[54px] absolute text-blue-600 desktop:text-[20px] text-[16px] font-semibold">
          +35.2%
        </div>
      </div>
    </div>
  );
};
export default App;
