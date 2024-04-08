import React, { useEffect } from "react";
import { fetchVisualData } from "./api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import RatioOverview from "./components/RatioOverview";

const Visual = () => {
  const { id } = useParams();
  const numericId = id ? parseInt(id, 10) : 0; // id가 있으면 숫자로 변환, 없으면 undefined
  const { data, isLoading, error } = useQuery(
    ["visualData", numericId],
    () => fetchVisualData(numericId),
    {
      enabled: numericId !== 0, // id가 존재할 때만 쿼리 실행
      staleTime: Infinity, // 캐시를 무한히 유지
    }
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl flex flex-col w-full h-auto">
      <h1 className="w-full text-center text-2xl font-semibold">Visualize</h1>

      {data && <RatioOverview {...data.data1} />}
    </div>
  );
};

export default Visual;
