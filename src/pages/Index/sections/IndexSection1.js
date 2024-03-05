import step1 from "assets/index/section1/Group 305.svg";
import step2 from "assets/index/section1/Group 306.svg";
import step3 from "assets/index/section1/Group 307.svg";
import step4 from "assets/index/section1/Group 308.svg";
import { useTranslation } from "react-i18next";

const IndexSection1 = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col desktop:py-[150px] py-20 px-2 items-center desktop:gap-[78px] gap-[30px] desktop:min-w-[720px] mx-auto">
      <h2 className="flex p-2 justify-center items-center gap-2 desktop:text-[50px] text-[28px] font-bold">
        {t("index.2.title")}
      </h2>
      <div className="flex desktop:flex-row flex-col text-[#2E2E2E] items-center desktop:gap-[72px] gap-[16px] flex-shrink-0">
        <div className="flex desktop:gap-[72px] gap-[20px] flex-shrink-0">
          {/* Step 1 Start */}
          <div className="flex flex-col items-center gap-[50px] flex-shrink-0">
            <StepIndicator num={1} />
            <div className="flex flex-col items-center gap-[26px]">
              <img src={step1} alt="Step1" />
              <div className="desktop:text-[20px] text-[16px]">{t("index.2.step1")}</div>
            </div>
          </div>
          {/* Step 1 End */}
          <div className="w-px h-[161px] bg-[#E5E5E5] flex-shrink-0" />
          {/* Step 2 Start */}
          <div className="flex flex-col items-center gap-[39px] flex-shrink-0">
            <StepIndicator num={2} />
            <div className="flex flex-col items-center gap-[31px]">
              <img src={step2} alt="Step2" />
              <div className="desktop:text-[20px] text-[16px]">{t("index.2.step2")}</div>
            </div>
          </div>
          {/* Step 2 End*/}
        </div>
        <div className="w-px h-[161px] bg-[#E5E5E5] flex-shrink-0 hidden desktop:block" />
        <div className="flex gap-[33px] desktop:hidden">
          <div className="h-px w-[140px] bg-[#E5E5E5] flex-shrink-0" />
          <div className="h-px w-[140px] bg-[#E5E5E5] flex-shrink-0" />
        </div>
        <div className="flex desktop:gap-[72px] gap-[20px] flex-shrink-0">
          {/* Step 3 Start */}
          <div className="flex flex-col items-center gap-[23px] flex-shrink-0">
            <StepIndicator num={3} />
            <div className="flex flex-col items-center gap-[16px]">
              <img src={step3} alt="Step3" />
              <div className="desktop:text-[20px] text-[16px]">{t("index.2.step3")}</div>
            </div>
          </div>
          {/* Step 3 End*/}
          <div className="w-px h-[161px] bg-[#E5E5E5] flex-shrink-0" />
          {/* Step 4 Start */}
          <div className="flex flex-col items-center gap-[39px] flex-shrink-0">
            <StepIndicator num={4} />
            <div className="flex flex-col items-center gap-[34px]">
              <img src={step4} alt="Step4" />
              <div className="desktop:text-[20px] text-[16px]">{t("index.2.step4")}</div>
            </div>
          </div>
          {/* Step 4 End*/}
        </div>
      </div>
    </div>
  );
};

const StepIndicator = ({ num }) => {
  return (
    <div className="flex items-center gap-[6px] text-[20px] font-semibold">
      STEP
      <div className="flex relative flex-shrink-0 w-6 h-6 bg-[#4965FB] rounded-full items-center justify-center">
        <div className="text-white text-[17px] font-semibold">{num}</div>
      </div>
    </div>
  );
};

export default IndexSection1;
