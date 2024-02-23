import { getLangUrl } from "locales/utils";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NoticeEach = ({ item }) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  // Date 객체로 변환
  const date = new Date(item.created_at);

  // 사용자의 지역 시간대에 맞춰 포맷팅
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
    // hour12: false,
    // timeZoneName: "short",
  };
  const formatter = new Intl.DateTimeFormat(i18n.language, options).format(date);
  const formattedDate = formatter.replace(/\s+/g, "");

  return (
    <div
      key={item.id}
      className="flex w-[375px] desktop:w-[920px] h-[60px] mx-auto items-center text-[#171923] text-sm font-medium border-b-[1px] border-[#E5E8EB] hover:bg-[#ECF2F8]">
      <button
        className="w-[460px] h-[60px] pl-7 pr-3 text-start"
        onClick={() => navigate(getLangUrl("/notice/" + item.id))}>
        {i18n.language === "en" ? "en_title" : "ko_title"}
      </button>
      <div className="w-[120px] px-3">{formattedDate}</div>
    </div>
  );
};

export default NoticeEach;
