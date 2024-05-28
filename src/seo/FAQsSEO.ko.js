import React from "react";
import { Helmet } from "react-helmet";

const FAQsSEOKO = () => {
  return (
    <Helmet>
      <title>MIPPIA - 자주 묻는 질문</title>
      <meta name="description" content="MIPPIA 음악 표절 검사 서비스에 대한 자주 묻는 질문과 답변을 확인하세요. 사용자의 궁금증을 해소해 드립니다." />

      <meta property="og:title" content="MIPPIA - 자주 묻는 질문" />
      <meta property="og:description" content="MIPPIA 음악 표절 검사 서비스에 대한 자주 묻는 질문들과 답변들을 확인하세요. 사용자의 궁금증을 해소해 드립니다." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://storage.googleapis.com/mippia-domain-bucket/imageog.png" />
      <meta property="og:url" content="https://mippia.com/ko/faq" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="MIPPIA - 자주 묻는 질문" />
      <meta name="twitter:description" content="MIPPIA 음악 표절 검사 서비스에 대한 자주 묻는 질문들과 답변들을 확인하세요. 사용자의 궁금증을 해소해 드립니다." />
      <meta name="twitter:image" content="https://storage.googleapis.com/mippia-domain-bucket/imageog.png" />
    </Helmet>
  );
};

export default FAQsSEOKO;
