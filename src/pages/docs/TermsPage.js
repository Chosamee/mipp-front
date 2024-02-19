import { useTranslation } from "react-i18next";
import TermsEn from "./TermsEn";
import TermsKo from "./TermsKo";

const TermsPage = () => {
  const { i18n } = useTranslation();
  return (
    <div className="w-[375px] desktop:w-[1050px] mx-auto px-5 py-24">
      <h1 className="text-4xl desktop:text-5xl"> Terms of Service</h1>
      <div className="h-20"></div>
      {i18n.language === "en" ? <TermsEn /> : <TermsKo />}
    </div>
  );
};

export default TermsPage;
