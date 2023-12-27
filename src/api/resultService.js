import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_MIPP_API_URL;

export const fetchResults = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/result`, {
      withCredentials: true,
    });
    return response.data.index;
  } catch (error) {
    console.error("Error fetching results:", error);
    throw error;
  }
};

export const fetchDetail = async (id) => {
  const formData = new FormData();
  formData.append("music_id", id);

  try {
    const response = await axios.post(`${API_BASE_URL}/detail`, formData, {
      withCredentials: true,
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching detail:", error);
    throw error;
  }
};
