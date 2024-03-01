import { useTranslation } from "react-i18next";
import StepImage from "../components/StepImage";
import StepText from "../components/StepText";
import { useEffect, useState } from "react";

const desktopData = [
  { title: "음악 제목 A", checked: true, plagiarism_rate: "00" },
  {
    title: "음악 제목 B",
    checked: false,
    plagiarism_rate: "00",
  },
  {
    title: "음악 제목 C",
    checked: false,
    plagiarism_rate: "00",
  },
];

const mobileData = [
  { title: "음악 제목 A", checked: true, plagiarism_rate: "0" },
  {
    title: "음악 제목 B",
    checked: false,
    plagiarism_rate: "0",
  },
];

const Step6 = () => {
  const { t } = useTranslation();
  const [sampleData, setSampleData] = useState([]); // 기본 높이를 'auto'로 설정

  useEffect(() => {
    // 윈도우 크기에 따라 높이를 조정하는 리스너 함수
    const handleResize = () => {
      if (window.innerWidth < 550) {
        setSampleData(mobileData);
      } else {
        setSampleData(desktopData);
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
    <div className="flex flex-col gap-[30px] w-full">
      <StepText
        title={"6. 결과 확인서 다운로드"}
        text={"검사 결과는 PDF로 제공되며 다운로드 가능합니다."}
      />
      <StepImage
        inputHeight="380px"
        contents={
          <div className="w-[310px] desktop:w-[463px] px-5 leading-[normal] text-[#171923]">
            {/* 노래 검사 유형 / 노래 제목 */}
            <div className="flex gap-[10px] items-center">
              <div
                className="flex bg-[#E2E8F0] rounded-[9999px] px-3 py-1 items-center justify-center w-fit
              text-[#171923] text-[14px] leading-[20px] font-semibold h-fit">
                {t(`home.vocal`)}
              </div>
              <div className="text-[22px] desktop:text-[24px] leading-[28px] font-semibold">
                음악 트랙 A
              </div>
            </div>

            {/* 선택 파일 갯수/ 파일 다운로드 버튼 */}
            <div className="flex mt-4 desktop:mt-6 items-center">
              <div className="text-sm desktop:text-[17px] font-medium leading-[16px]">
                {t("detail.선택파일")}
              </div>
              <div className="text-sm desktop:text-[17px] font-medium leading-[16px] text-[#3553F3] ml-1 w-[34px]">
                (1)
              </div>
              <button className="flex h-[30px] bg-[#3553F3] rounded-md px-3 items-center gap-1 ml-[18px]">
                <DownloadIcon />
                <div className="text-white text-[12px] leading-[16px] font-medium">
                  {t("detail.파일 다운로드")}
                </div>
              </button>
            </div>

            {/* 비교 결과 */}
            <div className="flex w-full h-10 mt-2 desktop:mt-4 items-center border-y-[1px] border-[#E5E8EB] text-[13px] text-[#828487]">
              <div className="flex desktop:px-5 items-center h-full font-medium w-[30px] desktop:w-fit justify-center">
                <input type="checkbox" checked={false} />
              </div>
              <div className="flex px-3 w-[100px] desktop:w-[180px] h-full items-center">
                {t("detail.이름")}
              </div>
              <div className="flex px-3 w-[70px] desktop:w-[90px] h-full items-center">
                {t("detail.표절률")}
              </div>
              <div className="flex pl-3 w-[92px] desktop:w-fit h-full items-center">
                {t("detail.결과자료")}
              </div>
            </div>
            {sampleData.map((file, index) => {
              return (
                <li
                  className={`flex w-full h-[54px] items-center border-b-[1px] border-[#E5E8EB] font-medium ${
                    file.checked ? "bg-[#ECF2F8]" : ""
                  }`}>
                  <div className="flex desktop:px-5 items-center h-full font-medium w-[30px] desktop:w-fit justify-center">
                    <input type="checkbox" checked={file.checked} className="checked:bg-blue-600" />
                  </div>
                  <div className="flex px-3 text-sm desktop:text-base desktop:py-0 w-[100px] desktop:w-[180px] h-full items-center text-[#171923]">
                    {file.title}
                  </div>
                  <div className="flex pl-3 desktop:px-3 text-sm desktop:text-base w-[70px] desktop:w-[90px] h-full items-center text-[#171923] gap-[6px] text-[14px]">
                    <div
                      className="w-4 h-4 rounded-[90px]"
                      style={{ backgroundColor: getColorScore(file.plagiarism_rate) }}
                    />
                    <div>{file.plagiarism_rate} %</div>
                  </div>
                  <div className="flex w-[92px] desktop:w-fit pl-3 pr-5 h-full items-center">
                    <button className="flex h-[30px] px-[11px] gap-[7px] flex-shrink-0 items-center justify-center bg-white border-[1px] border-[#D9DADB] rounded-md">
                      <div className="text-[#31353B] text-[12px] text-nowrap">
                        {t("detail.확인하기")}
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none">
                        <path d="M1 1L5 5L1 9" stroke="#31353B" stroke-linecap="round" />
                      </svg>
                    </button>
                  </div>
                </li>
              );
            })}
          </div>
        }
      />
    </div>
  );
};
export default Step6;
const DownloadIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path
        d="M5.46875 0.46875C5.46875 0.34443 5.41936 0.225201 5.33146 0.137294C5.24355 0.049386 5.12432 0 5 0C4.87568 0 4.75645 0.049386 4.66854 0.137294C4.58064 0.225201 4.53125 0.34443 4.53125 0.46875V5.8525L2.68438 3.89687C2.64249 3.85064 2.5918 3.81322 2.53527 3.78683C2.47874 3.76044 2.4175 3.74559 2.35516 3.74317C2.29282 3.74075 2.23062 3.7508 2.17221 3.77272C2.11381 3.79465 2.06036 3.82802 2.01502 3.87087C1.96967 3.91372 1.93333 3.96519 1.90814 4.02226C1.88294 4.07934 1.86939 4.14087 1.86829 4.20325C1.86718 4.26562 1.87854 4.3276 1.90169 4.38553C1.92484 4.44346 1.95933 4.49619 2.00312 4.54063L4.65938 7.35313C4.70319 7.39947 4.75599 7.43638 4.81456 7.46161C4.87313 7.48684 4.93623 7.49985 5 7.49985C5.06377 7.49985 5.12687 7.48684 5.18544 7.46161C5.24401 7.43638 5.29681 7.39947 5.34062 7.35313L7.99687 4.54063C8.07919 4.44975 8.12262 4.33025 8.11786 4.20773C8.1131 4.08522 8.06052 3.96944 7.97141 3.88523C7.88229 3.80102 7.76373 3.75508 7.64114 3.75726C7.51855 3.75943 7.4017 3.80955 7.31563 3.89687L5.46875 5.8525V0.46875Z"
        fill="white"
      />
      <path
        d="M0.9375 6.71875C0.9375 6.59443 0.888114 6.4752 0.800206 6.38729C0.712299 6.29939 0.59307 6.25 0.46875 6.25C0.34443 6.25 0.225201 6.29939 0.137294 6.38729C0.049386 6.4752 2.61985e-09 6.59443 0 6.71875V8.28125C0 8.73709 0.181082 9.17426 0.50341 9.49659C0.825738 9.81892 1.26291 10 1.71875 10H8.28125C8.73709 10 9.17426 9.81892 9.49659 9.49659C9.81892 9.17426 10 8.73709 10 8.28125V6.71875C10 6.59443 9.95061 6.4752 9.86271 6.38729C9.7748 6.29939 9.65557 6.25 9.53125 6.25C9.40693 6.25 9.2877 6.29939 9.19979 6.38729C9.11189 6.4752 9.0625 6.59443 9.0625 6.71875V8.28125C9.0625 8.7125 8.7125 9.0625 8.28125 9.0625H1.71875C1.2875 9.0625 0.9375 8.7125 0.9375 8.28125V6.71875Z"
        fill="white"
      />
    </svg>
  );
};
const getColorScore = (score) => {
  if (score >= 60) return "#FE5BBD"; // 60 이상일 경우
  else if (score >= 50) return "#FFA3FB"; // 50 이상 60 미만
  else if (score >= 40) return "#F3D3FF"; // 40 이상 50 미만
  else if (score >= 30) return "#BDC4FF"; // 30 이상 40 미만
  else return "#3553F3"; // 30 미만
};
