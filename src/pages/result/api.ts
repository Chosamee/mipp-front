import axios from "axios";
import { IResultItem } from "./types";

const API_BASE_URL = process.env.REACT_APP_MIPP_API_URL;

export const fetchResults = async (): Promise<IResultItem[]> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/result`, null, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching results:", error);
    throw error;
  }
};

export const fetchDetail = async (id: string, language: string) => {
  const formData = new FormData();
  formData.append("music_id", id);
  formData.append("language", language);

  try {
    const response = await axios.post(`${API_BASE_URL}/detail`, formData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching detail:", error);
    throw error;
  }
};

export const deleteResult = async (id: string) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/result/${id}`, {
      withCredentials: true,
    });
  } catch (error) {
    console.error("Error delete result:", error);
    throw error;
  }
};

export const generatePDF = async (result_id: number): Promise<any> => {
  const response = await axios.post(`${API_BASE_URL}/generate/${result_id}`, null, {
    withCredentials: true,
  });
  return response.data;
};
