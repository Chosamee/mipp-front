import bannerImg from "assets/intro/intro_banner.jpg";
import bannerImgMobile from "assets/intro/intro_banner_mobile.jpg";

import useWindowWidth from "components/utils/useWindowWidth";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const width = useWindowWidth();
  const { t } = useTranslation();
  const bannerImage = width < 550 ? bannerImgMobile : bannerImg;
  const mainTitle = width < 550 ? t("intro.mainTitleMobile") : t("intro.mainTitle");
  return (
    <div className="relative flex justify-center w-full h-[340px] desktop:h-[780px]">
      <Helmet>
        <link rel="preload" href={bannerImage} as="image" />
      </Helmet>
      <img src={bannerImage} alt="banner" className="w-full h-full absolute inset-0 object-cover" />
      <div className="w-full h-full absolute inset-0 bg-black bg-opacity-60 desktop:rounded-[45px] "></div>
      <div className="absolute flex flex-col items-center bottom-[45px] desktop:bottom-[100px]">
        <h1 className="text-[32px] desktop:text-[66px] font-bold leading-[46px] desktop:leading-[80px] text-white text-center text-nowrap">
          {mainTitle}
        </h1>
        <div className="mt-10 desktop:mt-32">
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

export default Banner;
