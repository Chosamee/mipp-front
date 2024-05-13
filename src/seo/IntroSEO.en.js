import React from "react";
import { Helmet } from "react-helmet";

const IntroSEOEN = () => {
  return (
    <Helmet>
      <title>Introduce MIPP</title>
      <meta name="title" content="Introduce MIPP" />
      <meta name="description" content="Find out how MIPP detects the music plagiarism. Composers, singers, fans, and music investors: Discover our services available to you, as a musician." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://aimipp.com/en/intro" />
      <meta property="og:title" content="Introduce MIPP" />
      <meta property="og:description" content="Find out how MIPP detects the music plagiarism. Composers, singers, fans, and music investors: Discover our services available to you, as a musician." />
      <meta property="og:image" content="https://storage.googleapis.com/domainbucket/imageog.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://aimipp.com/en/intro" />
      <meta property="twitter:title" content="Introduce MIPP" />
      <meta property="twitter:description" content="Find out how MIPP detects the music plagiarism. Composers, singers, fans, and music investors: Discover our services available to you, as a musician." />
      <meta property="twitter:image" content="https://storage.googleapis.com/domainbucket/imageog.png" />

      <script type="application/ld+json">
        {`
            {
              "@context": "http://schema.org",
              "@type": "WebPage",
              "url": "https://aimipp.com/en/intro",
              "name": "Introduce MIPP",
              "description": "Find out how MIPP detects the music plagiarism. Composers, singers, fans, and music investors: Discover our services available to you, as a musician.",
              "publisher": {
                "@type": "Organization",
                "name": "MIPPIA",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://storage.googleapis.com/domainbucket/imageog.png"
                }
              },
              "inLanguage": "en-US",
              "mainEntityOfPage": "https://aimipp.com/en/intro",
              "image": {
                "@type": "ImageObject",
                "url": "https://storage.googleapis.com/domainbucket/imageog.png",
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
