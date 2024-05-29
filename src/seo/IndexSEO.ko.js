import { Helmet } from "react-helmet";

const IndexSEOKO = () => {
  return (
    <Helmet>
      <title>MIPPIA - AI 음악 표절 검사</title>
      <meta name="title" content="MIPPIA - AI 음악 표절 검사" />
      <meta name="description" content="MIPP을 통해 노래 표절 검사를 진행해보세요. AI 음악 멜로디 분석을 통해 작곡 표절을 탐지하여 창작물의 가치를 올리는 솔루션을 제공합니다." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mippia.com/ko" />
      <meta property="og:title" content="MIPPIA - AI 음악 표절 검사" />
      <meta property="og:description" content="MIPP을 통해 노래 표절 검사를 진행해보세요. AI 음악 멜로디 분석을 통해 작곡 표절을 탐지하여 창작물의 가치를 올리는 솔루션을 제공합니다." />
      <meta property="og:image" content="https://storage.googleapis.com/mippia-domain-bucket/imageog.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://mippia.com/ko" />
      <meta property="twitter:title" content="MIPPIA - AI 음악 표절 검사" />
      <meta property="twitter:description" content="MIPP을 통해 노래 표절 검사를 진행해보세요. AI 음악 멜로디 분석을 통해 작곡 표절을 탐지하여 창작물의 가치를 올리는 솔루션을 제공합니다." />
      <meta property="twitter:image" content="https://storage.googleapis.com/mippia-domain-bucket/imageog.png" />
      <link rel="canonical" href="https://mippia.com/ko" />
      <script type="application/ld+json">
        {`
           {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://mippia.com/ko",
            "name": "Mippia",
            "description": "MIPP을 통해 노래 표절 검사를 진행해보세요. AI 음악 멜로디 분석을 통해 작곡 표절을 탐지하여 창작물의 가치를 올리는 솔루션을 제공합니다.",
            "publisher": {
              "@type": "Organization",
              "name": "미피아",
              "logo": {
                "@type": "ImageObject",
                "url": "https://storage.googleapis.com/mippia-domain-bucket/imageog.png"
              }
            },
            "inLanguage": "ko-KR",
            "hasPart": [
              {
                "@type": "WebPage",
                "url": "https://mippia.com/ko/intro",
                "name": "MIPPIA 소개",
                "description": "MIPPIA가 어떻게 음원 표절 검사를 하는지 알아보세요."
              },
              {
                "@type": "WebPage",
                "url": "https://mippia.com/ko/howtouse",
                "name": "MIPPIA 사용법",
                "description": "작곡가, 가수, 투자자, 팬. 모든 음악인을 위한 MIPPIA 사용법 소개"
              },
              {
                "@type": "WebPage",
                "url": "https://mippia.com/ko/faqs",
                "name": "자주 하는 질문",
                "description": "MIPPIA에 대해 자주하는 질문을 답변해드려요."
              },
              {
                "@type": "WebPage",
                "url": "https://mippia.com/ko/login",
                "name": "로그인",
                "description": "MIPPIA에 바로 가입하고 로그인해보세요."
              }
            ]
          }
          `}
      </script>
    </Helmet>
  );
};
export default IndexSEOKO;
