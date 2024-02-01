import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Howtouse = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex h-full items-center justify-center my-auto xl:mt-32 md:mt-48 mt-32 max-w-[1500px] mx-auto">
      {i18n.language === "en" ? (
        <Helmet>
          <title>How to Use MIPP</title>
          <meta
            name="description"
            content="Follow our guide on how to use MIPP. Learn how to perform music plagiarism checks easily and effectively."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://aimipp.com/en/howtouse" />
          <meta property="og:title" content="Guide on How to Use MIPP" />
          <meta
            property="og:description"
            content="Discover how to use MIPP for easy and effective music plagiarism checks with our step-by-step guide."
          />
          <meta property="og:image" content="https://aimipp.com/image.jpg" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://aimipp.com/en/howtouse" />
          <meta name="twitter:title" content="Guide on How to Use MIPP" />
          <meta
            name="twitter:description"
            content="Discover how to use MIPP for easy and effective music plagiarism checks with our step-by-step guide."
          />
          <meta name="twitter:image" content="https://aimipp.com/image.jpg" />

          <link rel="canonical" href="https://aimipp.com/en/howtouse" />
          <meta name="robots" content="index, follow" />
          <script type="application/ld+json">
            {`{
  "@context": "http://schema.org/",
  "@type": "HowTo",
  "name": "How to Use MIPP",
  "description": "Discover how MIPP elevates your music experience.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Step 1: Easy Sign-Up",
      "text": "Join us in a snap! Sign up and log in using your Google email for a quick start."
    },
    {
      "@type": "HowToStep",
      "name": "Step 2: Check Your Option",
      "text": "Select 'Music file(mp3, wav)' or 'YouTube/SoundCloud link' option. Choose whether your track includes vocals or is purely instrumental for a customized check."
    },
    {
      "@type": "HowToStep",
      "name": "Step 3: Upload or Paste Link",
      "text": "Upload your tracks or paste your music links – it's as simple as that."
    },
    {
      "@type": "HowToStep",
      "name": "Step 4: Plagiarism Check and Monitoring",
      "text": "Our system conducts an in-depth plagiarism analysis, comparing your music against the top matches in our database. We focus on melody similarities over a 4-bar sequence."
    },
    {
      "@type": "HowToStep",
      "name": "Step 5: Instant Results",
      "text": "We provide a detailed breakdown of similarities, pinpointing specific sections for your review."
    },
    {
      "@type": "HowToStep",
      "name": "Step 6: Get Your Report",
      "text": "Grab your detailed plagiarism report in a handy PDF format. It's perfect for keeping records or sharing with your team."
    }
  ],
  "totalTime": "PT1H",
  "inLanguage": "en-US",
  "publisher": {
    "@type": "Organization",
    "name": "DoubleH Company"
  }
}`}
          </script>
        </Helmet>
      ) : (
        <Helmet>
          <title>MIPP 사용 방법</title>
          <meta
            name="description"
            content="MIPP는 누가, 어떻게 사용하면 좋을까요? 음악 표절 검사를 쉽고 효과적으로 활용하는 방법을 알아보세요."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://aimipp.com/ko/howtouse" />
          <meta property="og:title" content="MIPP 사용 방법" />
          <meta
            property="og:description"
            content="MIPP를 활용하여 음악 표절 검사를 쉽고 효과적으로 수행하는 방법을 단계별로 알아보세요."
          />
          <meta property="og:image" content="https://aimipp.com/image.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://aimipp.com/ko/howtouse" />
          <meta name="twitter:title" content="MIPP 사용 방법" />
          <meta
            name="twitter:description"
            content="MIPP를 활용하여 음악 표절 검사를 쉽고 효과적으로 수행하는 방법을 단계별로 알아보세요."
          />
          <meta name="twitter:image" content="https://aimipp.com/image.jpg" />
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
      )}
      <div className="p-10 w-full">
        <div className="text-4xl mb-10 font-bold">{t("nav.howToUse")}</div>
        <div className="text-xl mb-10">{t("howtouse.title")}</div>

        {Array.from({ length: 4 }, (_, i) => (
          <div key={i}>
            <div className="text-xl mb-5">{t(`howtouse.subtitle${i + 1}`)}</div>
            <div className="text-xl mb-10">{t(`howtouse.content${i + 1}`)}</div>
          </div>
        ))}

        <div className="h-32"></div>

        <div className="grid md:grid-rows-6">
          {Array.from({ length: 6 }, (_, i) => (
            <div className="flex flex-col md:grid md:grid-cols-4 md:mb-10 mb-12" key={i}>
              <div className="text-xl mr-10 md:col-span-1 ml-2 mb-5">
                {t(`howtouse.step${i + 1}title`)}
              </div>
              <div className="text-xl md:col-span-3 pl-2">{t(`howtouse.step${i + 1}content`)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Howtouse;
