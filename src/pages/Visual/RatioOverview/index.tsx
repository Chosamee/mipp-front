import React from "react";
import { IVisualData1 } from "../types";
import PieChartComp from "./PiechartComp";
import { useTranslation } from "react-i18next";

const RatioOverview = (data1: IVisualData1) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col px-5 mx-auto gap-6">
      <h2 className="text-xl font-semibold">{t("visual.요약")}</h2>
      <div>
        {t("visual.표절률")}: {data1.total_ratio}%
      </div>
      <div className="relative flex h-10 w-full">
        <div className="h-full bg-red-600 flex px-3" style={{ width: `${data1.total_ratio}%` }} />
        <div
          className="h-full bg-blue-600"
          style={{
            width: `${100 - data1.total_ratio}%`,
          }}
        />
        <div className="absolute left-3 top-2 text-white items-center "> {data1.total_ratio}%</div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 w-full justify-between">
        <CircleSection
          description={t("visual.검사 음원 표절 의심 구간")}
          dataTitle={data1.test_title}
          paired={data1.paired_duration_song1}
          total={data1.total_duration_song1}
        />
        <CircleSection
          description={t("visual.비교 음원 표절 의심 구간")}
          dataTitle={data1.comp_title}
          paired={data1.paired_duration_song2}
          total={data1.total_duration_song2}
        />
      </div>
    </div>
  );
};

const CircleSection = ({
  description,
  dataTitle,
  paired,
  total,
}: {
  description: string;
  dataTitle: string;
  paired: number;
  total: number;
}) => {
  return (
    <div className="flex flex-col max-w-96 w-full items-center gap-3">
      <div className="bg-blue-200 rounded p-2 w-full text-center break-keep">{description}</div>
      <PieChartComp title={dataTitle} paired_value={paired} total_value={total} />
      <div className="flex flex-row text-lg">
        <div className="text-blue-600 font-bold">{paired}</div>&nbsp;/
        {total}
      </div>
      <div className="w-full text-xl text-center break-keep pt-3">{dataTitle}</div>
    </div>
  );
};
export default RatioOverview;
