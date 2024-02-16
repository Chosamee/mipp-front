import { downloadPDF } from "api/pdfService";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Each = ({ file, handleCheckboxChange, index }) => {
  const [fileUrl, setFileUrl] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

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
      className={`flex w-full h-[70px] items-center border-b-[1px] border-[#E5E8EB] font-medium ${
        file.checked ? "bg-[#ECF2F8]" : ""
      }`}>
      <div className="flex px-5 items-center h-full">
        <input
          type="checkbox"
          checked={file.checked}
          onChange={() => handleCheckboxChange(index)}
          className="checked:bg-blue-600"
        />
      </div>
      <div className="flex px-3 w-[520px] h-full items-center text-[#171923]">{file.title}</div>
      <div className="flex px-3 w-[153px] h-full items-center text-[#171923] gap-[6px]">
        <div className={`w-4 h-4 rounded-[90px] bg-[${getColorScore(file.plagiarism_rate)}]`} />
        <div>{file.plagiarism_rate} %</div>
      </div>
      <div className="flex pl-3 pr-5 h-full items-center">
        {isLoading ? (
          <div className="ml-5 animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
        ) : (
          <button
            className="flex h-[30px] px-[11px] gap-[7px] flex-shrink-0 items-center justify-center bg-white border-[1px] border-[#D9DADB] rounded-md"
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
    </li>
  );
};

const getColorScore = (score) => {
  if (score < 30) return "#3553F3";
  else if (score < 40) return "#BDC4FF";
  else if (score < 50) return "#F3D3FF";
  else if (score < 60) return "#FFA3FB";
  else return "#FE5BBD"; // 60 이상 100 이하
};

export default Each;
