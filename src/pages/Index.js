// App.js
import React from "react";
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
//style="background: linear-gradient(0deg, #000000cf 5%, #000000ba 40%, #000000b0 58%, #0000008f 70%);
const App = () => {
  const { authState } = useAuth();
  const navigate = useNavigate();
  const handleButtonClick = (path) => {
    navigate(path);
  };

  // 이미지 slide를 위한 array
  const images = [image1, image2, image3, image4];
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="bg-fixed bg-no-repeat bg-center h-[1000px] bg-cover w-full relative"
        style={{ backgroundImage: `url(${indexImg1})` }}>
        <div className="flex justify-center items-center h-full bg-opacity-50 bg-black">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl font-bold mb-2">표절 검사다 이새기들아</h1>
            <p className="mb-4">표절 검사를 하세요 여러분들의 소리를 들려주세요 으악하하하</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                authState.isLoggedIn !== null
                  ? handleButtonClick("/home")
                  : handleButtonClick("/login");
              }}>
              검사하기
            </button>
          </div>
        </div>
      </div>
      {/* 흰색 */}
      <div className="container mx-auto bg-white rounded-lg  mb-20 mt-5 relative w-full flex justify-center items-center">
        <div className="h-fit text-center">
          <div className="text-6xl font-bold mb-1 mt-3">사용 PROCESS</div>

          <img src={indexContent1} alt="Description" className="w-given rounded" />
        </div>
      </div>

      <div
        className="bg-fixed bg-no-repeat bg-center h-[1000px] bg-cover w-screen"
        style={{ backgroundImage: `url(${indexImg2})` }}>
        <div className="flex justify-center items-center h-full bg-opacity-50 bg-black">
          <div className="container mx-auto px-4 py-6 text-white rounded-lg  mb-20 w-[1000px] mt-5">
            <h1 className="mx-auto text-6xl font-bold mb-20">음악 IP 보호 및 관리 솔루션</h1>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="">
                <p className="mb-5 text-4xl font-bold">01. AI 음악 분석 검사</p>
                <p className="mb-10 text-xl">
                  MIPP만의 음원 분석 기술을 사용한 AI 음악 표절 검사를 무료로 해보세요 앨범 발매 전
                  표절로 인한 법적인 문제를 사전에 예방할 수 있습니다.
                </p>
                <p className="mb-5 text-4xl font-bold">02. 실시간 표절노래 모니터링</p>
                <p className="mb-10 text-xl">
                  전 세계에 새로 발매 되는 수억개의 노래 중에 내 노래를 표절한 노래가 있는지
                  찾아드립니다. MIPP 실시간 표절 모니터링 서비스로 귀하의 음악 저작권을 지키세요
                </p>
                <p className="mb-5 text-4xl font-bold">03. 음악 IP 수익 극대화</p>
                <p className="mb-10 text-xl">
                  MIPP을 통해 무단 표절 노래로 부터 저작권을 보호 하고 음악 IP의 수익을 극대화
                  시켜보세요
                </p>
              </div>
              <div className="z-20 ">
                <div className="bg-white px-4 rounded-lg shadow max-w-sm ml-auto">
                  <ImageSlider images={images} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="text-center">
          <div className="text-5xl font-bold mb-8 mt-8">고성현의 굉장한 앱</div>
          <video
            src={hwaza}
            controls // 컨트롤러를 표시하려면 이 속성을 추가하세요.
            className="max-w-full h-auto w-given my-4 rounded" // Tailwind CSS를 사용한 스타일링
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div
        className="bg-fixed bg-no-repeat bg-center h-[1000px] bg-cover w-screen"
        style={{ backgroundImage: `url(${indexImg3})` }}>
        <div className="flex justify-center items-center h-full bg-opacity-50 bg-black">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl font-bold mb-2">표절 검사다 이새기들아</h1>
            <p className="mb-4">표절 검사를 하세요 여러분들의 소리를 들려주세요 으악하하하</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                authState.isLoggedIn !== null
                  ? handleButtonClick("/home")
                  : handleButtonClick("/login");
              }}>
              검사하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
