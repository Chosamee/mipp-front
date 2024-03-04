import bling from "assets/result/bling.svg";
import paper from "assets/result/paper.png";
import { useTranslation } from "react-i18next";

const VoteBanner = ({ vote }) => {
  const { i18n } = useTranslation();
  const handleVoteClicked = () => {
    const voteUrl =
      i18n.language === "en"
        ? "https://docs.google.com/forms/d/1-gonui98i9BmJmGzfxrTSJJNBNNvBo7FMeuG-Se_e6E/edit"
        : "https://docs.google.com/forms/d/1Iw5ofDxmmATG5xtOUs_CnBF-SLpjBJvszQk16qOZwsM/edit";
    window.open(voteUrl, "_blank");
  };

  return (
    <div className="w-full py-[50px] font-['Pretendard-Regular'] leading-[normal] bg-[#001271]">
      <div className="flex flex-col desktop:flex-row w-[326px] desktop:w-fit justify-center mx-auto px-2">
        <div className="flex flex-col" style={{ fontFeatureSettings: "'ss10' on" }}>
          <p className="text-[#E2E2E3] text-base leading-[27px] font-semibold mb-[20px] text-nowrap">
            {i18n.language === "en" ? (
              <>
                How was your experience with the test? <br className="desktop:hidden" />
                We'd love to hear your feedback!
                <br />
                Your responses to this survey <br className="desktop:hidden" />
                will help us continually improve our service.
              </>
            ) : (
              <>
                검사 결과는 어떠셨나요? <br className="desktop:hidden" />
                사용 후기에 대한 의견을 알려주세요!
                <br />
                설문조사 내용를 통해 <br className="desktop:hidden" />
                서비스를 지속적으로 개선합니다.
              </>
            )}
          </p>
          <button
            className="flex gap-[10px] items-center w-fit py-2 px-5 bg-[#BAD6FF] rounded-lg"
            onClick={() => {
              handleVoteClicked();
            }}>
            <p className="text-[#001271] text-base font-semibold leading-[27px]">
              {i18n.language === "en" ? "Go to the Survey" : "설문조사 하러가기"}
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
