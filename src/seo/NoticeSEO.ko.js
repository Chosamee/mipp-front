import React from "react";
import { Helmet } from "react-helmet";

const NoticeSEOKO = () => {
  return (
    <Helmet>
      <title>MIPPIA - 공지사항</title>
      <meta name="description" content="MIPPIA" />

      <meta property="og:title" content="MIPPIA - 공지사항" />
      <meta property="og:description" content="MIPPIA 서비스에 관한 공지사항들을 전해드립니다." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://storage.googleapis.com/mippia-domain-bucket/imageog.png" />
      <meta property="og:url" content="https://mippia.com/ko/notice" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="MIPPIA - 공지사항" />
      <meta name="twitter:description" content="MIPPIA 서비스에 관한 공지사항들을 전해드립니다." />
      <meta name="twitter:image" content="https://storage.googleapis.com/mippia-domain-bucket/imageog.png" />

      <link rel="canonical" href="https://mippia.com/ko/notice" />
    </Helmet>
  );
};

export default NoticeSEOKO;
