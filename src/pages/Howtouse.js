import React from "react";
import { useTranslation } from "react-i18next";

const Howtouse = () => {
  const { t } = useTranslation();
  return (
    <div className="flex h-full items-center justify-center bg-gray-100 my-auto pt-20 max-w-[1500px] mx-auto">
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
