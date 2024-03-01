import { useTranslation } from "react-i18next";
import StepImage from "../components/StepImage";
import StepText from "../components/StepText";
import { useState } from "react";

const Step2 = () => {
  const { t } = useTranslation();
  const [inst, setInst] = useState("vocal");
  const SelectMusicType = ({ selected, optionNum }) => {
    const { t } = useTranslation();
    const isSelected = inst === selected;
    return (
      <button
        onClick={() => setInst(selected)}
        className={`flex px-5 py-3 desktop:py-3.5 text-[14px] desktop:text-[16px] font-medium rounded-[10px] w-[280px] desktop:w-[400px] gap-[10px] ${
          isSelected
            ? "shadow-[0_0_0_2px_#3553F3] bg-white text-[#3553F3]"
            : "bg-[#F6F6F6] text-[#A9A9A9]"
        }`}>
        <div
          className={`border-[1px] ${
            isSelected ? "border-[#3553F3]" : "border-[#E6E8ED]"
          } p-[3px] rounded-[100px]`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none">
            <circle cx="5" cy="5.5" r="5" fill={isSelected ? "#3553F3" : "white"} />
          </svg>
        </div>
        <div className="flex gap-4">
          <div>
            {t("home.type")} {optionNum}
          </div>
          <div
            className={`w-px h-[19px] flex-shrink-0 ${
              isSelected ? "bg-[#C0D8FD]" : "bg-[#E0E1E3]"
            }`}
          />
          <div>{t(`home.${selected}`)}</div>
        </div>
      </button>
    );
  };
  return (
    <div className="flex flex-col gap-[30px] w-full">
      <StepText
        title={"2. 표절 검사 신청을 위한 옵션 선택"}
        text={
          <>
            음원을 직접 업로드 하시려면 업로드, 유튜브 또는 <br className="desktop:hidden" />
            사운드 클라우드 링크로 검사하시려면 링크를 선택해 주세요. <br /> 검사를 하려는 음악이
            보컬이 있는 곡인지 없는 곡인지에 따라 <br className="desktop:hidden" />
            보컬, Inst. 등 옵션을 선택해 주세요.
          </>
        }
      />
      <StepImage
        contents={
          <div className="flex flex-col p-[10px] items-center">
            <div>
              <div className="text-start mb-[10px] text-[14px] desktop:text-[22px] font-semibold">
                {t("home.step1")}
              </div>
              <div className="text-start mb-5 text-[17px] text-[#9B9B9B] font-medium hidden desktop:block leading-[18px]">
                {t("home.step1guide")}
              </div>
              <div className="text-start mb-5 text-[13px] leading-[18px] text-[#9B9B9B] font-medium desktop:hidden ">
                {t("home.step1guideMobile")}
              </div>
              <div className="flex flex-col justify-center gap-2">
                <SelectMusicType selected={"vocal"} optionNum={1} />
                <SelectMusicType selected={"melody"} optionNum={2} />
                <SelectMusicType selected={"boundary"} optionNum={3} />
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Step2;
