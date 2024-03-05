import TryTry from "components/views/TryTry";
import IntroBanner from "./sections/IntroBanner";
import IntroSection1 from "./sections/IntroSection1";
import IntroSection2 from "./sections/IntroSection2";
import IntroSEOEN from "seo/IntroSEO.en";
import IntroSEOKO from "seo/IntroSEO.ko";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { i18n } = useTranslation();
  const seoFiles = {
    en: <IntroSEOEN />,
    ko: <IntroSEOKO />,
  };
  return (
    <>
      {seoFiles[i18n.language]}
      <IntroBanner />
      <IntroSection1 />
      <IntroSection2 />
      <TryTry />
    </>
  );
};

export default Intro;
