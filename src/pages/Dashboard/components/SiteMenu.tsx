import { getLangUrl } from "locales/utils";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface SiteMenuProps {
  dashboard_data?: {
    new_notice_available: false;
    total_plagiarism_checks: number;
    unseen_asks_count: number;
  };
}

const SiteMenu = ({ dashboard_data }: SiteMenuProps) => {
  const { i18n } = useTranslation();
  return (
    <div className="flex flex-col gap-12 w-64">
      <div className="flex flex-col gap-5">
        <div className="font-semibold text-lg">커뮤니티</div>
        <div className="flex flex-col gap-3">
          <Link to={getLangUrl("/community")} className="text-base">
            게시판
          </Link>
          <div className="bg-neutral-200 h-px w-full" />
          <Link to={getLangUrl("/")} onClick={(e) => e.preventDefault()}>
            내 활동 ({i18n.language === "ko" ? "출시 예정" : "Coming Soon"})
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="font-semibold text-lg">결제</div>
        <div className="flex flex-col gap-3">
          <Link to={getLangUrl("/")} onClick={(e) => e.preventDefault()}>
            멤버십 관리 ({i18n.language === "ko" ? "출시 예정" : "Coming Soon"})
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="font-semibold text-lg">고객센터</div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-2 items-center">
            <Link to={getLangUrl("/support?menu=ask")} className="text-base">
              1:1 문의내역
            </Link>
            {dashboard_data && (
              <div className="flex items-center justify-center bg-blue-500 rounded-full h-5 text-white w-5 text-center text-sm">
                {dashboard_data?.unseen_asks_count}
              </div>
            )}
          </div>
          <div className="bg-neutral-200 h-px w-full" />
          <div className="flex flex-row gap-2 items-center">
            <Link to={getLangUrl("/support?menu=notice")}>공지사항</Link>
            {dashboard_data && (
              <div className="flex items-center justify-center bg-blue-500 rounded-full h-5 text-white w-5 text-center text-sm">
                {!dashboard_data?.new_notice_available && "N"}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SiteMenu;
