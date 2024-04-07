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
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col gap-12 w-48">
      <div className="flex flex-col gap-5">
        <div className="font-semibold text-lg">{t("dashboard.커뮤니티")}</div>
        <div className="flex flex-col gap-3">
          <Link to={getLangUrl("/community")} className="text-base">
            {t("dashboard.게시판")}
          </Link>
          <div className="bg-neutral-200 h-px w-full" />
          <Link to={getLangUrl("/")} onClick={(e) => e.preventDefault()}>
            {t("dashboard.내 활동 (출시 예정)")}
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="font-semibold text-lg">{t("dashboard.결제")}</div>
        <div className="flex flex-col gap-3">
          <Link to={getLangUrl("/")} onClick={(e) => e.preventDefault()}>
            {t("dashboard.멤버십 관리 (출시 예정)")}
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="font-semibold text-lg">{t("dashboard.고객센터")}</div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-2 items-center">
            <Link to={getLangUrl("/support?menu=contact")} className="text-base">
              {t("dashboard.문의내역")}
            </Link>
            {dashboard_data && dashboard_data?.unseen_asks_count > 0 && (
              <div className="flex items-center justify-center bg-blue-500 rounded-full h-5 text-white w-5 text-center text-sm">
                {dashboard_data?.unseen_asks_count}
              </div>
            )}
          </div>
          <div className="bg-neutral-200 h-px w-full" />
          <div className="flex flex-row gap-2 items-center">
            <Link to={getLangUrl("/support?menu=notice")}>{t("dashboard.공지사항")}</Link>
            {dashboard_data && dashboard_data?.new_notice_available && (
              <div className="flex items-center justify-center bg-blue-500 rounded-full h-5 text-white w-5 text-center text-sm">
                N
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SiteMenu;
