import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import instaram from "assets/footer/social_instagram.png";
import youtube from "assets/footer/social_youtube.png";

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  return (
    <footer className="flex w-full h-[350px] py-[53px] justify-center items-center gap-[558px] bg-[#1C1C1C] text-white desktop:min-w-[1536px]">
      <div className="justify-between items-start w-[1536px] hidden desktop:flex">
        <div className="flex flex-col items-start gap-[32px]">
          <div className="flex flex-col justify-center items-start gap-[10px] text-[26px] font-bold leading-[22px]">
            Double H Company.
          </div>
          <div className="flex flex-col items-start gap-2 text-[17px] leading-[31px]">
            E-mail : aimipp@gmail.com
            <br /> Copyright © 2024. DoubleHCompany. All Rights Reserved
          </div>
        </div>
        <div className="flex items-start gap-[36px]">
          <div className="flex p-1 justify-center items-center gap-[14px]">
            <img src={instaram} alt="Social Instagram" className="w-[22px] h-[22px]" />
            <img src={youtube} alt="Social Youtube" className="w-[31px] h-[22.143px]" />
          </div>
          <div className="p-1 justify-center items-center gap-[14px] flex">
            <div className="text-[18px] font-medium leading-[24px] tracking-[0.173px] font-feature-settings-['ss10'_on]">
              KR
            </div>
            <div className="w-[1px] h-5 bg-[#5F5F5F]" />
            <div className="text-[18px] font-medium leading-[24px] tracking-[0.173px] font-feature-settings-['ss10'_on]">
              EN
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[53px] pb-[70px] px-4 items-start desktop:hidden">
        <div className="flex p-1 justify-center items-center gap-[24px] mb-[30px]">
          <img src={instaram} alt="Social Instagram" className="w-[28px]" />
          <img src={youtube} alt="Social Youtube" className="w-[39.2px]" />
        </div>
        <div className="flex flex-col gap-[13px]">
          <div className="p-1 items-center gap-[14px] flex">
            <div className="text-[18px] font-medium leading-[24px] tracking-[0.173px] font-feature-settings-['ss10'_on]">
              KR
            </div>
            <div className="w-[1px] h-5 bg-[#5F5F5F]" />
            <div className="text-[18px] font-medium leading-[24px] tracking-[0.173px] font-feature-settings-['ss10'_on]">
              EN
            </div>
          </div>
          <div className="flex flex-col justify-center items-start text-[18px] font-bold leading-[22px] text-[#EAECEE]">
            Double H Company.
          </div>
          <div className="flex flex-col items-start text-[15px] leading-[24px] text-[#EAECEE]">
            E-mail : aimipp@gmail.com Copyright © 2024. <br /> DoubleHCompany. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
