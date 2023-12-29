import { useEffect, useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import PDFViewer from "../components/PDFViewer";
import { fetchDetail } from "api/resultService";

const Detail = () => {
  const { id } = useParams();
  const [resultData, setresultData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDetail(id);
        setresultData(response);
      } catch (error) {}
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container my-10 mx-auto">
      <h1 className="my-10">상세 정보</h1>
      {resultData ? (
        resultData.map((item, index) => <PDFViewer filepath={item.path} />)
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default Detail;
