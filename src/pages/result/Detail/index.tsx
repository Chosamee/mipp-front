import { useEffect, useState } from "react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDetail } from "pages/result/api";
import { useTranslation } from "react-i18next";
import { getLangUrl } from "locales/utils";
import DetailList from "./DetailList";
import Criteria from "./Criteria";
import { multiDownloadPDF } from "api/pdfService";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { IFile } from "../types";
import PageLoadingSpinner from "components/views/PageLoadingSpinner";

interface IMusicData {
  title: string;
  inst: string;
}

const DetailPage = () => {
  const { id } = useParams();
  const [resultData, setresultData] = useState([]);
  const [musicData, setMusicData] = useState<IMusicData | undefined>(undefined);
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [checkedFiles, setCheckedFiles] = useState<IFile[]>([]);
  const [downloadLoading, setDownloadLoading] = useState(false);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["detailResult", id, i18n.language],
    queryFn: () => (id ? fetchDetail(id, i18n.language) : Promise.reject("No ID")),
    enabled: !!id, // id가 존재할 때만 쿼리 활성화
  });

  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: ["detailResult", id, i18n.language],
    }); // 활성 쿼리를 즉시 다시 가져옴
    if (data) {
      setresultData(data.results);
      setMusicData(data.music);
    }
    // console.log(queryClient.getQueryData(["detailResult", id, i18n.language]));
  }, [data, i18n.language, queryClient, id]);

  const [checkedCount, setCheckedCount] = useState(0);

  const getMultiDowndladPDF = async () => {
    if (downloadLoading) return;
    const checkedPaths = checkedFiles
      ?.filter((item) => item.checked)
      .map((item) => (i18n.language === "en" ? item.en_path : item.ko_path));
    if (checkedPaths?.length === 0) {
      alert("Select Files");
      return;
    }
    setDownloadLoading(true);
    try {
      const url = await multiDownloadPDF(checkedPaths);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${musicData?.title}.zip`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download error:", error);
    }
    setDownloadLoading(false);
  };

  if (isError) return <div>Error...</div>;
  if (isLoading) return <PageLoadingSpinner />;

  return (
    <div className="mx-auto pt-[50px] pb-[70px] md:pt-[150px] md:pb-[120px] w-[375px] md:w-[854px] px-5 leading-[normal] text-[#171923]">
      {/* 전체 검사결과 뒤로가기 */}
      <div className="flex items-center gap-[10px] mb-[50px]">
        <BackArrowIcon />
        <div className="text-[15px] font-medium">{t("detail.전체 검사결과")}</div>
      </div>

      {/* 노래 검사 유형 / 노래 제목 */}
      <div className="flex gap-[10px] items-center">
        <div
          className="flex bg-[#E2E8F0] rounded-[9999px] px-3 py-1 items-center justify-center w-fit flex-shrink-0
        text-[#171923] text-[14px] leading-[20px] font-semibold h-fit">
          {t(`detail.${musicData?.inst}`)}
        </div>
        <div
          className="text-[22px] md:text-2xl leading-[28px] font-semibold truncate"
          title={musicData?.title}>
          {musicData?.title}
        </div>
      </div>

      {/* 선택 파일 갯수/ 파일 다운로드 버튼 */}
      <div className="flex mt-10 md:mt-9 items-center">
        <div className="text-[17px] font-medium leading-[16px]">{t("detail.선택파일")}</div>
        <div className="text-[17px] font-medium leading-[16px] text-[#3553F3] ml-1 w-[34px]">
          ({checkedCount})
        </div>
        <button
          className="flex h-[30px] bg-[#3553F3] rounded-md px-3 items-center gap-1 ml-[18px]"
          onClick={() => {
            getMultiDowndladPDF();
          }}>
          <DownloadIcon />
          <div className="text-white text-[12px] leading-[16px] font-medium text-nowrap">
            {t("detail.파일 다운로드")}
          </div>
        </button>
        {downloadLoading && (
          <div className="ml-5 animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500" />
        )}
      </div>

      {/* 비교 결과 */}
      <DetailList
        files={resultData}
        sendCountFunc={setCheckedCount}
        checkedFiles={checkedFiles}
        setCheckedFiles={setCheckedFiles}
      />

      <div className="h-10 md:h-20" />

      {/* 표절률 기준 */}
      <Criteria />
    </div>
  );
};

const BackArrowIcon = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(getLangUrl("/result"))}>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 4.00004C14 4.17408 13.9309 4.341 13.8078 4.46407C13.6847 4.58714 13.5178 4.65628 13.3438 4.65628H2.32757L4.16506 6.36252C4.2927 6.48088 4.36809 6.64508 4.37465 6.81902C4.38121 6.99296 4.31841 7.16238 4.20006 7.29002C4.08171 7.41765 3.9175 7.49304 3.74356 7.49961C3.56962 7.50617 3.4002 7.44337 3.27257 7.32502L0.210084 4.48128C0.143822 4.41985 0.0909604 4.3454 0.05481 4.26259C0.0186597 4.17978 0 4.09039 0 4.00004C0 3.90968 0.0186597 3.8203 0.05481 3.73749C0.0909604 3.65468 0.143822 3.58022 0.210084 3.51879L3.27257 0.675058C3.4002 0.556705 3.56962 0.493904 3.74356 0.500467C3.9175 0.507031 4.08171 0.582423 4.20006 0.710057C4.31841 0.837692 4.38121 1.00711 4.37465 1.18105C4.36809 1.35499 4.2927 1.5192 4.16506 1.63755L2.32757 3.34379H13.3438C13.5178 3.34379 13.6847 3.41293 13.8078 3.536C13.9309 3.65907 14 3.82599 14 4.00004Z"
          fill="#171923"
        />
      </svg>
    </button>
  );
};

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
export default DetailPage;
