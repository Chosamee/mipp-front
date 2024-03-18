import { useEffect, useState } from "react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getLangUrl } from "locales/utils";
import { fetchNotice } from "../api";
import getFormattedDate from "components/utils/getFormattedDate";
import LoadingSpinner from "components/views/LoadingSpinner";

const NoticeDetail = () => {
  const { id } = useParams();
  const [notice, setNotice] = useState();
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchNotice(id);
        setNotice(response);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formattedDate = notice && getFormattedDate(notice.created_at, i18n.language);

  return (
    <div className="mx-auto pt-[50px] pb-[70px] desktop:pt-[150px] desktop:pb-[120px] w-[375px] desktop:w-[854px] px-5 leading-[normal] text-[#171923]">
      {/* 전체 검사결과 뒤로가기 */}
      <div className="flex items-center gap-[10px] mb-[50px]">
        <BackArrowIcon />
        <div className="text-[15px] font-medium">
          {i18n.language === "en" ? "All notices" : "목록으로"}
        </div>
      </div>

      {notice ? (
        <>
          <div className="flex flex-col gap-4">
            <div className="flex items-center text-[22px] desktop:text-[24px] leading-[28px] font-semibold">
              {i18n.language === "en" ? notice.en_title : notice.ko_title}
            </div>
            <div className="flex justify-end">{formattedDate}</div>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: i18n.language === "en" ? notice.en_content : notice.ko_content,
            }}
            className="mt-20 text-lg"></div>
          {/* <div className="flex items-center text-lg mt-10">
            {i18n.language === "en" ? notice.en_content : notice.ko_content}
          </div> */}
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

const BackArrowIcon = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(getLangUrl("/notice"))}>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 4.00004C14 4.17408 13.9309 4.341 13.8078 4.46407C13.6847 4.58714 13.5178 4.65628 13.3438 4.65628H2.32757L4.16506 6.36252C4.2927 6.48088 4.36809 6.64508 4.37465 6.81902C4.38121 6.99296 4.31841 7.16238 4.20006 7.29002C4.08171 7.41765 3.9175 7.49304 3.74356 7.49961C3.56962 7.50617 3.4002 7.44337 3.27257 7.32502L0.210084 4.48128C0.143822 4.41985 0.0909604 4.3454 0.05481 4.26259C0.0186597 4.17978 0 4.09039 0 4.00004C0 3.90968 0.0186597 3.8203 0.05481 3.73749C0.0909604 3.65468 0.143822 3.58022 0.210084 3.51879L3.27257 0.675058C3.4002 0.556705 3.56962 0.493904 3.74356 0.500467C3.9175 0.507031 4.08171 0.582423 4.20006 0.710057C4.31841 0.837692 4.38121 1.00711 4.37465 1.18105C4.36809 1.35499 4.2927 1.5192 4.16506 1.63755L2.32757 3.34379H13.3438C13.5178 3.34379 13.6847 3.41293 13.8078 3.536C13.9309 3.65907 14 3.82599 14 4.00004Z"
          fill="#171923"
        />
      </svg>
    </button>
  );
};

export default NoticeDetail;
