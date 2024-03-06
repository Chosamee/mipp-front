import React from "react";
import { Helmet } from "react-helmet";

const NoticeSEOEN = () => {
  return (
    <Helmet>
      <title>MIPP - Notice</title>
      <meta name="description" content="MIPP" />

      <meta property="og:title" content="MIPP - Notice" />
      <meta property="og:description" content="Important notices about MIPP services." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://storage.googleapis.com/domainbucket/imageog.png" />
      <meta property="og:url" content="https://aimipp.com/en/notice" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="MIPP - Notice" />
      <meta name="twitter:description" content="Important notices about MIPP services." />
      <meta name="twitter:image" content="https://storage.googleapis.com/domainbucket/imageog.png" />
    </Helmet>
  );
};

export default NoticeSEOEN;
