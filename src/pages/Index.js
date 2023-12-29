// App.js
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageSlider from "../components/Silder";
import image1 from "img/intro1.webp";
import image2 from "img/intro2.webp";
import image3 from "img/intro3.webp";
import image4 from "img/intro4.webp";
import { useAuth } from "utils/AuthContext";
import indexImg1 from "img/index1.jpg";
import indexImg2 from "img/index2.jpg";
import indexImg3 from "img/index3.jpg";
import indexContent1 from "img/indexContent1.webp";
import hwaza from "img/hwaza.mp4";
import YouTubeVideo from "components/YouTubeVideo";
import video1 from "img/index2.mp4";
import videoWrapper from "img/videoWrapper.webp";
import FadeInComp from "components/FadeInComp";
//style="background: linear-gradient(0deg, #000000cf 5%, #000000ba 40%, #000000b0 58%, #0000008f 70%);
// bg-opacity-50 bg-black
const App = () => {
  const { authState } = useAuth();
  const navigate = useNavigate();
  const handleButtonClick = (path) => {
    navigate(path);
  };

  // 이미지 slide를 위한 array
  const images = [image1, image2, image3, image4];

  return (
    <div className="flex flex-col min-h-screen ">
      {/* Video Background Section */}
      <div className="flex flex-col relative h-[500px] md:h-[1000px] overflow-hidden">
        {/* Assuming video1 is imported correctly at the top */}
        <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="bg-index-gradient absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
          <div className="grid grid-cols-2 max-w-7xl text-center text-white p-4">
            <FadeInComp
              data={
                <div className="text-2xl md:text-9xl font-bold mb-2">
                  <div className="text-9xl my-8">표절 검사</div>
                  <div className="text-7xl my-8">검은 사막</div>
                  <div className="text-8xl my-8">나도 (안) 한다</div>
                </div>
              }
              animate={"fade-in-up-delay-1"}
            />
            <div className="flex flex-col justify-center">
              <FadeInComp
                data={
                  <p className="mb-4">
                    표절 검사를 하세요 여러분들의 소리를 들려주세요 으악하하하
                    <br />
                    하라면 하세요 텍스트를 넣을게 없어요 어떡해야할까요
                  </p>
                }
                animate={"fade-in-up-delay-2"}
              />
              <FadeInComp
                data={
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() =>
                      authState.isLoggedIn
                        ? handleButtonClick("/home")
                        : handleButtonClick("/login")
                    }>
                    검사하기
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
      <div className="container mx-auto rounded-lg mb-20 mt-5 p-4 text-center">
        <h2 className="text-3xl font-bold mb-1 mt-3 ">사용 PROCESS</h2>
        {/* Assuming indexContent1 is imported correctly at the top */}
        <FadeInComp
          data={<img src={indexContent1} alt="Description" className="mx-auto rounded w-3/4" />}
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
                  음악 IP 보호 및 관리 솔루션
                </h1>
              }
              animate={"fade-in-up-delay-1"}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FadeInComp
                data={
                  <div>
                    <p className="mb-5 text-3xl font-bold">01. AI 음악 분석 검사</p>
                    <p className="mb-10 text-lg">
                      MIPP만의 음원 분석 기술을 사용한 AI 음악 표절 검사를 무료로 해보세요 앨범 발매
                      전 표절로 인한 법적인 문제를 사전에 예방할 수 있습니다.
                    </p>
                    <p className="mb-5 text-3xl font-bold">02. 실시간 표절노래 모니터링</p>
                    <p className="mb-10 text-lg">
                      전 세계에 새로 발매 되는 수억개의 노래 중에 내 노래를 표절한 노래가 있는지
                      찾아드립니다. MIPP 실시간 표절 모니터링 서비스로 귀하의 음악 저작권을 지키세요
                    </p>
                    <p className="mb-5 text-3xl font-bold">03. 음악 IP 수익 극대화</p>
                    <p className="mb-10 text-lg">
                      MIPP을 통해 무단 표절 노래로 부터 저작권을 보호 하고 음악 IP의 수익을 극대화
                      시켜보세요
                    </p>
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

      <div className="flex justify-center items-center px-4 my-8 pl-14 w-3/4 mx-auto">
        <YouTubeVideo videoId="xXgsdyXMUHE" />
      </div>

      {/* Call to Action Button */}
      <div className="flex justify-center my-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl text-xl
          fade-in-up-delay-3"
          onClick={() =>
            authState.isLoggedIn ? handleButtonClick("/home") : handleButtonClick("/login")
          }>
          검사하기
        </button>
      </div>
    </div>
  );
};

export default App;
