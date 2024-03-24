import React from "react";
import { useEffect } from "react";
import ProfileMenu from "./components/ProfileMenu";
import ProfileImageEdit from "./ProfileEdit/ProfileImageEdit";
import SiteMenu from "./components/SiteMenu";
import ResultDropdown from "./components/ResultDropdown";
import { useUserInfo } from "stateStore/useUserInfo";
import { useDashboardDataQuery } from "./api";
import DashboardNotice from "./components/DashboardNotice";
import { Alert, Result } from "./dashboardType";

export interface DashboardData {
  user_info?: { nickname: string; email: string; membership: string; profile_link: string };
  dashboard_data?: {
    new_notice_available: false;
    total_plagiarism_checks: number;
    unseen_asks_count: number;
  };
  songs_result?: {
    result_list: Result[];
  };
  alerts?: Alert[];
}

const Dashboard = () => {
  const { data, isError, isLoading } = useDashboardDataQuery();
  const setUserInfo = useUserInfo((state) => state.setUserInfo);

  useEffect(() => {
    if (data?.user_info) {
      setUserInfo(data.user_info);
    }
  }, [data, setUserInfo]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred!</div>;

  return (
    <div className="flex flex-col justify-center pb-32 py-20">
      <h1 className="text-center mb-5 text-2xl">Dashboard</h1>
      <div className="flex flex-row px-2 mx-auto w-fit gap-28">
        <div className="flex flex-col" id="left_menu">
          <ProfileMenu />
          <div className="h-16" />
          <SiteMenu dashboard_data={data?.dashboard_data} />
        </div>
        <div className="flex flex-col gap-20" id="right_contents">
          {data?.alerts && (
            <DashboardNotice
              alerts={data.alerts}
              total_plagiarism_checks={data.dashboard_data?.total_plagiarism_checks}
            />
          )}
          {data?.songs_result && (
            <div className="flex flex-col gap-10">
              <h2 className="text-[28px] font-semibold">표절 검사 결과</h2>
              <ResultDropdown songs_results={data.songs_result} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
