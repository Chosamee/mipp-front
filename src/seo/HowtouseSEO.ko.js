import React from "react";
import { Helmet } from "react-helmet";

const HowtouseSEOKO = () => {
  return (
    <Helmet>
      <title>MIPP 사용 방법</title>
      <meta name="description" content="MIPP로 음악 표절 검사를 하는 방법을 단계별로 알아보세요. 간편한 로그인부터 결과 확인까지의 과정을 안내합니다." />

      <meta property="og:title" content="MIPP 사용 방법" />
      <meta property="og:description" content="MIPP로 음악 표절 검사를 하는 방법을 단계별로 알아보세요. 간편한 로그인부터 결과 확인까지의 과정을 안내합니다." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://storage.googleapis.com/domainbucket/imageog.png" />
      <meta property="og:url" content="https://aimipp.com/ko/howtouse" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="MIPP 사용 방법" />
      <meta name="twitter:description" content="MIPP로 음악 표절 검사를 하는 방법을 단계별로 알아보세요. 간편한 로그인부터 결과 확인까지의 과정을 안내합니다." />
      <meta name="twitter:image" content="https://storage.googleapis.com/domainbucket/imageog.png" />

      <script type="application/ld+json">
        {`
            {
              "@context": "http://schema.org",
              "@type": "HowTo",
              "name": "MIPP 사용 방법",
              "description": "MIPP로 음악 표절 검사를 하는 방법을 단계별로 알아보세요.",
              "step": [
                {
                  "@type": "HowToStep",
                  "text": "구글 이메일 계정으로 회원가입과 로그인을 해주세요."
                },
                {
                  "@type": "HowToStep",
                  "text": "표절 검사 신청을 위한 옵션 선택: 음원 업로드 또는 유튜브/사운드클라우드 링크"
                },
                {
                  "@type": "HowToStep",
                  "text": "표절 검사 및 결과 확인: 가장 높은 표절률을 보이는 곡들을 추출하고, 표절 의심 구간을 출력합니다."
                },
                {
                  "@type": "HowToStep",
                  "text": "검사 결과 확인 및 결과 확인서 다운로드: 전체 표절률, 표절 의심 구간, 구간별 표절률 등의 정보 확인"
                }
              ],
              "image": "https://storage.googleapis.com/domainbucket/imageog.png",
              "inLanguage": "ko-KR"
            }
          `}
      </script>
    </Helmet>
  );
};

export default HowtouseSEOKO;
