import { useTranslation } from "react-i18next";
import StartCheckBtn from "./StartCheckBtn";
import useWindowWidth from "components/utils/useWindowWidth";

const TryTry = () => {
  const { i18n } = useTranslation();
  const width = useWindowWidth();

  return (
    <div className="w-full py-[130px] font-['Pretendard-Regular'] leading-[normal] bg-[#3553F3]">
      <div className="flex flex-col w-[326px] desktop:w-fit justify-center mx-auto gap-[30px] desktop:gap-[50px] items-center">
        <p className="text-[24px] desktop:text-[45px] desktop:font-bold font-semibold text-white text-center">
          {i18n.language === "en"
            ? width < 550
              ? "Curious about \nthe plagiarism check?"
              : "Curious about the plagiarism check?"
            : "표절 검사 결과가 궁금하신가요?"}
        </p>
        <StartCheckBtn textColor="#3553F3" />
      </div>
    </div>
  );
};

export default TryTry;
