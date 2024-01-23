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
//style="background: linear-gradient(0deg, #000000cf 5%, #000000ba 40%, #000000b0 58%, #0000008f 70%);
// bg-opacity-50 bg-black
const App = () => {
  const { authState } = useAuth();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen items-center pt-[132px] leading-[normal]">
      {/** Section 1 Start */}
      <div className="flex flex-col justify-center items-center gap-[10px]">
        <div className="relative flex flex-col w-[1852px] h-[620px] py-[100px] gap-[10px] rounded-[45px] justify-center">
          {/* Background Image Start */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 rounded-[45px]"
            style={{ backgroundImage: `url(${main})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-60 rounded-[45px]"></div>
          </div>
          {/* Background Image End */}
          {/* Content Start */}
          <div className="flex flex-col justify-center items-center gap-[54px] z-10">
            <div className="flex flex-col items-center gap-[34px]">
              <div className="text-white font-bold text-[70px]">{t("index.mainTitle")}</div>
              <div className="text-white text-[25px] leading-[34px] text-center">
                {t("index.mainIntro")}
              </div>
            </div>
            <button
              className={`bg-[#3B5AFA] hover:bg-[#2440D7] text-white font-semibold
                    px-[46px] py-[22px] rounded-[100px] gap-2 text-[23px] mx-auto`}
              onClick={() =>
                authState.isLoggedIn
                  ? navigate(getLangUrl("/home"))
                  : navigate(getLangUrl("/login"))
              }>
              {t("startChecking")}
            </button>
          </div>
          {/* Content End */}
        </div>
      </div>
      {/* Section 1 End */}

      {/* Section 2 Start */}
      <div className="flex flex-col py-[150px] px-2 items-center gap-[78px]">
        <div className="flex p-2 justify-center items-center gap-2 text-[50px] font-bold">
          {t("index.2.title")}
        </div>
        <div className="flex text-[#2E2E2E] items-center gap-[72px]">
          {/* Step 1 Start */}
          <div className="flex flex-col items-center gap-[50px]">
            <StepIndicator num={1} />
            <div className="flex flex-col items-center gap-[26px]">
              <img src={step1} alt="Step1" />
              <div className="text-[20px]">{t("index.2.step1")}</div>
            </div>
          </div>
          {/* Step 1 End */}

          {/* Step 2 Start */}
          <div className="flex flex-col items-center gap-[39px]">
            <StepIndicator num={2} />
            <div className="flex flex-col items-center gap-[31px]">
              <img src={step2} alt="Step2" />
              <div className="text-[20px]">{t("index.2.step2")}</div>
            </div>
          </div>
          {/* Step 2 End*/}

          {/* Step 3 Start */}
          <div className="flex flex-col items-center gap-[23px]">
            <StepIndicator num={3} />
            <div className="flex flex-col items-center gap-[16px]">
              <img src={step3} alt="Step3" />
              <div className="text-[20px]">{t("index.2.step2")}</div>
            </div>
          </div>
          {/* Step 3 End*/}

          {/* Step 4 Start */}
          <div className="flex flex-col items-center gap-[39px]">
            <StepIndicator num={4} />
            <div className="flex flex-col items-center gap-[34px]">
              <img src={step4} alt="Step4" />
              <div className="text-[20px]">{t("index.2.step2")}</div>
            </div>
          </div>
          {/* Step 4 End*/}
        </div>
      </div>
      {/* Section 2 End */}

      {/* Section 3 Start */}
      <div className="flex flex-col items-center gap-[90px] py-[160px] px-2 mx-auto">
        <div className="text-[50px] text-center font-semibold leading-[68px]">
          {t("index.1.title")}
        </div>
        <div className="flex flex-col items-center gap-[100px]">
          {/* Content 1 Start */}
          <div className="flex items-center w-[1235px] justify-between">
            <Section2Cont1 />
            <div className="flex flex-col items-start gap-[10px] min-w-fit">
              <div className="text-[34px] font-semibold leading-[32px] text-[#2E2E2E] py-[10px]">
                {t("index.1.subtitle1")}
              </div>
              <div className="text-[22px] leading-[35px] text-[#7A7A7A] py-[10px] font-medium">
                {t("index.1.content1")}
              </div>
            </div>
          </div>
          {/* Content 1 End */}
          {/* Content 2 Start */}
          <div className="flex items-center w-[1235px] justify-between">
            <div className="flex flex-col items-start gap-[9px] min-w-fit">
              <div className="text-[34px] font-semibold leading-[52px] text-[#2E2E2E] py-[10px]">
                {t("index.1.subtitle2")}
              </div>
              <div className="text-[22px] leading-[35px] text-[#7A7A7A] py-[10px] font-medium">
                {t("index.1.content2")}
              </div>
            </div>
            <Section2Cont2 />
          </div>
          {/* Content 2 End */}
          {/* Content 3 Start */}
          <div className="flex items-center w-[1235px] justify-between">
            <Section2Cont3 />

            <div className="flex flex-col items-start gap-[9px] min-w-fit">
              <div className="text-[34px] font-semibold leading-[52px] text-[#2E2E2E] py-[10px]">
                {t("index.1.subtitle3")}
              </div>
              <div className="text-[22px] leading-[35px] text-[#7A7A7A] py-[10px] font-medium">
                {t("index.1.content3")}
              </div>
            </div>
          </div>
          {/* Content 3 End */}
        </div>
      </div>
      {/* Section 3 End */}

      {/* Section 4 Start */}
      <div className="flex py-[180px] px-2 flex-col items-center gap-[86px]">
        <div className="flex justify-center items-start gap-[86px]">
          {/* Content 1 Start */}
          <div className="flex flex-col justify-center items-start gap-[46px]">
            <div className="flex flex-col justify-center items-start gap-[24px]">
              <div className="text-[50px] font-semibold leading-[66px]">{t("index.3.title")}</div>
              <div className="text-[#777A80] text-[22px] font-medium leading-[38px]">
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
          <div className="flex gap-[20px]">
            {/* First */}
            <div className="py-[57px] px-[40px] gap-[10px] flex flex-col items-center border-[#D2D8E7] border-[1px] rounded-[20px]">
              <div className="gap-[30px] flex flex-col items-start">
                <img src={rule} alt="Rule" />
                <div className="flex flex-col gap-[67px] ">
                  <div className="text-[#343434] text-[34px] font-semibold leading-[32px]">
                    {t("index.3.title2")}
                  </div>
                  <div className="text-[#777A80] text-[22px] font-medium leading-[36px]">
                    {t("index.3.content2")}
                  </div>
                </div>
              </div>
            </div>
            {/* Second */}
            <div className="py-[57px] px-[40px] gap-[10px] flex flex-col items-center border-[#D2D8E7] border-[1px] rounded-[20px]">
              <div className="gap-[30px] flex flex-col items-start">
                <img src={tech} alt="Rule" />
                <div className="flex flex-col gap-[67px] ">
                  <div className="text-[#343434] text-[34px] font-semibold leading-[32px]">
                    {t("index.3.title3")}
                  </div>
                  <div className="text-[#777A80] text-[22px] font-medium leading-[36px]">
                    {t("index.3.content3")}
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
      {/* Section 5 End */}
    </div>
  );
};

const StepIndicator = ({ num }) => {
  return (
    <div className="flex items-center gap-[6px] text-[20px] font-semibold">
      STEP
      <div className="relative">
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
    <div className="w-[529px] h-[413px] relative rounded-[22px] shadow-[10px_10px_20px_0px_rgba(0,0,0,0.05)]">
      <div className="absolute text-[22px] left-[37px] top-[53px] font-medium">
        Music Plagiarism Test Report
      </div>
      <div className="w-[119px] h-9 left-[373px] top-[48px] absolute">
        <div className="w-[119px] h-9 left-0 top-0 absolute rounded-[10px] border border-[#E3E3E3]" />
        <div className="left-[14px] top-[9px] absolute text-[#4F4F4F]">Full status</div>
        <img src={arrow} alt="Arrow" className="top-[15px] right-[15px] absolute" />
      </div>
      <div className="w-[159px] h-[236px] left-[37px] top-[131px] absolute">
        <div className="left-0 top-0 absolute text-[#ACACAC] text-[18px]">
          Original music
          <br />
          plagiarism section
        </div>
        <div className="left-0 top-[62px] absolute text-[#3553F3] text-[33px] font-medium">137</div>
        <div className="left-[67px] top-[68px] absolute text-[#CCC] text-[25px] font-medium">
          / 212
        </div>
        <div className="left-0 top-[140px] absolute text-[#ACACAC] text-[18px]">
          Comarative Music
          <br />
          Plagiarism Section
        </div>
        <div className="left-0 top-[197px] absolute text-[#3553F3] text-[33px] font-medium">
          154
        </div>
        <div className="left-[63px] top-[202px] absolute text-[#CCC] text-[25px] font-medium">
          / 224
        </div>
      </div>
      <div className="w-[188px] h-[188px] left-[264.5px] top-[131px] absolute">
        <img
          src={left_elipse}
          alt="Left elipse"
          className="left-[-8px] top-0 absolute flex-shrink-0"
        />
        <div className="w-[109px] h-[72px] left-[46.5px] top-[60px] absolute">
          <div className="left-0 top-0 absolute text-[#3553F3] text-[60px] font-bold">52</div>
          <div className="left-[75px] top-[24px] absolute text-[#3553F3] text-[35px] font-bold">
            %
          </div>
        </div>
        <img
          src={right_elipse}
          alt="Right elipse"
          className="right-[-8px] top-0 absolute flex-shrink-0"
        />
      </div>
      <div className="left-[275.50px] top-[344px] absolute text-center text-black text-[18px] font-medium">
        Total Plagiarism Rate
      </div>
    </div>
  );
};

const Section2Cont2 = () => {
  return (
    <div className="w-[529px] h-[413px] relative shadow-[10px_10px_20px_0px_rgba(0,0,0,0.05)] rounded-[22px] overflow-hidden">
      <div className="w-[685px] h-[343px] left-[-100px] top-[33px] absolute">
        <img src={worldMap} alt="World Map" className="bg-cover bg-no-repeat" />
      </div>
      <div className="w-[315px] h-[274px] absolute top-[70px] left-[113px] bg-[#F9FAFC] rounded-[14px] justify-center flex">
        <img src={circle2} alt="Circle2" className="absolute top-[37px] mx-auto" />
        <div className="px-[30px] py-3.5 mx-auto top-[192px] absolute bg-[#3553F3] rounded-[100px]">
          <div className="text-[#F9FAFC] font-semibold text-[16px]">표절 검사 확인하기</div>
        </div>
        <div className="mx-auto top-[126px] absolute text-center text-black text-[15px] font-medium leading-[24px]">
          나의 곡과 유사한 음악을 발견하였습니다.
          <br />
          표절 검사 리포트를 확인하시겠습니까?
        </div>
        <div className="mx-auto top-[91px] absolute text-[#3553F3] text-[21px] font-bold leading-[26px]">
          표절 의심곡 발견!
        </div>
        <div className="text-[#3553F3] text-[28px] font-medium top-[47px] mx-auto absolute leading-[26px]">
          !
        </div>
      </div>
    </div>
  );
};

const Section2Cont3 = () => {
  return (
    <div className="w-[529px] h-[413px] relative shadow-[10px_10px_20px_0px_rgba(0,0,0,0.05)] rounded-[22px]">
      <div className="top-[52px] left-[34px] absolute">
        <img src={circle3} alt="Circle 3"></img>
        <div className="text-white text-[20px] font-medium absolute top-[2px] left-[8px]">$</div>
      </div>
      <div className="left-[72px] top-[51px] absolute text-[25px] font-medium">Total Income</div>
      <div className="w-[119px] h-9 left-[373px] top-[48px] absolute">
        <div className="w-[119px] h-9 left-0 top-0 absolute rounded-[10px] border border-[#E3E3E3]" />
        <div className="left-[14px] top-[9px] absolute text-[#4F4F4F]">This Week</div>
        <img src={arrow} alt="Arrow" className="top-[15px] right-[15px] absolute" />
      </div>
      <div className="w-[455px] h-[251px] left-[37px] top-[116px] absolute">
        <div className="left-[331px] top-[230px] absolute text-[#7E7E7E] text-[18px]">
          1.10 - 1.17, 2024
        </div>
        <div className="w-[453px] h-px left-0 top-[42px] absolute bg-[#E8E8E8]" />
        <div className="w-[453px] h-px left-0 top-[84px] absolute bg-[#E8E8E8]" />
        <div className="w-[453px] h-px left-0 top-[126px] absolute bg-[#E8E8E8]" />
        <div className="w-[453px] h-px left-0 top-[168px] absolute bg-[#E8E8E8]" />
        <div className="w-[453px] h-px left-0 top-[210px] absolute bg-[#E8E8E8]" />
        <div className="w-[453px] h-px left-0 top-0 absolute bg-[#E8E8E8]" />
        <div className="left-[0.50px] top-[11px] absolute text-[42px] font-semibold z-2">
          $18,756
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="455"
          height="163"
          viewBox="0 0 455 163"
          fill="none"
          className="absolute top-[36px]">
          <path
            d="M1 161.256L83.5381 113.364L160.318 103.786L231.339 48.2318L302.36 78.8824L377.22 17.5812L454 2.25586"
            stroke="#3553F3"
            stroke-width="4"
          />
        </svg>
        <div className="left-[0.50px] top-[63px] absolute text-blue-600 text-xl font-semibold font-['Pretendard']">
          +35.2%
        </div>
      </div>
    </div>
  );
};
export default App;
