import React from "react";
import { Helmet } from "react-helmet";

const HowtouseSEOKO = () => {
  return (
    <Helmet>
      <title>MIPP 사용 방법</title>
      <meta name="description" content="MIPP는 누가, 어떻게 사용하면 좋을까요? 음악 표절 검사를 쉽고 효과적으로 활용하는 방법을 알아보세요." />
      <meta property="og:type" content="website" />

      <meta property="og:url" content="https://aimipp.com/ko/howtouse" />
      <meta property="og:title" content="MIPP 사용 방법" />
      <meta property="og:description" content="MIPP를 활용하여 음악 표절 검사를 쉽고 효과적으로 수행하는 방법을 단계별로 알아보세요." />
      <meta property="og:image" content="https://storage.googleapis.com/domainbucket/imageog.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://aimipp.com/ko/howtouse" />
      <meta name="twitter:title" content="MIPP 사용 방법" />
      <meta name="twitter:description" content="MIPP를 활용하여 음악 표절 검사를 쉽고 효과적으로 수행하는 방법을 단계별로 알아보세요." />
      <meta name="twitter:image" content="https://storage.googleapis.com/domainbucket/imageog.png" />
      <link rel="alternate" hreflang="ko" href="https://aimipp.com/ko/howtouse" />
      <link rel="canonical" href="https://aimipp.com/ko/howtouse" />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">
        {`{
  "@context": "http://schema.org/",
  "@type": "HowTo",
  "name": "MIPP 사용 방법",
  "description": "MIPP를 통해 음악 경험을 어떻게 향상시킬 수 있는지 알아보세요.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "1단계: 쉬운 가입",
      "text": "간단히 가입하고 Google 이메일을 사용하여 로그인하세요."
    },
    {
      "@type": "HowToStep",
      "name": "2단계: 옵션 확인",
      "text": "'음악 파일(mp3, wav)' 또는 'YouTube/SoundCloud 링크' 옵션을 선택하세요. 트랙에서 보컬을 검사할지 MR을 검사할지를 선택하여 맞춤형 검사를 진행하세요."
    },
    {
      "@type": "HowToStep",
      "name": "3단계: 업로드 또는 링크 붙여넣기",
      "text": "트랙을 업로드하거나 음악 링크를 붙여넣으세요."
    },
    {
      "@type": "HowToStep",
      "name": "4단계: 표절 검사 및 모니터링",
      "text": "저희 시스템은 귀하의 음악을 데이터베이스의 상위 매치와 비교하여 표절 분석을 수행합니다. 우리는 4마디 멜로디의 유사성에 초점을 맞춥니다."
    },
    {
      "@type": "HowToStep",
      "name": "5단계: 즉각적인 결과",
      "text": "유사성에 대한 자세한 분석을 제공하며, 특정 파트를 직접 들어볼 수 있습니다. "
    },
    {
      "@type": "HowToStep",
      "name": "6단계: 보고서 받기",
      "text": "편리한 PDF 형식의 자세한 표절 보고서를 받아보세요."
    }
  ],
  "totalTime": "PT1H",
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

export default HowtouseSEOKO;
