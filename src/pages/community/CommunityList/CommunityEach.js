import getFormattedDate from "components/utils/getFormattedDate";
import { getLangUrl } from "locales/utils";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CommunityEach = ({ item }) => {
  const { i18n } = useTranslation();
  const formattedDate = getFormattedDate(item.created_at, i18n.language); // getFormattedDate 함수를 사용하여 날짜 포맷팅

  return (
    <div className="flex w-[326px] md:w-[920px] h-fit md:h-[60px] mx-auto items-center text-[#171923] text-sm font-medium border-b-[1px] border-[#E5E8EB] hover:bg-[#ECF2F8]">
      <div className="w-5 md:w-10 px-1">{item.id}</div>
      <Link
        className="flex w-[205px] md:w-[500px] h-full pl-7 pr-3 text-start items-center"
        to={getLangUrl("/community/" + item.id)}>
        {i18n.language === "en" ? item.title : item.title}
      </Link>
      <div className="md:w-[200px] px-3">{item.nickname}</div>
      <div className="md:w-[120px] px-3">{formattedDate}</div>
      <div className="md:w-[60px] px-3">♡ {item.likes}</div>
    </div>
  );
};

export default CommunityEach;
