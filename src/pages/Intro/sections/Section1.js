import React from "react";

const data = [
  {
    title: "검사기준",
    text: (
      <>
        AI가 수 만개의 노래를 각각 4마디 단위로 나누고
        <br /> 실질적 유사성을 비교해 표절률이 높은 노래들을 찾아냅니다.
      </>
    ),
  },
  {
    title: "비전",
    text: (
      <>
        저희의 목표는 창작자의 저작권과 지적 재산권을 보호하고
        <br /> 나아가 창의성의 가치를 극대화시킬 수 있는
        <br /> 음악 생태계를 만드는 것입니다.
      </>
    ),
  },
  {
    title: "기술",
    text: (
      <>
        AI 음악 분석 기술을 통해 음악의 구조, 리듬, 멜로디, 화성 등을 분석해
        <br />
        표절노래를 찾아냅니다. 많은 노래들 중 표절 노래를 찾아내
        <br />
        원작자의 음악 IP를 보호합니다.
      </>
    ),
  },
];

const Section1 = () => {
  return (
    <div className="flex flex-col py-[230px] desktop:w-[1300px] mx-auto px-5">
      <h2 className="text-2xl font-semibold leading-[normal] mb-[86px]">
        MIPP이 바꾸는 음악 생태계
      </h2>
      <div className="flex flex-col desktop:gap-[90px]">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <Subtitle idx={index + 1} title={item.title} text={item.text} />
            {index !== data.length - 1 && <div className="h-px w-full bg-[#E8E8E8]"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const Subtitle = ({ idx, title, text }) => {
  const formattedNumber = String(idx).padStart(2, "0");
  return (
    <div className="flex flex-col desktop:flex-row desktop:gap-[10px]">
      <div className="flex flex-col gap-[10px] desktop:w-[440px]">
        <div className="text-[#3553F3] text-2xl font-bold leading-8">{formattedNumber}</div>
        <h3 className="text-[57px] text-[#343434] font-bold leading-[normal]">{title}</h3>
      </div>
      <div className="text-[#343434] text-[28px] leading-[52px]">{text}</div>
    </div>
  );
};

export default Section1;
