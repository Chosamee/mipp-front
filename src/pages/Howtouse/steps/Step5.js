import { useTranslation } from "react-i18next";
import StepImage from "../components/StepImage";
import StepText from "../components/StepText";
import down_vector from "assets/result/down_vector.svg";
import { useState } from "react";

const Step5 = () => {
  const { t, i18n } = useTranslation();
  const [inst, setInst] = useState("all");

  return (
    <>
      <StepText
        title={"5. 검사 결과 확인"}
        text={
          <>
            표절 검사가 완료되면 검사결과를 확인 할 수 있습니다. <br />
            검사 결과는 전체 표절률, 표절 의심 구간, 구간 표절률, 멜로디, 화성, 구간별 음원 듣기
            기능이 제공됩니다.
          </>
        }
      />
      <StepImage
        contents={
          <div className="flex flex-col p-[10px] items-center">
            <h1 className="text-[22px] mb-6 self-start font-semibold">{t("result.my")}</h1>

            <div className="flex w-[326px] desktop:w-[424px] h-14 items-center desktop:gap-6 gap-4 justify-between border-b-[1px] border-[#E5E8EB]">
              <div className="py-1 gap-[10px] flex">
                <button className="flex rounded-[100px] border-[1px] border-[#E1E2E3] w-[18px] h-[18px] items-center justify-center">
                  <img src={down_vector} alt="Vector" />
                </button>

                {i18n.language === "en" ? (
                  <div className="text-[14px] text-center font-medium leading-[20px] text-[#171923]">
                    Latest
                  </div>
                ) : (
                  <div className="text-[14px] text-center font-medium leading-[20px] text-[#171923]">
                    최신순
                  </div>
                )}
              </div>
              <div className="flex">
                {["all", "vocal", "melody", "boundary"].map((item, index) => {
                  return (
                    <button
                      className={`h-7 text-sm leading-5 font-semibold  desktop:px-3 px-2.5 py-1 items-center justify-center ${
                        inst === item
                          ? "rounded-[9999px] text-[#171923] bg-[#E2E8F0]"
                          : "text-[#999DA1]"
                      }`}
                      onClick={() => {
                        setInst(item);
                      }}>
                      {t(`home.${item}`)}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col w-full py-6 px-3 gap-2.5 mx-auto text-[#171923] text-sm font-medium border-b-[1px] border-[#E5E8EB] hover:bg-[#ECF2F8]">
              <button className="text-start">음악 트랙 A</button>
              <div className="flex items-center justify-start gap-[10px]">
                <div className="text-nowrap">기본</div>
                <div className="h-3 w-px bg-[#E3E3E3] self-center" />
                <div className="text-center">2024.01.01</div>
                <div className="h-3 w-px bg-[#E3E3E3] self-center" />

                <div className="px-1">완료</div>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
};

export default Step5;
