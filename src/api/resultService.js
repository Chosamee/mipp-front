import axios from "axios";
import { loadTokenFromLocalStorage } from "../util/HandleToken";

const API_BASE_URL = process.env.REACT_APP_MIPP_API_URL;

export const fetchResults = async () => {
  const token = loadTokenFromLocalStorage();
  const formData = new FormData();
  formData.append("token", token);

  try {
    const response = await axios.post(`${API_BASE_URL}/result`, formData);
    return response.data.index;
  } catch (error) {
    console.error("Error fetching results:", error);
    throw error;
  }
};
