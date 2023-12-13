// ResultPage.js

import React from "react";
import { useLocation } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const result = location.state?.result || "No result available";

  return (
    <div>
      <h2>결과 페이지</h2>
      <p>서버에서 받은 결과: {result}</p>
    </div>
  );
};

export default ResultPage;
