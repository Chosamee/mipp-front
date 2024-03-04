import { useTranslation } from "react-i18next";
import TermsEN from "pages/docs/Terms/Terms.en";
import TermsKO from "pages/docs/Terms/Terms.ko";
import TermsSEOKO from "seo/TermsSEO.ko";
import TermsSEOEN from "seo/TermsSEO.en";

const TermsPage = () => {
  const { i18n } = useTranslation();
  return (
    <div className="w-[375px] desktop:w-[1050px] mx-auto px-5 py-24">
      {i18n.language === "en" ? <TermsSEOEN /> : <TermsSEOKO />}

      <h1 className="text-4xl desktop:text-5xl"> Terms of Service</h1>
      <div className="h-20"></div>
      {i18n.language === "en" ? <TermsEN /> : <TermsKO />}
    </div>
  );
};

export default TermsPage;
