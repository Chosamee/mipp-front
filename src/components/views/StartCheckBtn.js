import { getLangUrl } from "locales/utils";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const StartCheckBtn = ({ textColor }) => {
  const { t } = useTranslation();
  return (
    <Link
      to={getLangUrl("/home")}
      className={`py-[22px] px-[46px] items-center bg-white font-semibold desktop:font-bold
      leading-[normal] desktop:text-[23px] text-[16px] text-[${textColor}]
      rounded-[100px] w-fit`}>
      {t("startChecking")}
    </Link>
  );
};

export default StartCheckBtn;
