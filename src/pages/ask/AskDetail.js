import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAsksDetail } from "../../api/askService";
import LoadingSpinner from "../../components/views/LoadingSpinner";

const AskDetail = () => {
  const { id } = useParams();
  const [ask, setAsk] = useState(null);
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
    <>
      {ask ? (
        <div className="p-4 border border-gray-300 rounded shadow-lg xl:pt-32 md:pt-48 pt-32 ">
          <h2 className="text-lg font-bold">{ask.title}</h2>
          <p className="text-gray-600">{ask.content}</p>
          {ask.responsed !== "답변 대기중" && (
            <div className="mt-4">
              <h3 className="text-md font-semibold">답변:</h3>
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
