import composerImg from "assets/intro/composer.png";
import singerImag from "assets/intro/singer.png";
import fanImg from "assets/intro/fan.png";
import investorImg from "assets/intro/investor.png";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useWindowWidth from "components/utils/useWindowWidth";

function IntroSection2() {
  const [data, setData] = useState([]);
  const { t } = useTranslation();
  const width = useWindowWidth();
  useEffect(() => {
    const newData = [
      {
        image: composerImg,
        who: t("intro.section2.title1"),
        text: width < 768 ? t("intro.section2.content1Mobile") : t("intro.section2.content1"),
      },
      {
        image: singerImag,
        who: t("intro.section2.title2"),
        text: width < 768 ? t("intro.section2.content2Mobile") : t("intro.section2.content2"),
      },
      {
        image: fanImg,
        who: t("intro.section2.title3"),
        text: width < 768 ? t("intro.section2.content3Mobile") : t("intro.section2.content3"),
      },
      {
        image: investorImg,
        who: t("intro.section2.title4"),
        text: width < 768 ? t("intro.section2.content4Mobile") : t("intro.section2.content4"),
      },
    ];
    setData(newData);
  }, [t, width]);
  return (
    <div className="w-full bg-[#F4F6FA]">
      <div className="flex flex-col py-[60px] desktop:py-[230px] w-[326px] desktop:w-[1340px] desktop:px-5 mx-auto">
        <h2 className="text-xl desktop:text-2xl font-semibold leading-9 desktop:leading-[normal]">
          {t("intro.section2.mainTitle")}
        </h2>
        <div
          className="mt-[60px] desktop:mt-[120px]
        desktop:grid desktop:grid-cols-2 desktop:grid-rows-2 gap-5
        flex flex-col ">
          {data.map((item, index) => {
            return <Card key={index} image={item.image} who={item.who} text={item.text} />;
          })}
        </div>
      </div>
    </div>
  );
}

const Card = ({ image, who, text }) => {
  return (
    <div
      className="flex flex-col items-center justify-center w-[326px] h-[400px] desktop:w-[640px] desktop:h-[460px] bg-white rounded-[30px]"
      style={{ boxShadow: "0px 8px 10px -6px rgba(0, 0, 0, 0.05)" }}>
      <div className="flex desktop:w-[46px] desktop:h-[46px] items-center justify-center">
        <img src={image} alt="usertypes" />
      </div>
      <h3 className="flex text-center mt-5 text-[40px] font-bold leading-[normal]">{who}</h3>
      <p className="mt-[30px] text-center desktop:text-[22px] leading-7 desktop:leading-10 desktop:px-16 px-4">
        {text}
      </p>
    </div>
  );
};

export default IntroSection2;
