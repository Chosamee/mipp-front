import { useTranslation } from "react-i18next";
import worldMap from "assets/index/section2/cont2/WorldMap.png";
import circle from "assets/index/section2/cont2/Ellipse 36.svg";

const FindPlagiarismImg = () => {
  const { t } = useTranslation();

  return (
    <div className="md:w-[529px] md:h-[413px] w-[326px] h-[270px] relative shadow-[10px_10px_20px_0px_rgba(0,0,0,0.05)] rounded-[22px] overflow-hidden bg-white">
      <div className="w-[685px] h-[343px] md:left-[-100px] md:top-[33px] left-[-103px] top-[18px] absolute">
        <img
          src={worldMap}
          alt="World Map"
          className="bg-cover bg-no-repeat md:w-[685px] w-[499px]"
        />
      </div>
      <div className="md:w-[315px] md:h-[274px] w-[234px] h-[206px] absolute md:top-[70px] md:left-[113px] top-[32px] left-[46px] bg-[#F9FAFC] rounded-[14px] justify-center flex">
        <img
          src={circle}
          alt="Circle"
          className="absolute md:top-[37px] top-[27px] mx-auto md:w-[45px] w-[30px]"
        />
        <div className="md:px-[30px] md:py-3.5 px-5 py-[11px] mx-auto md:top-[192px] top-[149px] absolute bg-[#3553F3] rounded-[100px]">
          <div className="text-[#F9FAFC] font-semibold md:text-[16px] text-[12px]">
            {t("startChecking")}
          </div>
        </div>
        <div className="mx-auto md:top-[126px] top-[97px] absolute text-center text-black md:text-[15px] text-[12px] font-medium md:leading-[24px] leading-[19px]">
          {t("index.1.content2ImgContent")}
        </div>
        <div className="mx-auto md:top-[91px] top-16 absolute text-[#3553F3] text-[21px] font-bold leading-[26px]">
          {t("index.1.content2ImgTitle")}
        </div>
        <div className="text-[#3553F3] md:text-[28px] text-[22px] font-medium md:top-[47px] top-[29px] mx-auto absolute leading-[26px]">
          !
        </div>
      </div>
    </div>
  );
};

export default FindPlagiarismImg;
