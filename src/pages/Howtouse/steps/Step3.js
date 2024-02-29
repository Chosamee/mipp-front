import { useTranslation } from "react-i18next";
import StepImage from "../components/StepImage";
import StepText from "../components/StepText";
import fileSelect from "assets/file_select.svg";

const Step3 = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-[30px] w-full">
      <StepText
        title={"3. 음원 업로드 및 음원 링크 등록"}
        text={"선택한 옵션에 따라 음원(mp3,wav파일 등)을 업로드 하거나, 음원 링크를 입력해 주세요."}
      />
      <StepImage
        contents={
          <div className="flex flex-col items-center">
            <SelectBar />
            <div className="mx-auto w-full flex flex-col justify-center items-center">
              <div className="desktop:w-[420px] w-[280px]">
                <label
                  className={`group h-[154px] mx-auto w-full flex flex-col items-center px-4 justify-center text-blue rounded-[12px] bg-[#F8F9FC] border-[#C7CCD9]
  border-2 border-dashed cursor-pointer hover:bg-[#E1EBFF] hover:text-[#3B59FA] hover:border-[#A1B5E8]`}>
                  <img src={fileSelect} alt="File Select" />
                  <div className="mt-[14px] text-[14px] desktop:text-[16px] font-medium leading-[24px]">
                    <p>{t("home.uploadGuide")}</p>
                    <p className="text-center text-[13px] desktop:text-[14px] underline leading-[24px] text-[#3553F3]">
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
            <SelectBar />
            <input
              type="text"
              placeholder={t("home.linkInputGuide")}
              className="h-[60px] px-[33px] py-3 border rounded-[12px] mb-[14px] w-full border-black desktop:text-[16px] text-[14px]"
              defaultValue="https://youtu.be/D1PvIWdJ8xo"
            />
            <div className="flex w-[280px] desktop:w-[420px] text-start">
              <div className="text-[#D95E59] text-[14px] desktop:text-[16px] mr-[3px]">*</div>
              <div className="text-[#A0A0A0] text-[13px] desktop:text-[14px]">
                {t("home.linkGuide")}
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

const SelectBar = () => {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center mb-[30px]">
      <button
        className="desktop:px-[60px] py-3 text-[15px] desktop:text-[16px] mb-2 font-semibold shadow-[0_2px_0_0_#A9A9A9]
                  w-[140px] desktop:w-[210px] text-center text-[#A9A9A9]">
        {t("home.option1-1")}
      </button>
      <button
        className="desktop:px-[60px] py-3 text-[15px] desktop:text-[16px] mb-2 font-semibold shadow-[0_2px_0_0_#3553F3]
                  w-[140px] desktop:w-[210px] text-center text-[#3553F3]">
        {t("home.option1-2")}
      </button>
    </div>
  );
};
export default Step3;
