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
import arrow from "assets/index/section2/cont1/Polygon 14.svg";
import left_elipse from "assets/index/section2/cont1/Ellipse 33.svg";
import right_elipse from "assets/index/section2/cont1/Ellipse 34.svg";

//style="background: linear-gradient(0deg, #000000cf 5%, #000000ba 40%, #000000b0 58%, #0000008f 70%);
// bg-opacity-50 bg-black
const App = () => {
  const { authState } = useAuth();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen items-center pt-[132px] font-['Pretendard'] leading-[normal]">
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
              <div className="text-white font-bold leading-normal text-[70px]">
                {t("index.mainTitle")}
              </div>
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
      <div className="flex flex-col items-center gap-[90px] py-[160px] px-2">
        <div className="text-[50px] text-center font-semibold leading-[68px]">
          {t("index.1.title")}
        </div>
        <div className="flex flex-col items-center gap-[100px]">
          {/* Content 1 Start */}
          <div className="flex items-center gap-[182px]">
            <div className="flex flex-col items-start">
              <div className="w-[529px] h-[413px] relative">
                <div
                  className="left-0 top-0 absolute w-[529px] h-[413px] flex-shrink-0
                  rounded-[22px] shadow-[10px_10px_20px_0px_rgba(0,0,0,0.05)]"
                />
                <div className="absolute text-[22px] left-[37px] top-[53px] font-medium">
                  Music Plagiarism Test Report
                </div>
                <div className="w-[188px] h-[188px] left-[264.5px] top-[131px] absolute">
                  <img
                    src={left_elipse}
                    alt="Left elipse"
                    className="left-[-8px] top-0 absolute flex-shrink-0"
                  />
                  <div className="w-[109px] h-[72px] left-[46.5px] top-[60px] absolute">
                    <div className="left-0 top-0 absolute text-[#3553F3] text-[60px] font-bold">
                      52
                    </div>
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
              </div>
            </div>
            <div className="flex flex-col items-start gap-[10px]">
              <div className="text-[34px] font-semibold leading-[32px] text-[#2E2E2E]">
                {t("index.1.subtitle1")}
              </div>
              <div className="text-[22px] leading-[35px] text-[#7A7A7A]">
                {t("index.1.content1")}
              </div>
            </div>
          </div>
          {/* Content 1 End */}
        </div>
      </div>
      {/* Section 3 End */}

      {/* Process Section
      <div className="container mx-auto rounded-lg mb-10 mt-5 py-4 px-4 text-center">
        <h2 className="text-3xl font-bold mb-1 mt-3 ">{t("index.2.title")}</h2>
        <FadeInComp
          data={
            <img
              src={i18n.language === "en" ? howtouse_en : howtouse_kr}
              alt="Description"
              className="mx-auto rounded"
            />
          }
          animate={"fade-in-right-delay-1"}
        />
      </div>

      <div
        className="flex flex-col bg-fixed bg-no-repeat bg-center md:h-[1000px] h-[1200px] bg-cover"
        style={{ backgroundImage: `url(${indexImg2})` }}>
        <div className="h-5 bg-gradient-to-b from-gray-100  to-black/75"></div>

        <div className="flex justify-center items-center h-full bg-black bg-opacity-75 backdrop-blur-sm">
          <div className="container mx-auto  py-6 text-white rounded-lg mb-20 mt-5 max-w-6xl px-10">
            <FadeInComp
              data={
                <h1 className="text-2xl md:text-6xl font-bold md:mb-20 mb-10 text-center">
                  {t("index.1.title")}
                </h1>
              }
              animate={"fade-in-up-delay-1"}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FadeInComp
                data={
                  Array.from({ length: 3 }, (_, i) => (
                    <div key={i}>
                      <p className="mb-5 md:text-3xl text-xl font-bold md:text-left text-center">
                        {t(`index.1.subtitle${i + 1}`)}
                      </p>
                      <p className="mb-10 md:text-lg text-sm md:text-left text-center">
                        {t(`index.1.content${i + 1}`)}
                      </p>
                    </div>
                  ))
                  // <div>
                  //   <p className="mb-5 md:text-3xl text-lg font-bold md:text-left text-center">
                  //     {t("index.1.subtitle1")}
                  //   </p>
                  //   <p className="mb-10 md:text-lg text-xs md:text-left text-center">
                  //     {t("index.1.content1")}
                  //   </p>
                  //   <p className="mb-5 md:text-3xl text-xl font-bold">{t("index.1.subtitle2")}</p>
                  //   <p className="mb-10 md:text-lg text-sm">{t("index.1.content2")}</p>
                  //   <p className="mb-5 md:text-3xl text-xl font-bold">{t("index.1.subtitle3")}</p>
                  //   <p className="mb-10 md:text-lg text-sm">{t("index.1.content3")}</p>
                  // </div>
                }
                animate={"fade-in-up-delay-1"}
              />
              <FadeInComp
                data={
                  <div className="z-20 flex justify-center">
                    <div className="w-full max-w-md px-4">
                      <ImageSlider images={images} />
                    </div>
                  </div>
                }
                animate={"fade-in-left-delay-1"}
              />
            </div>
          </div>
        </div>
        <div className="h-5 bg-gradient-to-t from-gray-100  to-black/75"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col mb-10">
        <div className="text-4xl text-start px-10 my-10">{t("index.3.title")}</div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="self-start">
            <FadeInComp
              data={
                <div className="flex flex-col px-10 mb-10">
                  <div className="text-2xl mb-5">{t("index.3.subtitle1")}</div>
                  <div className="text-lg">{t("index.3.content1")}</div>
                </div>
              }
              animate={"fade-in-up-delay-1"}
            />
          </div>
          <div className="self-start">
            <FadeInComp
              data={
                <div className="flex flex-col px-10 mb-10">
                  <div className="text-2xl mb-5">{t("index.3.subtitle2")}</div>
                  <div className="text-lg">{t("index.3.content2")}</div>
                </div>
              }
              animate={"fade-in-up-delay-2"}
            />
          </div>
          <div className="self-start">
            <FadeInComp
              data={
                <div className="flex flex-col px-10 mb-10">
                  <div className="text-2xl mb-5">{t("index.3.subtitle3")}</div>
                  <div className="text-lg">{t("index.3.content3")}</div>
                </div>
              }
              animate={"fade-in-up-delay-3"}
            />
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center items-center px-4 my-8 pl-14 w-3/4 mx-auto">
        <YouTubeVideo videoId="xXgsdyXMUHE" />
      </div> */}
      {/* <div
        className="flex flex-col bg-fixed bg-no-repeat bg-center h-[800px] bg-cover"
        style={{ backgroundImage: `url(${indexImg3})` }}>
        <div className="h-5 bg-gradient-to-b from-gray-100  to-black/75"></div>
        <div className="flex justify-center items-center h-full bg-black bg-opacity-75 backdrop-blur-sm">
          <div className="">
            <div className="container mx-auto  py-6 text-white rounded-lg mb-20 mt-5 max-w-6xl px-10">
              <FadeInComp
                data={
                  <div className="text-4xl md:text-6xl font-bold mb-20 text-center">
                    <div className="leading-snug">
                      {t("index.4.title")
                        .split("\n")
                        .map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                    </div>
                  </div>
                }
                animate={"fade-in-up-delay-1"}
              />

              <FadeInComp
                data={<div className="text-lg md:text-xl text-center">{t("index.4.content")}</div>}
                animate={"fade-in-right-delay-2"}
              />
            </div>

            <div className="flex justify-center my-10">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl text-xl
          fade-in-up-delay-3"
                onClick={() =>
                  authState.isLoggedIn
                    ? navigate(getLangUrl("/home"))
                    : navigate(getLangUrl("/login"))
                }>
                {t("startChecking")}
              </button>
            </div>
          </div>
        </div>
      </div> */}
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
export default App;
