import React from "react";
import { ICommunity } from "../dashboardType";
import getFormattedDate from "components/utils/getFormattedDate";
import { useTranslation } from "react-i18next";
import { getLangUrl } from "locales/utils";
import { Link } from "react-router-dom";

interface CommunityProps {
  community: ICommunity[];
}

const DashboardCommunity = ({ community }: CommunityProps) => {
  const { i18n } = useTranslation();
  return (
    <div className="flex flex-col items-center w-full">
      {community.map((item, index) => (
        <Link
          to={getLangUrl(`/community/${item.id}`)}
          key={index}
          className="flex flex-col md:flex-row w-full px-3 md:gap-5 h-20 md:h-14 items-start md:items-center text-sm justify-between
        border-b-[1px] border-neutral-200 hover:bg-neutral-100">
          <div
            className="flex h-1/2 md:h-full items-center max-w-full md:max-w-96 justify-center truncate"
            title={item.title}>
            <div className="truncate">{item.title}</div>
          </div>
          <div className="flex h-1/2 md:h-full gap-3 items-center">
            <div className="w-28 truncate">{item.username}</div>
            <div className="w-20">{getFormattedDate(item.created_at, i18n.language)}</div>
            <div className="w-10">♡ {item.like_num}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DashboardCommunity;
