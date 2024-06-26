import React from "react";
import { Helmet } from "react-helmet";

const IntroSEOKO = () => {
  return (
    <Helmet>
      <title>MIPPIA 소개</title>
      <meta name="title" content="MIPPIA 소개" />
      <meta name="description" content="MIPPIA가 어떻게 자동으로 음원 표절 검사를 하는지 알려드립니다. 작곡가, 가수, 팬, 음원 투자자. 당신이 음악인이라면 어떤 도움을 받을 수 있는지 알아보세요." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mippia.com/ko/intro" />
      <meta property="og:title" content="MIPPIA 소개" />
      <meta property="og:description" content="MIPPIA가 어떻게 자동으로 음원 표절 검사를 하는지 알려드립니다. 작곡가, 가수, 팬, 음원 투자자. 당신이 음악인이라면 어떤 도움을 받을 수 있는지 알아보세요." />
      <meta property="og:image" content="https://storage.googleapis.com/mippia-domain-bucket/imageog.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://mippia.com/ko/intro" />
      <meta property="twitter:title" content="MIPPIA 소개" />
      <meta property="twitter:description" content="MIPPIA가 어떻게 자동으로 음원 표절 검사를 하는지 알려드립니다. 작곡가, 가수, 팬, 음원 투자자. 당신이 음악인이라면 어떤 도움을 받을 수 있는지 알아보세요." />
      <meta property="twitter:image" content="https://storage.googleapis.com/mippia-domain-bucket/imageog.png" />

      <link rel="canonical" href="https://mippia.com/ko/intro" />

      <script type="application/ld+json">
        {`
            {
              "@context": "http://schema.org",
              "@type": "WebPage",
              "url": "https://mippia.com/ko/intro",
              "name": "MIPPIA 소개",
              "description": "MIPPIA가 어떻게 자동으로 음원 표절 검사를 하는지 알려드립니다. 작곡가, 가수, 팬, 음원 투자자. 당신이 음악인이라면 어떤 도움을 받을 수 있는지 알아보세요.",
              "publisher": {
                "@type": "Organization",
                "name": "미피아",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://storage.googleapis.com/mippia-domain-bucket/imageog.png"
                }
              },
              "inLanguage": "ko-KR",
              "mainEntityOfPage": "https://mippia.com/ko/intro",
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

export default IntroSEOKO;
