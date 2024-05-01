import React from "react";
import { useParams } from "react-router-dom";
import { fetchAsksDetail } from "./api";
import LoadingSpinner from "../../../components/views/LoadingSpinner";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";

const AskDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const {
    data: askDetail,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["askDetail", id],
    queryFn: () => fetchAsksDetail(id!),
    enabled: id !== undefined && id !== null,
    gcTime: 60 * 30 * 1000, // 30분
  });
  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error</div>;

  return (
    <>
      <div className="mx-auto p-4 border border-gray-300 rounded shadow-lg mt-32 max-w-4xl">
        <h2 className="text-[18px] font-bold">{askDetail.asks.title}</h2>
        <p className="text-gray-600">{askDetail.asks.content}</p>
        {askDetail.asks.is_responsed === true && (
          <div className="mt-4">
            <h3 className="text-md font-semibold">{t("ask.ans")} :</h3>
            <p className="text-gray-600">{askDetail.asks.response}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default AskDetail;
