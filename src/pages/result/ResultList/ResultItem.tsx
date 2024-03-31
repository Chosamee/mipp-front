import React from "react";
import { IResultItem } from "../types";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getLangUrl } from "locales/utils";
import { getStatusFieldColor, getStatusText, getStatusTextColor } from "./utils";
import getFormattedDate from "components/utils/getFormattedDate";

import infoIcon from "../assets/information-icon.svg";

const errorMessage = [
  "해당 악기를 발견하지 못함",
  "오류가 발생했습니다",
  "완료",
  "링크 혹은 파일에 문제가 있습니다",
  "해당 악기가 없습니다",
  "표절곡이 없거나 파일 생성에 문제가 있습니다",
];

const ResultItem = ({
  resultItem,
  handleDeleteResult,
}: {
  resultItem: IResultItem;
  handleDeleteResult: (arg: string) => void;
}) => {
  const { musicId, title, status, requestedAt, inst } = resultItem;
  const { t, i18n } = useTranslation();

  // Link 클릭 이벤트 핸들러
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, status: string) => {
    if (status !== "완료") {
      event.preventDefault(); // 상태가 "완료"가 아니면 기본 이벤트 방지
      alert(t(`result.${status}`));
    }
  };

  return (
    <div className="flex flex-row hover:bg-[#ECF2F8] mx-auto w-full px-5">
      <div
        key={musicId}
        className="flex md:flex-row md:h-[60px] h-20 flex-col w-full items-center justify-center
        text-[#171923] text-sm font-medium border-b-[1px] border-[#E5E8EB] md:gap-6">
        <Link
          to={getLangUrl("/detail/" + musicId)}
          aria-disabled={status !== "완료"}
          onClick={(e) => handleLinkClick(e, status)}
          className={`flex flex-grow w-full md:min-w-0 md:h-full h-1/2 items-center justify-between ${
            status !== "완료" ? "cursor-default text-neutral-400" : ""
          }`}>
          <div className="truncate">
            {title === "처리 대기 중" || title === "업로드 중" ? t(`result.${title}`) : title}
          </div>
          <div className="flex w-20 flex-shrink-0 md:hidden justify-end">{t(`home.${inst}`)}</div>
        </Link>
        <div className="flex md:flex-row md:h-full h-1/2 items-center md:gap-6 self-start">
          <Link
            to={getLangUrl("/detail/" + musicId)}
            aria-disabled={status !== "완료"}
            onClick={(e) => handleLinkClick(e, status)}
            className={`flex flex-row gap-6 h-full items-center ${
              status !== "완료" ? "cursor-default" : ""
            }`}>
            <div className="w-20 flex-shrink-0 hidden md:block">{t(`home.${inst}`)}</div>
            <div className="w-24 flex-shrink-0">{getFormattedDate(requestedAt, i18n.language)}</div>
            <div className="w-32 flex-shrink-0" title={t(`result.${status}`)}>
              <div
                className="flex w-fit rounded-md px-2 items-center justify-center font-semibold"
                style={{
                  backgroundColor: getStatusFieldColor(status),
                  color: getStatusTextColor(status),
                }}>
                {t(`result.${getStatusText(status)}`) +
                  (!isNaN(Number(status)) ? " " + status + "%" : "")}
                {getStatusText(status) === "오류" && (
                  <img src={infoIcon} alt="view-info" className="h-3.5 pl-1" />
                )}
              </div>
            </div>
          </Link>
          <div className="w-11 flex md:justify-center justify-end items-center">
            <button
              onClick={() => handleDeleteResult(musicId)}
              className="w-3 text-red-600 flex-shirnk-0 "
              style={!errorMessage.includes(status) ? { color: "#A9A9A9" } : {}}
              disabled={!errorMessage.includes(status)}>
              <svg
                className="w-3 h-3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
