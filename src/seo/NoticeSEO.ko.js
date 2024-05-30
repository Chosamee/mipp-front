import React from "react";
import { Helmet } from "react-helmet";

const NoticeSEOKO = () => {
  return (
    <Helmet>
      <title>MIPP - 공지사항</title>
      <meta name="description" content="MIPP" />

      <meta property="og:title" content="MIPP - 공지사항" />
      <meta property="og:description" content="MIPP 서비스에 관한 공지사항들을 전해드립니다." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://storage.googleapis.com/domainbucket/imageog.png" />
      <meta property="og:url" content="https://aimipp.com/ko/notice" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="MIPP - 공지사항" />
      <meta name="twitter:description" content="MIPP 서비스에 관한 공지사항들을 전해드립니다." />
      <meta name="twitter:image" content="https://storage.googleapis.com/domainbucket/imageog.png" />
    </Helmet>
  );
};

export default NoticeSEOKO;
