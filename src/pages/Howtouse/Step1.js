import StepImage from "./StepImage";
import StepText from "./StepText";

const Step1 = () => {
  return (
    <div className="flex flex-col gap-[30px] w-full">
      <StepText
        title={"1. 회원 가입 및 로그인"}
        text={"구글 이메일 계정으로 회원가입과 로그인을 해주세요"}
      />
      <StepImage
        contents={
          <div className="flex flex-col p-[10px] items-center relative top-[61px]">
            <p className="text-[23px] font-semibold mb-[31px]">회원가입</p>
            <div className="flex items-center px-[69px] py-3 gap-[10px] mb-[26px] bg-neutral-300 rounded-[4px]">
              <div> G</div>
              <div className="text-lg leading-[34px] font-medium"> 구글 계정으로 시작하기</div>
            </div>
            <p className="text-[17px] font-medium text-[#9B9B9B]">이미 계정이 있으신가요? 로그인</p>
          </div>
        }
      />
    </div>
  );
};
export default Step1;
