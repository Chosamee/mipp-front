import React from "react";
import { Helmet } from "react-helmet";

const LoginSEOEN = () => {
  return (
    <Helmet>
      <title>MIPP Login</title>
      <meta name="description" content="Log in to MIPP to use the music plagiarism detection service. You can easily log in with your Google account." />

      <meta property="og:title" content="MIPP Login" />
      <meta property="og:description" content="Log in to MIPP to use the music plagiarism detection service. You can easily log in with your Google account." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://storage.googleapis.com/domainbucket/imageog.png" />
      <meta property="og:url" content="https://aimipp.com/en/login" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="MIPP Login" />
      <meta name="twitter:description" content="Log in to MIPP to use the music plagiarism detection service. You can easily log in with your Google account." />
      <meta name="twitter:image" content="https://storage.googleapis.com/domainbucket/imageog.png" />
    </Helmet>
  );
};

export default LoginSEOEN;
