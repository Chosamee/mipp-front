import { useTranslation } from "react-i18next";
import image1 from "assets/intro/icons8-name-tag-100.png";
import image2 from "assets/intro/icons8-ophthalmology-100.png";
import image3 from "assets/intro/icons8-music-100-2.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "components/auth/AuthContext";
import { getLangUrl } from "locales/utils";
import FadeInComp from "components/views/FadeInComp";
import { Helmet } from "react-helmet";

const Intro = () => {
  const { t, i18n } = useTranslation();
  const images = { image1, image2, image3 };
  const navigate = useNavigate();
  const { authState } = useAuth();
  return (
    <div className="flex h-full items-center justify-center my-auto xl:mt-32 md:mt-48 mt-32 max-w-[1500px] mx-auto">
      {i18n.language === "en" ? (
        <Helmet>
          <title>Introduction to MIPP</title>
          <meta
            name="description"
            content="Setting the standard in plagiarism detection, MIPP is forward to protecting the rights of creators through the AI technology."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://aimipp.com/en/intro" />
          <meta
            property="og:title"
            content="Introduction to MIPP: A New Era in Music Copyright Protection"
          />
          <meta
            property="og:description"
            content="MIPP sets a new standard in plagiarism detection, aiming to open new horizons in music copyright protection."
          />
          <meta property="og:image" content="https://aimipp.com/image.jpg" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://aimipp.com/en/intro" />
          <meta
            property="twitter:title"
            content="Introduction to MIPP: A New Era in Music Copyright Protection"
          />
          <meta
            property="twitter:description"
            content="MIPP sets a new standard in plagiarism detection, aiming to open new horizons in music copyright protection."
          />
          <meta name="twitter:image" content="https://aimipp.com/image.jpg" />

          <link rel="canonical" href="https://aimipp.com/en/intro" />
          <meta name="robots" content="index, follow" />
          <script type="application/ld+json">
            {`{
              "@context": "http://schema.org/",
              "@type": "AboutPage",
              name: "Introduction to MIPP",
              description:
                "Setting the standard in plagiarism detection, MIPP is forward to protecting the rights of creators through the latest AI technology.",
              url: "https://aimipp.com/en/intro",
              inLanguage: "en-US",
              publisher: {
                "@type": "Organization",
                name: "MIPP",
              },
            }`}
          </script>
        </Helmet>
      ) : (
        <Helmet>
          <title>MIPP 소개</title>
          <meta
            name="description"
            content="표절 검사의 기준, MIPP는 창작자의 권리 보호를 위해 최신 AI 기술을 연구합니다. "
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://aimipp.com/kr/intro" />
          <meta property="og:title" content="MIPP 소개: 음악 저작권 보호의 새로운 시대" />
          <meta
            property="og:description"
            content="MIPP는 표절 검사의 새로운 기준을 제시하여 음악 저작권 보호의 새로운 지평을 열어가고자 합니다."
          />
          <meta property="og:image" content="https://aimipp.com/image.jpg" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://aimipp.com/kr/intro" />
          <meta name="twitter:title" content="AIMIPP 소개: 음악 저작권 보호의 새로운 시대" />
          <meta
            name="twitter:description"
            content="MIPP는 표절 검사의 새로운 기준을 제시하여 음악 저작권 보호의 새로운 지평을 열어가고자 합니다."
          />
          <meta name="twitter:image" content="https://aimipp.com/image.jpg" />

          <link rel="canonical" href="https://aimipp.com/kr/intro" />
          <meta name="robots" content="index, follow" />
          <script type="application/ld+json">
            {`{
              "@context": "http://schema.org/",
              "@type": "AboutPage",
              name: "MIPP 소개",
              description: "MIPP는 음악 창작자의 권리 보호를 위해 최신 AI 기술을 연구합니다.",
              url: "https://aimipp.com/kr/intro",
              inLanguage: "ko-KR",
              publisher: {
                "@type": "Organization",
                name: "더블에이치컴퍼니",
              },
            }`}
          </script>
        </Helmet>
      )}
      <div className="p-5 w-full">
        <div className="text-4xl md:mb-20 mb-10 font-bold md:text-left text-center p-2">
          {t("nav.intro")}
        </div>
        <div className="mx-auto flex flex-col mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3"></div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {Object.keys(images).map((key, i) => (
              <FadeInComp
                data={
                  <div className="p-4 h-full" key={i}>
                    <div className="flex flex-col px-10 mb-10 text-center items-center border-4 border-blue-300 bg-blue-50 rounded-2xl shadow-2xl h-full">
                      <img src={images[key]} alt={`img ${i}`} className="w-12 h-12 mb-4 mt-10" />
                      <div className="md:text-3xl text-xl mb-5 font-bold">
                        {t(`intro.title${i + 1}`)}
                      </div>
                      <div className="md:text-xl text-sm">{t(`intro.content${i + 1}`)}</div>
                    </div>
                  </div>
                }
                animate={`fade-in-up-delay-${i + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Call to Action Button */}
        <div className="flex justify-center mb-10 md:mt-20 mt-10">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl text-xl"
            onClick={() =>
              authState.isLoggedIn ? navigate(getLangUrl("/home")) : navigate(getLangUrl("/login"))
            }>
            {t("startChecking")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
