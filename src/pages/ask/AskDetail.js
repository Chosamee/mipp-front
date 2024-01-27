import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAsksDetail } from "../../api/askService";
import LoadingSpinner from "../../components/views/LoadingSpinner";
import { useTranslation } from "react-i18next";

const AskDetail = () => {
  const { id } = useParams();
  const [ask, setAsk] = useState(null);
  const { t } = useTranslation();
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await fetchAsksDetail(id);
        setAsk(response.asks);
      } catch (error) {
        console.log("print detail asks error: ", error);
      }
    };
    fetchDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      {ask ? (
        <div className="mx-auto p-4 border border-gray-300 rounded shadow-lg xl:mt-32 md:mt-48 mt-32 max-w-7xl">
          <h2 className="text-[18px] font-bold">{ask.title}</h2>
          <p className="text-gray-600">{ask.content}</p>
          {ask.responsed !== "답변 대기중" && (
            <div className="mt-4">
              <h3 className="text-md font-semibold">{t("ask.ans")} :</h3>
              <p className="text-gray-600">{ask.response}</p>
            </div>
          )}
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </React.Fragment>
  );
};

export default AskDetail;
