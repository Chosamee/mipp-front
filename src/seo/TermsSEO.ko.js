import React from "react";
import { Helmet } from "react-helmet";

const TermsSEOKO = () => {
  return (
    <Helmet>
      <title>서비스 이용약관 - MIPPIA</title>
      <meta name="description" content="MIPPIA 음악 표절 검사 서비스 이용약관. MIPPIA 서비스를 이용하기 전에 읽어보시기 바랍니다." />

      <meta property="og:title" content="서비스 이용약관 - MIPPIA" />
      <meta property="og:description" content="MIPPIA 음악 표절 검사 서비스 이용약관. MIPPIA 서비스를 이용하기 전에 읽어보시기 바랍니다." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://storage.googleapis.com/mippia-domain-bucket/imageog.jpg" />
      <meta property="og:url" content="https://mippia.com/ko/docs/terms" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="서비스 이용약관 - MIPPIA" />
      <meta name="twitter:description" content="MIPPIA 음악 표절 검사 서비스 이용약관. MIPPIA 서비스를 이용하기 전에 읽어보시기 바랍니다." />
      <meta name="twitter:image" content="https://storage.googleapis.com/mippia-domain-bucket/imageog.jpg" />

      <link rel="canonical" href="https://mippia.com/ko/docs/terms" />
    </Helmet>
  );
};

export default TermsSEOKO;
