import React from "react";
import useWindowWidth from "components/utils/useWindowWidth";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import main from "assets/index/main.webp";
import mainMobile from "assets/index/mainMobile.png";
import { Link } from "react-router-dom";
import { getLangUrl } from "locales/utils";

const IndexBanner = () => {
  const { t } = useTranslation();

  const width = useWindowWidth();
  const mainImage = width < 768 ? mainMobile : main;
  useEffect(() => {
    const preloadLink = document.createElement("link");
    preloadLink.href = mainImage;
    preloadLink.rel = "preload";
    preloadLink.as = "image";
    document.head.appendChild(preloadLink);

    return () => {
      document.head.removeChild(preloadLink);
    };
  }, [mainImage]); // 이미지가 바뀔 때마다 `preload` 링크 업데이트

  return (
    <div className="flex px-0 md:px-6 md:max-w-full w-full mx-auto">
      {/* Background Image Start */}
      <div
        className="relative flex flex-col mx-auto px-8 w-full md:h-[620px] h-[340px] py-[100px] gap-[10px]
      md:rounded-[45px] justify-center bg-cover bg-center">
        <img
          src={mainImage}
          alt="Main"
          className="absolute inset-0 w-full h-full object-cover md:rounded-[45px]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 md:rounded-[45px]"></div>
        {/* Background Image End */}
        {/* Content Start */}
        <div className="flex flex-col justify-center items-center md:gap-[54px] gap-[20px] z-10">
          <div className="flex flex-col items-center md:gap-[34px] gap-[11px]">
            <h1 className="text-white font-bold md:text-[70px] text-[32px] text-center text-nowrap">
              {t("index.mainTitle")}
            </h1>
            <h2 className="text-white text-[25px] leading-[34px] text-center hidden md:block text-nowrap">
              {t("index.mainIntro")}
            </h2>
            <div className="text-white text-[15px]  leading-[25px] text-center md:hidden text-nowrap">
              {t("index.mainIntroPhone")}
            </div>
          </div>
          <Link
            className={`bg-[#3B5AFA] hover:bg-[#2440D7] text-white font-semibold
                    md:px-[46px] md:py-[22px] px-9 py-[15px] rounded-[100px] gap-2 md:text-[23px] text-[16px] mx-auto`}
            to={getLangUrl("/home")}>
            {t("startChecking")}
          </Link>
        </div>
        {/* Content End */}
      </div>
    </div>
  );
};

export default IndexBanner;
