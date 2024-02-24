import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_MIPP_API_URL;

export const fetchAllNotices = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/all_notices`, null, {
      withCredentials: true,
    });
    return response.data.notices;
  } catch (error) {
    console.error("Error fetching notices:", error);
    throw error;
  }
};

export const fetchNotice = async (notice_id) => {
  const formData = new FormData();
  formData.append("notice_id", notice_id);
  try {
    const response = await axios.post(`${API_BASE_URL}/notice_detail`, formData, {
      withCredentials: true,
    });
    return response.data.notice;
  } catch (error) {
    console.error("Error fetch notice detail:", error);
    throw error;
  }
};
