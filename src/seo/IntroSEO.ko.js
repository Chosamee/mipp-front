import React from "react";
import { Helmet } from "react-helmet";

const IntroSEOKO = () => {
  return (
    <Helmet>
      <title>MIPP 소개</title>
      <meta name="title" content="MIPP 소개" />
      <meta name="description" content="MIPP이 어떻게 자동으로 음원 표절 검사를 하는지 알려드립니다. 작곡가, 가수, 팬, 음원 투자자. 당신이 음악인이라면 어떤 도움을 받을 수 있는지 알아보세요." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://aimipp.com/ko/intro" />
      <meta property="og:title" content="MIPP 소개" />
      <meta property="og:description" content="MMIPP이 어떻게 자동으로 음원 표절 검사를 하는지 알려드립니다. 작곡가, 가수, 팬, 음원 투자자. 당신이 음악인이라면 어떤 도움을 받을 수 있는지 알아보세요." />
      <meta property="og:image" content="https://storage.googleapis.com/domainbucket/imageog.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://aimipp.com/ko/intro" />
      <meta property="twitter:title" content="MIPP 소개" />
      <meta property="twitter:description" content="MIPP이 어떻게 자동으로 음원 표절 검사를 하는지 알려드립니다. 작곡가, 가수, 팬, 음원 투자자. 당신이 음악인이라면 어떤 도움을 받을 수 있는지 알아보세요." />
      <meta property="twitter:image" content="https://storage.googleapis.com/domainbucket/imageog.png" />
      <script type="application/ld+json">
        {`
            {
              "@context": "http://schema.org",
              "@type": "WebPage",
              "url": "https://aimipp.com/ko/intro",
              "name": "MIPP 소개",
              "description": "MIPP이 어떻게 자동으로 음원 표절 검사를 하는지 알려드립니다. 작곡가, 가수, 팬, 음원 투자자. 당신이 음악인이라면 어떤 도움을 받을 수 있는지 알아보세요.",
              "publisher": {
                "@type": "Organization",
                "name": "더블에이치컴퍼니",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://storage.googleapis.com/domainbucket/imageog.png"
                }
              },
              "inLanguage": "ko-KR",
              "mainEntityOfPage": "https://aimipp.com/ko/intro",
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

export default IntroSEOKO;
