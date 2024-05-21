import useWindowWidth from "components/utils/useWindowWidth";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const IntroSection1 = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([{ title: "", text: "" }]);
  const width = useWindowWidth();
  useEffect(() => {
    const newData = [
      {
        title: t("intro.section1.title1"),
        text: width < 768 ? t("intro.section1.content1Mobile") : t("intro.section1.content1"),
      },
      {
        title: t("intro.section1.title2"),
        text: width < 768 ? t("intro.section1.content2Mobile") : t("intro.section1.content2"),
      },
      {
        title: t("intro.section1.title3"),
        text: width < 768 ? t("intro.section1.content3Mobile") : t("intro.section1.content3"),
      },
    ];
    setData(newData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);
  return (
    <div className="flex flex-col py-20 md:py-[230px] w-[366px] md:w-[1300px] mx-auto px-5">
      <h2 className="text-xl md:text-2xl font-semibold leading-[normal] mb-[60px] md:mb-[86px]">
        {t("intro.section1.mainTitle")}
      </h2>
      <div className="flex flex-col gap-[50px] md:gap-[90px]">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <Subtitle idx={index + 1} title={item.title} text={item.text} />
            {index !== data.length - 1 && <div className="h-px w-full bg-[#E8E8E8]"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const Subtitle = ({ idx, title, text }: { idx: number; title: string; text: string }) => {
  const formattedNumber = String(idx).padStart(2, "0");
  return (
    <div className="flex flex-col md:flex-row gap-[22px] md:gap-[10px]">
      <div className="flex flex-col gap-[10px] md:w-[440px]">
        <div className="text-[#3553F3] text-2xl font-bold leading-8">{formattedNumber}</div>
        <h3 className="text-[57px] text-[#343434] font-bold leading-[normal]">{title}</h3>
      </div>
      <div className="text-[#343434] text-base md:text-[28px] leading-[28px] md:leading-[52px] md:w-[860px]">
        {text}
      </div>
    </div>
  );
};

export default IntroSection1;
