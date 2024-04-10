import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAsksDetail } from "../../../api/askService";
import LoadingSpinner from "../../../components/views/LoadingSpinner";
import { useTranslation } from "react-i18next";
import { getLangUrl } from "locales/utils";

const AskDetail = () => {
  const { id } = useParams();
  const [ask, setAsk] = useState(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await fetchAsksDetail(id);
        setAsk(response.asks);
      } catch (error) {
        console.error("print detail asks error: ", error);
        navigate(getLangUrl("/"));
      }
    };
    fetchDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {ask ? (
        <div className="mx-auto p-4 border border-gray-300 rounded shadow-lg mt-32 max-w-4xl">
          <h2 className="text-[18px] font-bold">{ask.title}</h2>
          <p className="text-gray-600">{ask.content}</p>
          {ask.is_responsed === true && (
            <div className="mt-4">
              <h3 className="text-md font-semibold">{t("ask.ans")} :</h3>
              <p className="text-gray-600">{ask.response}</p>
            </div>
          )}
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default AskDetail;
