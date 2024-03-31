import { useTranslation } from "react-i18next";
import StepImage from "../components/StepImage";
import StepText from "../components/StepText";

const Step1 = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-[30px] w-full">
      <StepText title={t("howtouse.step1.title")} text={t("howtouse.step1.text")} />
      <StepImage
        contents={
          <div className="flex flex-col p-[10px] items-center">
            <p className="text-[20px] md:text-[23px] font-semibold mb-[31px]">
              {t("howtouse.step1.signUp")}
            </p>
            <div className="flex items-center py-3 gap-[10px] mb-[26px] bg-neutral-300 rounded-[4px] w-[263px] md:px-[69px] md:w-fit justify-center">
              <div> G</div>
              <div className="text-[15px] md:text-lg leading-[34px] font-medium">
                {t("howtouse.step1.startWithGoogle")}
              </div>
            </div>
            <p className="text-[14px] md:text-[17px] font-medium text-[#9B9B9B]">
              {t("howtouse.step1.alreadyAccount")}
            </p>
          </div>
        }
      />
    </div>
  );
};
export default Step1;
