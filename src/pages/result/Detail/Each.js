import { downloadPDF } from "api/pdfService";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Each = ({ file, handleCheckboxChange, index }) => {
  const [fileUrl, setFileUrl] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { t, i18n } = useTranslation();

  const handlePreview = async () => {
    if (isLoading) return;
    setIsLoading(true);
    if (!fileUrl) {
      try {
        const url = await downloadPDF(file.path); // 서버로부터 PDF 파일 받아오기
        window.open(url, "_blank"); // 새 창에서 PDF 파일 열기
        setFileUrl(url); // 받아온 URL을 상태에 저장
      } catch (error) {
        console.error("Preview error:", error);
      }
    } else {
      window.open(fileUrl, "_blank");
    }
    setIsLoading(false);
  };

  return (
    <li
      className={`flex w-[335px] h-24 md:h-[70px] items-center border-b-[1px] border-[#E5E8EB] font-medium md:w-full ${
        file.checked ? "bg-[#ECF2F8]" : ""
      }`}>
      <div className="flex px-0 items-center h-full font-medium w-[30px] justify-center ">
        <input
          type="checkbox"
          checked={file.checked}
          onChange={() => handleCheckboxChange(index)}
          className="checked:bg-blue-600 "
        />
      </div>
      <div className="flex flex-col md:flex-row gap-2 flex-grow">
        <div className="flex md:py-0 w-[305px] min-w-0 md:max-w-5xl mr-auto items-center text-[#171923] px-2">
          <div className="truncate">{file.title}</div>
        </div>

        <div className="flex flex-row items-center justify-between gap-3 px-2">
          <div className="flex w-[108px] md:w-40 h-full items-center text-[#171923] gap-[6px]">
            <div
              className="w-4 h-4 rounded-[90px]"
              style={{ backgroundColor: getColorScore(file.plagiarism_rate) }}
            />
            <div>{file.plagiarism_rate} %</div>
          </div>
          <div className="hidden md:flex h-full items-center">
            {isLoading ? (
              <div className="flex w-20 items-center justify-center">
                <div className="ml-5 animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 flex-shrink-0" />
              </div>
            ) : (
              <button
                className="flex w-20 h-[30px] px-[11px] gap-[7px] flex-shrink-0 items-center justify-center bg-white border-[1px] border-[#D9DADB] rounded-md"
                onClick={() => {
                  handlePreview();
                }}>
                <div className="text-[#31353B] text-[12px] text-nowrap">{t("detail.확인하기")}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none">
                  <path d="M1 1L5 5L1 9" stroke="#31353B" stroke-linecap="round" />
                </svg>
              </button>
            )}
          </div>
          <button
            className="md:hidden relative right-0"
            onClick={() => {
              handlePreview();
            }}>
            {isLoading ? (
              <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-blue-500" />
            ) : (
              <div className="flex w-fit rounded-md px-2 items-center justify-center bg-[#4565D8] text-[#EBF3FA] py-1">
                {i18n.language === "ko" ? "결과 보기" : "View Result"}
              </div>
            )}
          </button>
        </div>
      </div>
    </li>
  );
};

const getColorScore = (score) => {
  if (score >= 60) return "#FE5BBD"; // 60 이상일 경우
  else if (score >= 50) return "#FFA3FB"; // 50 이상 60 미만
  else if (score >= 40) return "#F3D3FF"; // 40 이상 50 미만
  else if (score >= 30) return "#BDC4FF"; // 30 이상 40 미만
  else return "#3553F3"; // 30 미만
};

export default Each;
