import React from "react";
import { useNavigate } from "react-router-dom";
import ImageSlider from "components/views/Silder";
import image1 from "img/intro1.webp";
import image2 from "img/intro2.webp";
import image3 from "img/intro3.webp";
import image4 from "img/intro4.webp";
import { useAuth } from "components/auth/AuthContext";
import indexImg1 from "img/index1.jpg";
import indexImg2 from "img/index2.jpg";
import indexImg3 from "img/index3.jpg";
import indexContent1 from "img/indexContent1.webp";
import hwaza from "img/hwaza.mp4";
import YouTubeVideo from "components/views/YouTubeVideo";
import video1 from "img/index2.mp4";
import videoWrapper from "img/videoWrapper.webp";
import FadeInComp from "components/views/FadeInComp";
import { useTranslation } from "react-i18next";
import { getLangUrl } from "locales/utils";
import howtouse_kr from "img/index/howtouse-kr.png";
import howtouse_en from "img/index/howtouse-en.png";

//style="background: linear-gradient(0deg, #000000cf 5%, #000000ba 40%, #000000b0 58%, #0000008f 70%);
// bg-opacity-50 bg-black
const App = () => {
  const { authState } = useAuth();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  // 이미지 slide를 위한 array
  const images = [image1, image2, image3, image4];

  return (
    <div className="flex flex-col min-h-screen ">
      {/* Video Background Section */}
      <div className="flex flex-col relative h-[500px] md:h-[700px] overflow-hidden">
        {/* Assuming video1 is imported correctly at the top */}
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="bg-index-gradient absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-between max-w-7xl text-center text-white py-4 px-10">
            <div className="hidden md:block">
              <FadeInComp
                data={
                  <div className=" font-bold mb-2">
                    <div className="text-7xl my-8">{t("index.mainTitle")}</div>
                  </div>
                }
                animate={"fade-in-up-delay-1"}
              />
            </div>
            <div className="flex flex-col justify-center">
              <FadeInComp
                data={<p className="mb-4">{t("index.mainIntro")}</p>}
                animate={"fade-in-up-delay-2"}
              />
              <FadeInComp
                data={
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() =>
                      authState.isLoggedIn
                        ? navigate(getLangUrl("/home"))
                        : navigate(getLangUrl("/login"))
                    }>
                    {t("startChecking")}
                  </button>
                }
                animate={"fade-in-up-delay-3"}
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white via-transparent to-black/50"></div>
      </div>

      {/* Process Section */}
      <div className="container mx-auto rounded-lg mb-20 mt-5 py-4 px-4 text-center">
        <h2 className="text-3xl font-bold mb-1 mt-3 ">{t("index.2.title")}</h2>
        {/* Assuming indexContent1 is imported correctly at the top */}
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

      {/* slide section */}
      <div
        className="flex flex-col bg-fixed bg-no-repeat bg-center md:h-[1000px] h-[1500px] bg-cover"
        style={{ backgroundImage: `url(${indexImg2})` }}>
        <div className="h-5 bg-gradient-to-b from-gray-100  to-black/75"></div>

        <div className="flex justify-center items-center h-full bg-black bg-opacity-75 backdrop-blur-sm">
          <div className="container mx-auto  py-6 text-white rounded-lg mb-20 mt-5 max-w-6xl px-10">
            <FadeInComp
              data={
                <h1 className="text-4xl md:text-6xl font-bold mb-20 text-center">
                  {t("index.1.title")}
                </h1>
              }
              animate={"fade-in-up-delay-1"}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FadeInComp
                data={
                  <div>
                    <p className="mb-5 md:text-3xl text-xl font-bold">{t("index.1.subtitle1")}</p>
                    <p className="mb-10 md:text-lg text-sm">{t("index.1.content1")}</p>
                    <p className="mb-5 md:text-3xl text-xl font-bold">{t("index.1.subtitle2")}</p>
                    <p className="mb-10 md:text-lg text-sm">{t("index.1.content2")}</p>
                    <p className="mb-5 md:text-3xl text-xl font-bold">{t("index.1.subtitle3")}</p>
                    <p className="mb-10 md:text-lg text-sm">{t("index.1.content3")}</p>
                  </div>
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
                animate={"fade-in-right-delay-2"}
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
      <div
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

            {/* Call to Action Button */}
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
      </div>
    </div>
  );
};

export default App;
