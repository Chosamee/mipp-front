import TryTry from "components/views/TryTry";
import Banner from "./sections/Banner";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
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
      <Banner />
      <Section1 />
      <Section2 />
      <TryTry />
    </>
  );
};

export default Intro;
