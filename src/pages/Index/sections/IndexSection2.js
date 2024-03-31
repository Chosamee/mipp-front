import { useTranslation } from "react-i18next";
import TestReportImg from "../components/TestReportImg";
import FindPlagiarismImg from "../components/FindPlagiarismImg";
import IncomeImg from "../components/IncomeImg";

const IndexSection2 = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#F4F6FA] w-full">
      <div className="flex flex-col items-center md:gap-[90px] md:py-[160px] py-20 px-2 mx-auto">
        <h2 className="md:text-[50px] text-[28px] text-center font-semibold md:leading-[68px] leading-[38px] md:mb-0 mb-7">
          {t("index.1.title")}
        </h2>
        <div className="flex flex-col items-center md:gap-[100px] gap-[50px] mx-auto">
          {/* Content 1 Start */}
          <div className="flex md:flex-row flex-col md:items-center md:w-[1235px] md:justify-between">
            <TestReportImg />
            <div className="flex flex-col md:items-start self-start md:self-center gap-[10px] flex-shrink-0 md:mt-0 mt-7">
              <div className="md:text-[34px] text-[22px] font-semibold leading-[32px] text-[#2E2E2E] py-[10px]">
                {t("index.1.subtitle1")}
              </div>
              <div className="md:block hidden text-[22px] leading-[35px] text-[#7A7A7A] py-[10px] font-medium">
                {t("index.1.content1")}
              </div>
              <div className="md:hidden text-[15px] leading-[25px] text-[#7A7A7A] py-[10px] font-medium">
                {t("index.1.content1mobile")}
              </div>
            </div>
          </div>
          {/* Content 1 End */}
          {/* Content 2 Start */}
          <div className="flex md:flex-row flex-col md:items-center md:w-[1235px] md:justify-between">
            <div className="md:hidden">
              <FindPlagiarismImg />
            </div>
            <div className="flex flex-col md:items-start self-start md:self-center gap-[10px] flex-shrink-0 md:mt-0 mt-[53px]">
              <div className="md:text-[34px] text-[22px] font-semibold leading-[32px] text-[#2E2E2E] py-[10px]">
                {t("index.1.subtitle2")}
              </div>
              <div className="md:block hidden text-[22px] leading-[35px] text-[#7A7A7A] py-[10px] font-medium">
                {t("index.1.content2")}
              </div>
              <div className="md:hidden text-[15px] leading-[25px] text-[#7A7A7A] py-[10px] font-medium">
                {t("index.1.content2mobile")}
              </div>
            </div>
            <div className="md:flex hidden">
              <FindPlagiarismImg />
            </div>
          </div>
          {/* Content 2 End */}
          {/* Content 3 Start */}
          <div className="flex md:flex-row flex-col md:items-center md:w-[1235px] md:justify-between">
            <IncomeImg />
            <div className="flex flex-col md:items-start self-start md:self-center gap-[10px] flex-shrink-0 md:mt-0 mt-[53px]">
              <div className="md:text-[34px] text-[22px] font-semibold leading-[32px] text-[#2E2E2E] py-[10px]">
                {t("index.1.subtitle3")}
              </div>
              <div className="md:block hidden text-[22px] leading-[35px] text-[#7A7A7A] py-[10px] font-medium">
                {t("index.1.content3")}
              </div>
              <div className="md:hidden text-[15px] leading-[25px] text-[#7A7A7A] py-[10px] font-medium">
                {t("index.1.content3mobile")}
              </div>
            </div>
          </div>
          {/* Content 3 End */}
        </div>
      </div>
    </div>
  );
};
export default IndexSection2;
