import React from "react";
import { Helmet } from "react-helmet";

const IntroSEOEN = () => {
  return (
    <Helmet>
      <title>Introduce MIPPIA</title>
      <meta name="title" content="Introduce MIPPIA" />
      <meta name="description" content="Find out how MIPPIA detects the music plagiarism. Composers, singers, fans, and music investors: Discover our services available to you, as a musician." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mippia.com/en/intro" />
      <meta property="og:title" content="Introduce MIPPIA" />
      <meta property="og:description" content="Find out how MIPPIA detects the music plagiarism. Composers, singers, fans, and music investors: Discover our services available to you, as a musician." />
      <meta property="og:image" content="https://storage.googleapis.com/mippia-domain-bucket/imageog.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://mippia.com/en/intro" />
      <meta property="twitter:title" content="Introduce MIPPIA" />
      <meta property="twitter:description" content="Find out how MIPPIA detects the music plagiarism. Composers, singers, fans, and music investors: Discover our services available to you, as a musician." />
      <meta property="twitter:image" content="https://storage.googleapis.com/mippia-domain-bucket/imageog.png" />

      <script type="application/ld+json">
        {`
            {
              "@context": "http://schema.org",
              "@type": "WebPage",
              "url": "https://mippia.com/en/intro",
              "name": "Introduce MIPPIA",
              "description": "Find out how MIPPIA detects the music plagiarism. Composers, singers, fans, and music investors: Discover our services available to you, as a musician.",
              "publisher": {
                "@type": "Organization",
                "name": "DoubleHCompany",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://storage.googleapis.com/mippia-domain-bucket/imageog.png"
                }
              },
              "inLanguage": "en-US",
              "mainEntityOfPage": "https://mippia.com/en/intro",
              "image": {
                "@type": "ImageObject",
                "url": "https://storage.googleapis.com/mippia-domain-bucket/imageog.png",
                "width": 800,
                "height": 600
              }
            }
          `}
      </script>
    </Helmet>
  );
};

export default IntroSEOEN;
