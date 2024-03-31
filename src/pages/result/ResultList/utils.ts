const completeList = ["완료"];
const waitingList = ["처리 대기 중"];
const taskList = [
  "음원 분리 중",
  "구조 분석 중",
  "악보 분석 중",
  "음원 분석 중",
  "pdf 생성 중",
  "음원 비교 중",
];
const errorList = [
  "해당 악기가 없습니다",
  "링크 혹은 파일에 문제가 있습니다",
  "해당 악기가 없습니다",
  "표절곡이 없거나 파일 생성에 문제가 있습니다",
  "오류가 발생했습니다",
];

export const getStatusTextColor = (status: string) => {
  if (!isNaN(Number(status))) return "#009100";
  if (errorList.includes(status)) return "#DA4219";
  if (completeList.includes(status)) return "#4565D8";
  if (waitingList.includes(status)) return "#5E5F63";
  if (taskList.includes(status)) return "#009100";
};

export const getStatusFieldColor = (status: string) => {
  if (!isNaN(Number(status))) return "#e6ffe6";
  if (errorList.includes(status)) return "#FAEEEC";
  if (completeList.includes(status)) return "#EBF3FA";
  if (waitingList.includes(status)) return "#F5F5F5";
  if (taskList.includes(status)) return "#e6ffe6";
};

export const getStatusText = (status: string) => {
  if (!isNaN(Number(status))) return "percent";
  if (errorList.includes(status)) return "오류";
  if (completeList.includes(status)) return "결과 보기";
  if (waitingList.includes(status)) return "처리 대기 중";
  if (taskList.includes(status)) return status;
};
