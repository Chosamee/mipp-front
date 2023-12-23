import axios from "axios";
import { loadTokenFromLocalStorage } from "../util/HandleToken";

const API_BASE_URL = process.env.REACT_APP_MIPP_API_URL;

export const uploadMedia = async ({ file, url, inst }) => {
  const token = loadTokenFromLocalStorage();
  const formData = new FormData();

  if (file) {
    formData.append("file", file);
  } else if (url) {
    formData.append("url", url);
  }

  formData.append("token", token);
  formData.append("inst", inst);

  try {
    const response = await axios.post(`${API_BASE_URL}/classify`, formData);
    return response.data;
  } catch (error) {
    console.error("Error uploading media:", error);
    throw error;
  }
};
