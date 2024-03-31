import { useEffect, useRef, useState } from "react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../components/views/LoadingSpinner";
import PDFViewer from "../components/views/PDFViewer";
import { fetchDetail } from "pages/result/api";
import { useTranslation } from "react-i18next";
import { useAuth } from "components/auth/AuthContext";
import { getLangUrl } from "locales/utils";

const Detail = () => {
  const { id } = useParams();
  const [resultData, setresultData] = useState([]);
  const { t } = useTranslation();
  const { updateAuthState } = useAuth();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDetail(id, i18n.language);
        setresultData(response);
      } catch (error) {
        console.error(error);
        updateAuthState({ isLoggedIn: false });
        navigate(getLangUrl("/login"));
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentLang = i18n.language;
  const prevLangRef = useRef(currentLang);

  useEffect(() => {
    const prevLang = prevLangRef.current;

    // 언어가 변경되었는지 확인
    if (prevLang !== currentLang) {
      // 필요한 경우 페이지 새로고침 수행
      window.location.reload();
    }
    // 현재 언어를 이전 언어 참조로 업데이트
    prevLangRef.current = currentLang;
  }, [currentLang]); // 현재 언어가 변경될 때마다 이 효과를 실행

  return (
    <div className="container my-10 mx-auto pb-20">
      <h1 className="my-10">{t("detail")}</h1>
      {resultData ? (
        resultData.map((item, index) => (
          <PDFViewer key={index} filepath={item.path} title={item.title} />
        ))
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default Detail;
