import React from "react";
import { Helmet } from "react-helmet";

const IntroSEOKO = () => {
  return (
    <Helmet>
      <title>MIPP 소개</title>
      <meta name="description" content="표절 검사의 기준, MIPP는 창작자의 권리 보호를 위해 최신 AI 기술을 연구합니다. " />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://aimipp.com/ko/intro" />
      <meta property="og:title" content="MIPP 소개: 음악 저작권 보호의 새로운 시대" />
      <meta property="og:description" content="MIPP는 표절 검사의 새로운 기준을 제시하여 음악 저작권 보호의 새로운 지평을 열어가고자 합니다." />
      <meta property="og:image" content="https://storage.googleapis.com/domainbucket/imageog.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://aimipp.com/ko/intro" />
      <meta name="twitter:title" content="AIMIPP 소개: 음악 저작권 보호의 새로운 시대" />
      <meta name="twitter:description" content="MIPP는 표절 검사의 새로운 기준을 제시하여 음악 저작권 보호의 새로운 지평을 열어가고자 합니다." />
      <meta name="twitter:image" content="https://storage.googleapis.com/domainbucket/imageog.jpg" />
      <link rel="alternate" hreflang="ko" href="https://aimipp.com/ko/intro" />

      <link rel="canonical" href="https://aimipp.com/ko/intro" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {`{
  "@context": "http://schema.org/",
  "@type": "AboutPage",
  "name": "MIPP 소개",
  "description": "MIPP는 음악 창작자의 권리 보호를 위해 최신 AI 기술을 연구합니다.",
  "url": "https://aimipp.com/ko/intro",
  "inLanguage": "ko-KR",
  "publisher": {
    "@type": "Organization",
    "name": "더블에이치컴퍼니"
  }
}`}
      </script>
    </Helmet>
  );
};

export default IntroSEOKO;
