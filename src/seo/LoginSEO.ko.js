import React from "react";
import { Helmet } from "react-helmet";

const LoginSEOKO = () => {
  return (
    <Helmet>
      <title>MIPPIA 로그인</title>
      <meta name="description" content="MIPPIA에 로그인하여 음악 표절 검사 서비스를 이용하세요. 구글 계정으로 간편하게 로그인할 수 있습니다." />

      <meta property="og:title" content="MIPPIA 로그인" />
      <meta property="og:description" content="MIPPIA에 로그인하여 음악 표절 검사 서비스를 이용하세요. 구글 계정으로 간편하게 로그인할 수 있습니다." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="<https://storage.googleapis.com/mippia-domain-bucket/imageog.png>" />
      <meta property="og:url" content="<https://mippia.com/ko/login>" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="MIPPIA 로그인" />
      <meta name="twitter:description" content="MIPPIA에 로그인하여 음악 표절 검사 서비스를 이용하세요. 구글 계정으로 간편하게 로그인할 수 있습니다." />
      <meta name="twitter:image" content="<https://storage.googleapis.com/mippia-domain-bucket/imageog.png>" />
    </Helmet>
  );
};

export default LoginSEOKO;
