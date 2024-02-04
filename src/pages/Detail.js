import { useEffect, useState } from "react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../components/views/LoadingSpinner";
import PDFViewer from "../components/views/PDFViewer";
import { fetchDetail } from "api/resultService";
import { useTranslation } from "react-i18next";
import { useAuth } from "components/auth/AuthContext";
import { getLangUrl } from "locales/utils";

const Detail = () => {
  const { id } = useParams();
  const [resultData, setresultData] = useState([]);
  const { t } = useTranslation();
  const { updateAuthState } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDetail(id);
        setresultData(response);
      } catch (error) {
        console.log(error);
        updateAuthState({ isLoggedIn: false });
        navigate(getLangUrl("/login"));
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container my-10 mx-auto pt-40 pb-20">
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
