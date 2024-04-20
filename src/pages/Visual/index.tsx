import React from "react";
import { fetchVisualData } from "./api";
import { useParams } from "react-router-dom";
import RatioOverview from "./RatioOverview";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "components/views/LoadingSpinner";
import PartOverview from "./PartOverview";
import MelodyDetails from "./MelodyDetails";

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

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error</div>;

  return (
    <div className="max-w-7xl flex flex-col w-full h-auto items-center mx-auto py-20">
      <h1 className="w-full text-center text-2xl font-semibold pb-10">Visualize</h1>
      {data && data.message === errorMessage && (
        <p className="max-w-xl text-2xl px-5 py-20">
          This songs used old version service. <br />
          Please download PDF.
        </p>
      )}
      {data && data.message !== errorMessage && (
        <div className="flex flex-col gap-20 mx-auto w-full">
          <RatioOverview {...data.data1} />
          <PartOverview {...data.data2} />
          <MelodyDetails
            data3={{ ...data.data3 }}
            testTitle={data.data1.test_title}
            compTitle={data.data1.comp_title}
          />
        </div>
      )}
    </div>
  );
};

export default Visual;
