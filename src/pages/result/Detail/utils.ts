export const getColorScore = (score: number) => {
  if (score >= 60) return "#FE5BBD"; // 60 이상일 경우
  else if (score >= 50) return "#FFA3FB"; // 50 이상 60 미만
  else if (score >= 40) return "#F3D3FF"; // 40 이상 50 미만
  else if (score >= 30) return "#BDC4FF"; // 30 이상 40 미만
  else return "#3553F3"; // 30 미만
};
