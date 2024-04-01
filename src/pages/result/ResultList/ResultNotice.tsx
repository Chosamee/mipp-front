import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import React from "react";
import { getLangUrl } from "locales/utils";

const ResultNotice = () => {
  const { i18n } = useTranslation();
  return (
    <div className="bg-[#F7F8FB] px-10 py-6 flex mb-[88px] rounded-[10px] justify-center">
      <div className="flex rounded-full bg-[#3553F3] w-[18px] h-[18px] text-white text-xs leading-5 justify-center mr-4 mt-[2px] flex-shrink-0">
        !
      </div>
      <div className="text-sm leading-6 text-[#4D535B]">
        {i18n.language === "en" ? (
          <>
            Welcome to beta test version of MIPP! The Checking will take about 10 minutes, but it
            may take longer <br />
            if there are many applicants. If errors persist, please apply through a{" "}
            <Link to={getLangUrl("/support?menu=contact")} className="underline text-blue-600">
              Contact
            </Link>
            . <br />
            You can only request up to 10 songs within 24 hours per account.
          </>
        ) : (
          <>
            MIPP 표절 검사 시스템 베타 테스트 버전에 오신 것을 환영합니다! 검사는 10분 내외, 혹은
            신청자가 많다면 더 오래 걸릴 수도 있습니다.
            <br />
            오류가 지속적으로 생긴다면,{" "}
            <Link to={getLangUrl("/support?menu=contact")} className="underline text-blue-600">
              1대1 문의하기
            </Link>
            를 통해 신청해주세요. 한 계정당 24시간 이내에 10번의 곡만 신청할 수 있습니다.
          </>
        )}
      </div>
    </div>
  );
};

export default ResultNotice;
