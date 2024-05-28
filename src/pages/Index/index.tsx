import React, { useLayoutEffect } from "react";
import IndexSEOKO from "seo/IndexSEO.ko";
import IndexSEOEN from "seo/IndexSEO.en";
import { useTranslation } from "react-i18next";
import IndexBanner from "./sections/IndexBanner";
import IndexSection1 from "./sections/IndexSection1";
import IndexSection2 from "./sections/IndexSection2";
import IndexSection3 from "./sections/IndexSection3";
import IndexSection4 from "./sections/IndexSection4";

const Index = () => {
  const { i18n } = useTranslation();
  const seoFiles: { [key: string]: JSX.Element } = {
    en: <IndexSEOEN />,
    ko: <IndexSEOKO />,
  };

  useLayoutEffect(() => {
    alert("Service Under Maintenance \nhttps://aimipp.com/en/notice/15");
  }, []);

  return (
    <>
      {seoFiles[i18n.language]}
      <IndexBanner />
      <IndexSection1 />
      <IndexSection2 />
      <IndexSection3 />
      <IndexSection4 />
    </>
  );
};

export default Index;
