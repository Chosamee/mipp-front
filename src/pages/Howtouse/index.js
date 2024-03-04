import { useTranslation } from "react-i18next";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
import HowtouseSEOEN from "seo/HowtouseSEO.en";
import HowtouseSEOKO from "seo/HowtouseSEO.ko";
const Howtouse = () => {
  const { i18n } = useTranslation();
  const seoFiles = {
    en: <HowtouseSEOEN />,
    ko: <HowtouseSEOKO />,
  };
  return (
    <div className="flex flex-col justify-center items-center py-20 desktop:pt-[180px] desktop:pb-[200px] font-['Pretendard-Regular'] leading-[normal] max-w-[1116px] mx-auto">
      {seoFiles[i18n.language]}
      <h1 className="text-center text-[52px] leading-[66px] font-semibold mb-[86px]">
        {i18n.language === "en" ? "How to use" : "이용방법"}
      </h1>
      <section className="flex flex-col w-full gap-[70px]">
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
        <Step5 />
        <Step6 />
      </section>
    </div>
  );
};
export default Howtouse;
