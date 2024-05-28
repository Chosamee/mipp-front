import React from "react";
import { Helmet } from "react-helmet";

const LoginSEOEN = () => {
  return (
    <Helmet>
      <title>MIPPIA Login</title>
      <meta name="description" content="Login to MIPPIA to use the music plagiarism detection service. You can easily login with your Google account." />

      <meta property="og:title" content="MIPPIA Login" />
      <meta property="og:description" content="Login to MIPPIA to use the music plagiarism detection service. You can easily login with your Google account." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://storage.googleapis.com/mippia-domain-bucket/imageog.png" />
      <meta property="og:url" content="https://mippia.com/en/login" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="MIPPIA Login" />
      <meta name="twitter:description" content="Login to MIPPIA to use the music plagiarism detection service. You can easily login with your Google account." />
      <meta name="twitter:image" content="https://storage.googleapis.com/mippia-domain-bucket/imageog.png" />
    </Helmet>
  );
};

export default LoginSEOEN;
