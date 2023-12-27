// App.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageSlider from "../components/Silder";
import image1 from "../img/intro1.webp";
import image2 from "../img/intro2.webp";
import image3 from "../img/intro3.webp";
import image4 from "../img/intro4.webp";
import { useAuth } from "utils/AuthContext";

const App = () => {
  const { authState } = useAuth();
  const navigate = useNavigate();
  const handleButtonClick = (path) => {
    navigate(path);
  };

  // 메인화면 fadeout
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(currentScrollPos <= 200); // 80px 이상 스크롤되면 숨김
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 이미지 slide를 위한 array
  const images = [image1, image2, image3, image4];
  return (
    <div className="min-h-screen bg-gray-500  flex flex-col index-background">
      <main
        className={`z-10 fixed text-white w-full h-screen flex-grow flex items-center justify-center flex-col p-8
      transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
        <h1 className="text-4xl font-bold mb-4">AI 음악 표절 검사</h1>
        <p className="mb-6 text-lg">악보를 받아 직접 검사할까요? 소리를 들려주세요</p>
        <button
          className="z-20 bg-black text-white py-2 px-4 rounded-full hover:bg-opacity-80 transition duration-300"
          onClick={() => {
            authState.isLoggedIn !== null
              ? handleButtonClick("/home")
              : handleButtonClick("/login");
          }}>
          검사하기
        </button>
      </main>
      <div className="h-40"></div>
      <div className={`transition-opacity duration-500 ${!visible ? "opacity-100" : "opacity-0"}`}>
        <div className="h-40"></div>
        <div className="container mx-auto px-4 py-6 bg-white rounded-lg shadow mb-20">
          <div className="p-5">
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
        <div className="container mx-auto px-4 py-6 bg-white rounded-lg shadow mb-20">
          <div className="p-5">
            <h1 className="mx-auto text-6xl font-bold mb-20">MIPP 검사 이용 방법</h1>
            <div className="h-80"> 잘 모르게써용 </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
