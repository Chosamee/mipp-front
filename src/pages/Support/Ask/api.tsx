import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_MIPP_API_URL;

export const fetchAsks = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/all_asks`, null, {
      withCredentials: true,
    });
    return response.data.asks;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const addAsks = async ({
  title,
  contents,
  files,
}: {
  title: string;
  contents: string;
  files: File[];
}) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("contents", contents);
  for (const file of files) {
    formData.append("files", file);
  }
  try {
    const response = await axios.post(`${API_BASE_URL}/asks`, formData, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error add posts:", error);
    throw error;
  }
};

export const fetchAsksDetail = async (id: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/ask_detail/${id}`, null, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetch detail asks:", error);
    throw error;
  }
};
