import React from "react";
import { Helmet } from "react-helmet";

const LoginSEOKO = () => {
  return (
    <Helmet>
      <title>MIPP 로그인</title>
      <meta name="description" content="MIPP에 로그인하여 음악 표절 검사 서비스를 이용하세요. 구글 계정으로 간편하게 로그인할 수 있습니다." />

      <meta property="og:title" content="MIPP 로그인" />
      <meta property="og:description" content="MIPP에 로그인하여 음악 표절 검사 서비스를 이용하세요. 구글 계정으로 간편하게 로그인할 수 있습니다." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="<https://storage.googleapis.com/domainbucket/imageog.png>" />
      <meta property="og:url" content="<https://aimipp.com/ko/login>" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="MIPP 로그인" />
      <meta name="twitter:description" content="MIPP에 로그인하여 음악 표절 검사 서비스를 이용하세요. 구글 계정으로 간편하게 로그인할 수 있습니다." />
      <meta name="twitter:image" content="<https://storage.googleapis.com/domainbucket/imageog.png>" />
    </Helmet>
  );
};

export default LoginSEOKO;
