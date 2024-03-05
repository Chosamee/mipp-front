import { Helmet } from "react-helmet";

const IndexSEOKO = () => {
  return (
    <Helmet>
      <title>MIPP - AI 음악 표절 검사</title>
      <meta name="title" content="MIPP - AI 음악 표절 검사" />
      <meta name="description" content="MIPP를 통해 음악 작품의 표절을 정밀하게 탐지하고 보호하세요. 내 창작물의 가치를 올리는 솔루션." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://aimipp.com/ko" />
      <meta property="og:title" content="MIPP - AI 음악 표절 검사" />
      <meta property="og:description" content="MIPP를 통해 음악 작품의 표절을 정밀하게 탐지하고 보호하세요. 내 창작물의 가치를 올리는 솔루션." />
      <meta property="og:image" content="https://storage.googleapis.com/domainbucket/imageog.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://aimipp.com/ko" />
      <meta property="twitter:title" content="MIPP - AI 음악 표절 검사" />
      <meta property="twitter:description" content="MIPP를 통해 음악 작품의 표절을 정밀하게 탐지하고 보호하세요. 내 창작물의 가치를 올리는 솔루션." />
      <meta property="twitter:image" content="https://storage.googleapis.com/domainbucket/imageog.jpg" />

      <script type="application/ld+json">
        {`
        {
          "@context": "http://schema.org",
          "@type": "WebPage",
          "url": "https://aimipp.com/ko",
          "name": "Mipp",
          "description": "MIPP를 통해 음악 작품의 표절을 정밀하게 탐지하고 보호하세요. 내 창작물의 가치를 올리는 솔루션.",
          "publisher": {
            "@type": "DoubleHCompany",
            "name": "Mipp",
            "logo": {
              "@type": "ImageObject",
              "url": "https://storage.googleapis.com/domainbucket/imageog.jpg"
            }
          },
          "inLanguage": "ko-KR",
          "hasPart": [
    {
      "@type": "WebPage",
      "url": "https://aimipp.com/ko/intro",
      "name": "MIPP 소개",
      "description": "MIPP가 어떻게 음원 표절 검사를 하는지 알아보세요."
    },
    {
      "@type": "WebPage",
      "url": "https://aimipp.com/ko/howtouse",
      "name": "MIPP 사용법",
      "description": "작곡가, 가수, 투자자. 모든 음악인을 위한 MIPP 사용법 소개"
    },
    {
      "@type": "WebPage",
      "url": "https://aimipp.com/ko/faqs",
      "name": "자주 하는 질문",
      "description": "MIPP에 대해 자주하는 질문을 답변해드려요."
    },
    {
      "@type": "WebPage",
      "url": "https://aimipp.com/ko/login",
      "name": "로그인",
      "description": "MIPP에 3초만에 가입하고 로그인해보세요."
    }
  ]
        }
      `}
      </script>
    </Helmet>
  );
};
export default IndexSEOKO;
