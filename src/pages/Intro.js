import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <div className="flex h-full items-center justify-center bg-gray-100 my-auto pt-20 max-w-[1500px] mx-auto">
      <div className="p-10 w-full">
        <div className="text-4xl mb-10 font-bold">{t("nav.intro")}</div>
        <div className="text-xl mb-10">{t("index.3.title")}</div>

        {Array.from({ length: 3 }, (_, i) => (
          <div key={i}>
            <div className="text-xl mb-5">{t(`index.3.subtitle${i + 1}`)}</div>
            <div className="text-xl mb-10">{t(`index.3.content${i + 1}`)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Intro;
