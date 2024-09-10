import React from "react";
import { Helmet } from "react-helmet";

const PolicySEOEN = () => {
  return (
    <Helmet>
      <title>Privacy Policy - MIPPIA</title>
      <meta name="description" content="MIPPIA's Privacy Policy. Learn in detail about our policies and procedures related to the protection of user information." />

      <meta property="og:title" content="Privacy Policy - MIPPIA" />
      <meta property="og:description" content="MIPPIA's Privacy Policy. Learn in detail about our policies and procedures related to the protection of user information." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://storage.googleapis.com/mippia-domain-bucket/imageog.jpg" />
      <meta property="og:url" content="https://mippia.com/en/docs/policy" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Privacy Policy - MIPPIA" />
      <meta name="twitter:description" content="MIPPIA's Privacy Policy. Learn in detail about our policies and procedures related to the protection of user information." />
      <meta name="twitter:image" content="https://storage.googleapis.com/mippia-domain-bucket/imageog.jpg" />

      <link rel="canonical" href="https://mippia.com/en/docs/policy" />
    </Helmet>
  );
};

export default PolicySEOEN;
