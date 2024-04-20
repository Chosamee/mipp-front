import React from "react";
import { useTranslation } from "react-i18next";

export interface IDetailDataProps {
  comp_chord: string;
  comp_link: string;
  comp_time: string;
  plag_ratio: number;
  test_chord: string;
  test_link: string;
  test_time: string;
  test_title: string;
  comp_title: string;
}

const DetailTable = ({
  comp_chord,
  comp_link,
  comp_time,
  plag_ratio,
  test_chord,
  test_link,
  test_time,
}: IDetailDataProps) => {
  // 링크 클릭 핸들러
  const handleLinkClick = (url: string) => {
    window.open(url, "_blank");
  };
  const { t } = useTranslation();
  return (
    <div className="flex w-full md:flex-row flex-col gap-6">
      <div className="flex md:flex-col flex-row md:w-1/3 md:justify-center gap-4 flex-shrink-0 items-center">
        <span className="text-blue-800 font-bold text-4xl flex-shrink-0 break-keep text-center">
          {t("visual.구간 표절률")}
        </span>
        <span className="text-blue-800 font-bold text-5xl flex-shrink-0">{plag_ratio}%</span>
      </div>
      <div className="md:w-2/3 w-full">
        <table className="w-full break-keep">
          <tbody>
            <tr className="border-b">
              <th className="text-left py-2 px-3 bg-gray-100 text-nowrap">
                {t("visual.검사 음원 시간")}
              </th>
              <td className="py-2 px-3">{test_time}</td>
            </tr>
            <tr className="border-b">
              <th className="text-left py-2 px-3 bg-gray-100">{t("visual.비교 음원 시간")}</th>
              <td className="py-2 px-3">{comp_time}</td>
            </tr>
            <tr className="border-b">
              <th className="text-left py-2 px-3 bg-gray-100">{t("visual.검사 음원 화성")}</th>
              <td className="py-2 px-3">{test_chord}</td>
            </tr>
            <tr className="border-b">
              <th className="text-left py-2 px-3 bg-gray-100">{t("visual.비교 음원 화성")}</th>
              <td className="py-2 px-3">{comp_chord}</td>
            </tr>
            <tr className="border-b">
              <th className="text-left py-2 px-3 bg-gray-100">{t("visual.원곡 음원 확인")}</th>
              <td
                className="py-2 px-3 text-blue-600 cursor-pointer"
                onClick={() => handleLinkClick(test_link)}>
                Music Link
              </td>
            </tr>
            <tr>
              <th className="text-left py-2 px-3 bg-gray-100">{t("visual.비교 음원 확인")}</th>
              <td
                className="py-2 px-3 text-blue-600 cursor-pointer"
                onClick={() => handleLinkClick(comp_link)}>
                Music Link
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailTable;
