import { useTranslation } from "react-i18next";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const Howtouse = () => {
  const { i18n, t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center pt-[180px] pb-[200px] font-['Pretendard-Regular'] leading-[normal] max-w-[1116px] px-2 mx-auto">
      <h1 className="text-center text-[52px] leading-[66px] font-semibold mb-[86px]">
        {i18n.language === "en" ? "How to use" : "이용방법"}
      </h1>
      <section className="flex flex-col w-full gap-[70px]">
        <Step1 />
        <Step2 />
        <Step3 />
      </section>
    </div>
  );
};
export default Howtouse;
