import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_MIPP_API_URL;

export const downloadPDF = async (filepath) => {
  const url = `${API_BASE_URL}/download`;
  const formData = new FormData();
  formData.append("filepath", filepath);

  try {
    const response = await axios.post(url, formData, {
      responseType: "blob", // 중요: 서버의 응답을 Blob으로 처리',
      withCredentials: true,
    });
    // Blob 데이터를 이용하여 다운로드 링크 생성
    return window.URL.createObjectURL(new Blob([response.data], { type: "application/pdf" }));
  } catch (error) {
    console.error("Download error:", error);
    throw error;
  }
};
