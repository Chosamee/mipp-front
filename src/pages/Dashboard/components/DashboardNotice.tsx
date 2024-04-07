import getFormattedDate from "components/utils/getFormattedDate";
import { getLangUrl } from "locales/utils";
import React from "react";
import { Link } from "react-router-dom";
import { IAlert } from "../dashboardType";
import { useTranslation } from "react-i18next";

interface DashboardNoticeProps {
  alerts: IAlert[];
  total_plagiarism_checks: number | undefined;
}

const DashboardNotice = ({ alerts, total_plagiarism_checks }: DashboardNoticeProps) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col bg-slate-100 p-10 gap-10 w-full">
      <div className="flex flex-col gap-5 w-full">
        {alerts.map((item) => (
          <div key={item.date} className="flex gap-3 rounded-md text-sm w-full items-center">
            <div className="bg-blue-200 text-blue-600 rounded-md w-16 text-center flex-shrink-0 text-base">
              {item.status}
            </div>
            <div className="w-20 text-center flex-shrink-0 md:block hidden">
              {getFormattedDate(item.date, i18n.language)}
            </div>
            <div className="h-full w-px bg-black  flex-shrink-0 hidden md:block" />

            <div className="truncate md:truncate text-start hidden md:block flex-shrink">
              {item.content}
            </div>
            <div className="truncate md:text-start text-end md:hidden">{item.data.music_title}</div>
          </div>
        ))}
      </div>
      <div className="h-px w-full bg-black" />
      <div className="flex flex-row justify-between items-center gap-2">
        <div className="flex flex-col gap-2">
          <div className="text-base font-medium break-keep">
            {t("dashboard.내가 진행한 표절 검사 결과")}
          </div>
          <div className="text-3xl font-semibold">
            {total_plagiarism_checks} {t("dashboard.개")}
          </div>
        </div>
        <Link
          to={getLangUrl("/result")}
          className="py-3 px-6 bg-neutral-300 rounded-full font-semibold text-sm text-center break-keep">
          {t("dashboard.검사 결과 목록 보기")}
        </Link>
      </div>
    </div>
  );
};

export default DashboardNotice;
