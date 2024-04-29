import React from "react";
import { fetchVisualData, shareVisualResult } from "./api";
import { useParams } from "react-router-dom";
import RatioOverview from "./RatioOverview";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "components/views/LoadingSpinner";
import PartOverview from "./PartOverview";
import MelodyDetails from "./MelodyDetails";
import { useTranslation } from "react-i18next";

const errorMessage = "No data pkl file found";

const Visual = () => {
  const { id } = useParams();
  const numericId = id ? parseInt(id, 10) : 0; // id가 있으면 숫자로 변환, 없으면 undefined
  const { data, isLoading, error } = useQuery({
    queryKey: ["visualData", numericId],
    queryFn: () => fetchVisualData(numericId),
    enabled: numericId !== 0, // id가 존재할 때만 쿼리 실행
    staleTime: Infinity, // 캐시를 무한히 유지
    refetchInterval: 10000, // 10초마다 새로고침
  });

  const handleShare = async () => {
    try {
      await shareVisualResult(Number(id));
    } catch (error) {
      console.error("Error sharing visual result:", error);
    }
  };

  const { t } = useTranslation();
  if (isLoading)
    return (
      <div className="flex min-h-screen flex-grow">
        <LoadingSpinner />
      </div>
    );
  if (error) return <div>Error</div>;

  return (
    <div className="max-w-7xl flex flex-col w-full h-auto items-center mx-auto py-20">
      <h1 className="w-full text-center text-2xl font-semibold pb-10">{t("visual.결과")}</h1>
      <button
        className="fixed top-20 right-5 w-20 h-10 text-white bg-blue-500 rounded-xl"
        onClick={handleShare}>
        share
      </button>
      {data && data.message === errorMessage && (
        <p className="max-w-xl text-2xl px-5 py-20">
          This songs used old version service. <br />
          Please download PDF.
        </p>
      )}
      {data && data.message !== errorMessage && (
        <div className="flex flex-col gap-20 mx-auto w-full">
          <RatioOverview {...data.data1} />
          <PartOverview
            data2={{ ...data.data2 }}
            testTitle={data.data1.test_title}
            compTitle={data.data1.comp_title}
          />
          <MelodyDetails
            data3={{ ...data.data3 }}
            testTitle={data.data1.test_title}
            compTitle={data.data1.comp_title}
            inst={data.inst}
          />
        </div>
      )}
      <button
        className="fixed bottom-10 right-5 w-10 h-10 bg-blue-600 text-white rounded-lg z-30"
        onClick={() => {
          window.scrollTo(0, 0);
        }}>
        Top
      </button>
    </div>
  );
};

export default Visual;
