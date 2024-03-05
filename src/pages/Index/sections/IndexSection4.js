import { useTranslation } from "react-i18next";
import lockSvg from "assets/index/Group 294.svg";
import { getLangUrl } from "locales/utils";
import { Link } from "react-router-dom";

const IndexSection4 = () => {
  const { t } = useTranslation();

  return (
    <div className="desktop:py-[120px] py-[70px] px-[23px] flex desktop:px-2 flex-col items-center bg-[#19275F] w-full desktop:min-w-[1536px] mx-auto">
      <img src={lockSvg} alt="Lock" className="mb-[22px]" />
      <h2 className="text-white desktop:text-[50px] text-[24px] font-semibold desktop:leading-[70px] text-center mb-[20px]">
        {t("index.4.title")}
      </h2>
      <div className="text-white text-[22px] leading-[36px] text-center mb-[54px] desktop:block hidden">
        {t("index.4.content")}
      </div>
      <div className="text-white text-[15px] leading-[25px] text-center mb-[30px] desktop:hidden">
        {t("index.4.contentmobile")}
      </div>
      <Link
        className="bg-white desktop:px-[46px] desktop:py-[22px] px-9 py-[15px] items-center rounded-[100px] desktop:text-[23px] text-[16px] font-semibold mb-[30px]"
        to={getLangUrl("/home")}>
        {t("startChecking")}
      </Link>
      <div className="text-[#5967A3] desktop:text-[20px] text-[14px] font-medium leading-[36px]">
        {t("index.4.subcontent")}
      </div>
    </div>
  );
};

export default IndexSection4;
