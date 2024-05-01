import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { downloadPDF } from "api/pdfService";
import { getLangUrl } from "locales/utils";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Each = ({
  file,
  handleCheckboxChange,
  index,
}: {
  file: any;
  handleCheckboxChange: any;
  index: any;
}) => {
  const { t, i18n } = useTranslation();

  const {
    data: fileUrl,
    isError,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [
      "pdfUrl",
      i18n.language === "en" ? file.en_path : file.ko_path,
      file.id,
      i18n.language,
    ],
    queryFn: () =>
      downloadPDF(i18n.language === "en" ? file.en_path : file.ko_path, file.id, i18n.language),
    staleTime: Infinity, // 파일 URL은 캐시에서 만료되지 않도록 설정
    enabled: false, // 자동 실행 비활성화
    gcTime: 1000 * 60 * 3, // 3분마다 캐시 삭제
  });

  // 컴포넌트가 언마운트될 때 다운받았던 파일들 캐시 모두 삭제
  const queryClient = useQueryClient();
  useEffect(() => {
    return () => {
      queryClient.removeQueries({
        predicate: (query) => query.queryKey[0] === "pdfUrl",
      });
    };
  }, [queryClient, i18n.language, file.en_path, file.ko_path, file.id]);

  // view PDF 버튼 클릭 시
  const handlePreview = async () => {
    if (isLoading) return;

    if (!fileUrl) {
      refetch()
        .then(({ data: newUrl }) => {
          window.open(newUrl, "_blank");
        })
        .catch((error) => {
          console.error("Preview error:", error);
        });
    } else {
      window.open(fileUrl, "_blank");
    }
  };

  // PDF 생성 버튼 클릭 시 (예정? 없어진? 기능)
  // const [genLoading, setGenLoading] = useState(false);
  // const handleGeneratePDF = async () => {
  //   if (genLoading) return;
  //   try {
  //     setGenLoading(true);
  //     await generatePDF(file.id); // 서버로부터 PDF 파일 생성 요청
  //   } catch (error) {
  //     console.error("Generate PDF error:", error);
  //   } finally {
  //     setGenLoading(false);
  //   }
  // };

  const navigate = useNavigate();
  const handleRouteVisual = () => {
    navigate(getLangUrl("/visual") + `/${file.id}`);
  };

  const ResultButton = () => {
    return (
      <button
        className="flex w-20 h-[30px] px-[11px] gap-[7px] flex-shrink-0 items-center justify-center bg-white border-[1px] border-[#D9DADB] rounded-md"
        onClick={() => {
          handleRouteVisual();
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
    );
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
          <div className="flex h-full items-center">
            <ResultButton />
          </div>

          {isLoading ? (
            <div className="flex w-20 flex-shrink-0 items-center justify-center">
              <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-blue-500" />
            </div>
          ) : (
            <button
              className="relative right-0"
              onClick={() => {
                handlePreview();
              }}>
              <div className="flex w-20 rounded-md px-2 items-center justify-center bg-[#4565D8] text-[#EBF3FA] py-1 text-sm">
                PDF
              </div>
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

const getColorScore = (score: number) => {
  if (score >= 60) return "#FE5BBD"; // 60 이상일 경우
  else if (score >= 50) return "#FFA3FB"; // 50 이상 60 미만
  else if (score >= 40) return "#F3D3FF"; // 40 이상 50 미만
  else if (score >= 30) return "#BDC4FF"; // 30 이상 40 미만
  else return "#3553F3"; // 30 미만
};

export default Each;
