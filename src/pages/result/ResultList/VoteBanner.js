import bling from "assets/result/bling.svg";
import paper from "assets/result/paper.png";
import { useTranslation } from "react-i18next";

const VoteBanner = ({ vote }) => {
  const { i18n } = useTranslation();
  const handleVoteClicked = () => {
    const voteUrl =
      i18n === "en"
        ? "https://docs.google.com/forms/d/1-gonui98i9BmJmGzfxrTSJJNBNNvBo7FMeuG-Se_e6E/edit"
        : "https://docs.google.com/forms/d/1Iw5ofDxmmATG5xtOUs_CnBF-SLpjBJvszQk16qOZwsM/edit";
    window.open(voteUrl, "_blank");
  };

  return (
    <div className="w-full py-[50px] font-['Pretendard'] leading-[normal] bg-[#001271]">
      <div className="flex flex-col desktop:flex-row w-[326px] desktop:w-fit justify-center mx-auto ">
        <div className="flex flex-col" style={{ fontFeatureSettings: "'ss10' on" }}>
          <p className="text-[#E2E2E3] text-base leading-[27px] font-semibold mb-[10px] text-nowrap">
            검사 결과는 어떠셨나요? <br className="desktop:hidden" />
            사용 후기에 대한 의견을 알려주세요!
            <br />
            설문조사 내용를 통해 <br className="desktop:hidden" />
            서비스를 지속적으로 개선합니다.
          </p>
          <button
            className="flex gap-[10px] items-center w-fit"
            onClick={() => {
              handleVoteClicked();
            }}>
            <p className="text-[#8296FF] text-base font-semibold leading-[27px]">
              설문조사 하러가기
            </p>
            <RightArrowIcon />
          </button>
        </div>
        <div className="mt-5 desktop:mt-0 desktop:ml-[41px]">
          <VoteIcon />
        </div>
      </div>
    </div>
  );
};

const RightArrowIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
      <path d="M0.5 0.5L5.5 5.5L0.5 10.5" stroke="#8296FF" stroke-linecap="round" />
    </svg>
  );
};

const VoteIcon = () => {
  return (
    <div className="flex h-[78px] flex-shrink-0">
      <img src={bling} alt="bling" className="mb-auto" />
      <img src={paper} alt="paper" className="mt-auto" />
    </div>
  );
};
export default VoteBanner;
