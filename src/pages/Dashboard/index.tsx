import React from "react";
import { useEffect } from "react";
import ProfileMenu from "./components/ProfileMenu";
import ProfileImageEdit from "./ProfileEditor/ImageEditor";
import SiteMenu from "./components/SiteMenu";
import ResultDropdown from "./components/ResultDropdown";
import { useUserInfo } from "stateStore/useUserInfo";
import DashboardNotice from "./components/DashboardNotice";
import { IAlert, ICommunity, IResult } from "./dashboardType";
import { useTranslation } from "react-i18next";
import LoadingSpinner from "components/views/LoadingSpinner";
import DashboardCommunity from "./components/DashboardCommunity";
import { Link } from "react-router-dom";
import { getLangUrl } from "locales/utils";
import { useQuery } from "@tanstack/react-query";
import { fetchDashboardData } from "./api";

export interface DashboardData {
  user_info?: { nickname: string; email: string; membership: string; profileImage: string };
  dashboard_data?: {
    new_notice_available: false;
    total_plagiarism_checks: number;
    unseen_asks_count: number;
  };
  songs_result?: {
    result_list: IResult[];
  };
  alerts?: IAlert[];
  community?: ICommunity[];
}

const Dashboard = () => {
  const { t, i18n } = useTranslation();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["dashboardData", i18n.language],
    queryFn: ({ queryKey }) => {
      const [, lang] = queryKey as [string, string];
      return fetchDashboardData(lang);
    },
  });
  const setUserInfo = useUserInfo((state) => state.setUserInfo);

  useEffect(() => {
    if (data?.user_info) {
      setUserInfo(data.user_info);
    }
  }, [data, setUserInfo]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center pt-20">
        <LoadingSpinner />
      </div>
    );
  if (isError) return <div>Error occurred!</div>;

  return (
    <div className="flex flex-col justify-center pb-32 md:pt-20 pt-10 max-w-7xl mx-auto px-5">
      <h1 className="text-center mb-5 text-2xl font-bold">{t("nav.dashboard")}</h1>
      <div className="flex flex-col md:flex-row px-2 w-full md:justify-between md:gap-5 gap-16">
        <div className="flex flex-col items-center" id="left_menu">
          <ProfileMenu />

          <div className="hidden md:flex md:flex-col">
            <div className="h-16" />
            <SiteMenu dashboard_data={data?.dashboard_data} />
          </div>
        </div>
        <div className="flex flex-col gap-20 max-w-3xl w-full min-w-0" id="right_contents">
          {data?.alerts && (
            <DashboardNotice
              alerts={data.alerts}
              total_plagiarism_checks={data.dashboard_data?.total_plagiarism_checks}
            />
          )}
          {data?.songs_result && (
            <div className="flex flex-col gap-10">
              <h2 className="text-[28px] font-semibold">{t("dashboard.표절 검사 결과")}</h2>
              <ResultDropdown songs_results={data.songs_result} />
            </div>
          )}
          {data?.community && (
            <div className="flex flex-col gap-10">
              <div className="flex gap-5">
                <h2 className="text-[28px] font-semibold">{t("dashboard.커뮤니티")}</h2>
                <Link
                  to={getLangUrl("/community")}
                  className="flex gap-2 items-center text-neutral-500 text-sm self-center border-2 border-neutral-300 py-1 px-2 rounded-lg">
                  전체보기
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="8"
                    viewBox="0 0 5 6"
                    fill="none">
                    <path d="M1 5.59801L3.5 3L1 0.401855" stroke="#A2A2A2" />
                  </svg>
                </Link>
              </div>
              <DashboardCommunity community={data.community} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
