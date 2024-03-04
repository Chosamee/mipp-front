import PolicyEN from "pages/docs/Policy/Policy.en";
import PolicyKO from "pages/docs/Policy/Policy.ko";
import { useTranslation } from "react-i18next";
import PolicySEOEN from "seo/PolicySEO.en";
import PolicySEOKO from "seo/PolicySEO.ko";

const PolicyPage = () => {
  const { i18n } = useTranslation();
  return (
    <div className="w-[375px] desktop:w-[1050px] mx-auto px-5 pb-32 pt-10">
      {i18n.language === "en" ? <PolicySEOEN /> : <PolicySEOKO />}

      <div className="h-20"></div>
      {i18n.language === "en" ? <PolicyEN /> : <PolicyKO />}
    </div>
  );
};

export default PolicyPage;
