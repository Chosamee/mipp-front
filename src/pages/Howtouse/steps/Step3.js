import { useTranslation } from "react-i18next";
import StepImage from "../components/StepImage";
import StepText from "../components/StepText";
import fileSelect from "assets/file_select.svg";
import useWindowWidth from "components/utils/useWindowWidth";

const Step3 = () => {
  const { t } = useTranslation();
  const width = useWindowWidth();
  return (
    <div className="flex flex-col gap-[30px] w-full">
      <StepText
        title={t("howtouse.step3.title")}
        text={width < 768 ? t("howtouse.step3.textMobile") : t("howtouse.step3.text")}
      />
      <StepImage
        contents={
          <div className="flex flex-col items-center">
            <SelectBar selected={1} />
            <div className="mx-auto w-full flex flex-col justify-center items-center">
              <div className="md:w-[420px] w-[280px]">
                <label
                  className={`group h-[154px] mx-auto w-full flex flex-col items-center px-4 justify-center text-blue rounded-[12px] bg-[#F8F9FC] border-[#C7CCD9]
  border-2 border-dashed cursor-pointer hover:bg-[#E1EBFF] hover:text-[#3B59FA] hover:border-[#A1B5E8]`}>
                  <img src={fileSelect} alt="File Select" />
                  <div className="mt-[14px] text-[14px] md:text-[16px] font-medium leading-[24px]">
                    <p>{t("home.uploadGuide")}</p>
                    <p className="text-center text-[13px] md:text-[14px] underline leading-[24px] text-[#3553F3]">
                      {t("home.uploadGuide2")}
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        }
      />
      <StepImage
        contents={
          <div className="flex flex-col items-center">
            <SelectBar selected={2} />
            <input
              type="text"
              placeholder={t("home.linkInputGuide")}
              className="h-[60px] px-[33px] py-3 border rounded-[12px] mb-[14px] w-full border-black md:text-[16px] text-[14px]"
              defaultValue="https://youtu.be/xXgsdyXMUHE"
            />
            <div className="flex w-[280px] md:w-[420px] text-start">
              <div className="text-[#D95E59] text-[14px] md:text-[16px] mr-[3px]">*</div>
              <div className="text-[#A0A0A0] text-[13px] md:text-[14px]">{t("home.linkGuide")}</div>
            </div>
          </div>
        }
      />
    </div>
  );
};

const SelectBar = ({ selected }) => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center mb-[30px]">
      <button
        className="md:px-[60px] py-3 text-[15px] md:text-[16px] mb-2 font-semibold 
                  w-[140px] md:w-[210px] text-center"
        style={{
          color: selected === 1 ? "#3553F3" : "#A9A9A9",
          borderBottom: `2px solid ${selected === 1 ? "#3553F3" : "#A9A9A9"}`,
        }}>
        {t("home.option1-1")}
      </button>
      <button
        className="md:px-[60px] py-3 text-[15px] md:text-[16px] mb-2 font-semibold 
                  w-[140px] md:w-[210px] text-center"
        style={{
          color: selected === 2 ? "#3553F3" : "#A9A9A9",
          borderBottom: `2px solid ${selected === 2 ? "#3553F3" : "#A9A9A9"}`,
        }}>
        {t("home.option1-2")}
      </button>
    </div>
  );
};
export default Step3;
