const getFormattedDate = (date: string, language: string): string => {
  console.log("date: ", date);
  // Date 객체로 변환
  const datetoDate = new Date(date);

  // 사용자의 지역 시간대에 맞춰 포맷팅
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
    // hour12: false,
    // timeZoneName: "short",
  };
  const formatter = new Intl.DateTimeFormat(language, options).format(datetoDate);
  const formattedDate = formatter.replace(/\s+/g, "");

  return formattedDate;
};

export default getFormattedDate;
