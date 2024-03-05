import { useEffect, useState } from "react";

const StepImage = ({ contents, inputHeight }) => {
  const [height, setHeight] = useState("360px"); // 기본 높이를 'auto'로 설정

  useEffect(() => {
    // 윈도우 크기에 따라 높이를 조정하는 리스너 함수
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setHeight("306px");
      } else {
        setHeight(inputHeight ? inputHeight : "360px");
      }
    };

    // 윈도우 크기 변경 이벤트에 리스너 추가
    window.addEventListener("resize", handleResize);

    // 초기 렌더링에서도 높이 설정
    handleResize();

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="desktop:px-5">
      <div className="flex w-full h-[360px] desktop:h-[420px] bg-[#F5F6F8] desktop:rounded-[30px]">
        <div
          className="flex flex-col w-[326px] desktop:w-[493px] mx-auto mt-auto rounded-t-[10px] bg-white shadow-[0px_-11px_17px_2px_rgba(0,0,0,0.03)]"
          style={{ height: height }}>
          <div className="flex w-full h-7 flex-shrink-0 bg-[#E9EAED] pl-[13px] pt-[10px] rounded-t-[10px]">
            <CircleTab />
          </div>
          <div className="flex flex-grow items-center justify-center">{contents}</div>
        </div>
      </div>
    </div>
  );
};

const CircleTab = () => {
  return (
    <div className="flex gap-1">
      <Circle />
      <Circle />
      <Circle />
    </div>
  );
};

const Circle = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
      <circle cx="4" cy="4" r="4" fill="#D1D1D1" />
    </svg>
  );
};
export default StepImage;
