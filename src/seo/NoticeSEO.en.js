import React from "react";
import { Helmet } from "react-helmet";

const NoticeSEOEN = () => {
  return (
    <Helmet>
      <title>MIPPIA - Notice</title>
      <meta name="description" content="MIPPIA" />

      <meta property="og:title" content="MIPPIA - Notice" />
      <meta property="og:description" content="Important notices about MIPPIA services." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://storage.googleapis.com/mippia-domain-bucket/imageog.png" />
      <meta property="og:url" content="https://mippia.com/en/notice" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="MIPPIA - Notice" />
      <meta name="twitter:description" content="Important notices about MIPPIA services." />
      <meta name="twitter:image" content="https://storage.googleapis.com/mippia-domain-bucket/imageog.png" />
    </Helmet>
  );
};

export default NoticeSEOEN;
