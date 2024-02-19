import { useTranslation } from "react-i18next";

const PolicyPage = () => {
  const { i18n } = useTranslation();
  return (
    <div className="w-[375px] desktop:w-[1050px] mx-auto px-5 py-24">
      <h1 className="text-4xl desktop:text-5xl"> Privacy Policy</h1>
      <div className="h-20"></div>
    </div>
  );
};

export default PolicyPage;
