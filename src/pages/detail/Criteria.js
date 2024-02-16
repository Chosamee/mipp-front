import { getLangUrl } from "locales/utils";
import React from "react";
import { useNavigate } from "react-router-dom";

const Criteria = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full gap-[44px] py-[50px] mx-auto bg-[#F9FAFB] rounded-[14px]">
      <div className="flex flex-col gap-[10px] items-center justify-center">
        <h1 className="text-[#2C2F35] text-[20px] font-semibold tracking-[0.192px] leading-[30px]">
          표절률 기준(%)
        </h1>
        <ColorBar />
        <div className="text-[#8D8D8D] text-[12px] font-light leading-[20px]">
          * 장르에 따라서 차이가 있을 수 있습니다
        </div>
      </div>
      <div className="w-[740px] h-px bg-[#EAEFF4] self-center" />
      <div className="flex flex-col gap-[19px] items-center">
        <div className="text-[20px] font-semibold leading-[30px] tracking-[0.192px] text-[#2C2F35]">
          다른 음악 표절 검사 결과도 궁금하다면?
        </div>
        <button
          className="w-fit px-[19px] py-2 border-2 border-[#3553F3] bg-[#3553F3] rounded-lg text-[14px] text-white leading-[24px] tracking-[0.134px]"
          onClick={() => navigate(getLangUrl("/home"))}>
          다시 검사하기
        </button>
      </div>
    </div>
  );
};

export const ColorBar = () => {
  const colorSegments = [
    { score: "0", color: "#3553F3", label: "없음" },
    { score: "30", color: "#BDC4FF", label: "낮음" },
    { score: "40", color: "#F3D3FF", label: "보통" },
    { score: "50", color: "#FFA3FB", label: "높음" },
    { score: "60", color: "#FE5BBD", label: "아주 높음" },
  ];
  return (
    <React.Fragment>
      <div className="flex gap-[70px] text-[#C9C9C9] text-[10px] font-medium items-center">
        {colorSegments.map((segment) => (
          <div key={segment.score}>{segment.score}</div>
        ))}
        <div>100</div>
      </div>
      <div className="flex mt-[2px]">
        {colorSegments.map((segment, index) => (
          <div
            key={segment.color}
            className={`h-2 ${index === 0 ? "rounded-s-lg" : ""} ${
              index === colorSegments.length - 1 ? "rounded-e-lg" : ""
            }`}
            style={{ width: "85px", backgroundColor: segment.color }}
          />
        ))}
      </div>
      <div className="flex mt-[7px] font-medium text-[13px] items-center text-center leading-[20px]">
        {colorSegments.map((segment) => (
          <div key={segment.label} className="w-[85px] px-[10px]" style={{ color: segment.color }}>
            {segment.label}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Criteria;
