import { useTranslation } from "react-i18next";
import worldMap from "assets/index/section2/cont2/WorldMap.png";
import circle from "assets/index/section2/cont2/Ellipse 36.svg";

const FindPlagiarismImg = () => {
  const { t } = useTranslation();

  return (
    <div className="desktop:w-[529px] desktop:h-[413px] w-[326px] h-[270px] relative shadow-[10px_10px_20px_0px_rgba(0,0,0,0.05)] rounded-[22px] overflow-hidden bg-white">
      <div className="w-[685px] h-[343px] desktop:left-[-100px] desktop:top-[33px] left-[-103px] top-[18px] absolute">
        <img
          src={worldMap}
          alt="World Map"
          className="bg-cover bg-no-repeat desktop:w-[685px] w-[499px]"
        />
      </div>
      <div className="desktop:w-[315px] desktop:h-[274px] w-[234px] h-[206px] absolute desktop:top-[70px] desktop:left-[113px] top-[32px] left-[46px] bg-[#F9FAFC] rounded-[14px] justify-center flex">
        <img
          src={circle}
          alt="Circle"
          className="absolute desktop:top-[37px] top-[27px] mx-auto desktop:w-[45px] w-[30px]"
        />
        <div className="desktop:px-[30px] desktop:py-3.5 px-5 py-[11px] mx-auto desktop:top-[192px] top-[149px] absolute bg-[#3553F3] rounded-[100px]">
          <div className="text-[#F9FAFC] font-semibold desktop:text-[16px] text-[12px]">
            {t("startChecking")}
          </div>
        </div>
        <div className="mx-auto desktop:top-[126px] top-[97px] absolute text-center text-black desktop:text-[15px] text-[12px] font-medium desktop:leading-[24px] leading-[19px]">
          {t("index.1.content2ImgContent")}
        </div>
        <div className="mx-auto desktop:top-[91px] top-16 absolute text-[#3553F3] text-[21px] font-bold leading-[26px]">
          {t("index.1.content2ImgTitle")}
        </div>
        <div className="text-[#3553F3] desktop:text-[28px] text-[22px] font-medium desktop:top-[47px] top-[29px] mx-auto absolute leading-[26px]">
          !
        </div>
      </div>
    </div>
  );
};

export default FindPlagiarismImg;
