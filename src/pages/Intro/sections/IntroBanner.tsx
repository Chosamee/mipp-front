import React from "react";
import bannerImg from "assets/intro/intro_banner.jpg";
import bannerImgMobile from "assets/intro/intro_banner_mobile.jpg";

import useWindowWidth from "components/utils/useWindowWidth";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const IntroBanner = () => {
  const width = useWindowWidth();
  const { t } = useTranslation();
  const bannerImage = width < 768 ? bannerImgMobile : bannerImg;
  const mainTitle = width < 768 ? t("intro.mainTitleMobile") : t("intro.mainTitle");
  useEffect(() => {
    const preloadLink = document.createElement("link");
    preloadLink.href = bannerImage;
    preloadLink.rel = "preload";
    preloadLink.as = "image";
    document.head.appendChild(preloadLink);

    return () => {
      document.head.removeChild(preloadLink);
    };
  }, [bannerImage]); // 이미지가 바뀔 때마다 `preload` 링크 업데이트
  return (
    <div className="relative flex justify-center w-full h-[340px] md:h-[780px]">
      <img src={bannerImage} alt="banner" className="w-full h-full absolute inset-0 object-cover" />
      <div className="w-full h-full absolute inset-0 bg-black bg-opacity-60 "></div>
      <div className="absolute flex flex-col items-center bottom-[45px] md:bottom-[100px]">
        <h1 className="text-[32px] md:text-[66px] font-bold leading-[46px] md:leading-[80px] text-white text-center text-nowrap">
          {mainTitle}
        </h1>
        <div className="mt-10 md:mt-32">
          <DownVector />
        </div>
      </div>
    </div>
  );
};

const DownVector = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="16" viewBox="0 0 29 16" fill="none">
      <path d="M2 2L14.5 13.0465L27 2" stroke="#B0B0B0" stroke-width="3" stroke-linecap="round" />
    </svg>
  );
};

export default IntroBanner;
