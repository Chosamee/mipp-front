import getFormattedDate from "components/utils/getFormattedDate";
import { getLangUrl } from "locales/utils";
import React from "react";
import { Link } from "react-router-dom";

interface Alert {
  content: string;
  date: string;
  status: string;
}

interface DashboardNoticeProps {
  alerts: Alert[];
  total_plagiarism_checks: number | undefined;
}

const DashboardNotice = ({ alerts, total_plagiarism_checks }: DashboardNoticeProps) => {
  return (
    <div className="flex flex-col bg-slate-100 p-10 gap-10">
      <div className="flex flex-col gap-5 ">
        {alerts.map((item) => (
          <div key={item.date} className="flex flex-row gap-3 rounded-md">
            <div className="bg-blue-200 text-blue-600 rounded-md w-12 text-center">
              {item.status}
            </div>
            <div className="text-sm w-20 text-center">{getFormattedDate(item.date)}</div>
            <div className="h-full w-px bg-black" />
            <div className="text-sm truncate">{item.content}</div>
          </div>
        ))}
      </div>
      <div className="h-px w-full bg-black" />
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="text-base font-medium">내가 진행한 표절 검사 결과</div>
          <div className="text-3xl font-semibold">{total_plagiarism_checks} 개</div>
        </div>
        <Link
          to={getLangUrl("/result")}
          className="py-3 px-6 bg-neutral-300 rounded-full font-semibold text-sm">
          검사 결과 목록 보기
        </Link>
      </div>
    </div>
  );
};

export default DashboardNotice;
