import axios from "axios";
import { IVisualData } from "./types";

const API_BASE_URL = process.env.REACT_APP_MIPP_API_URL;

export const fetchVisualData = async (result_id: number): Promise<IVisualData> => {
  const response = await axios.put(`${API_BASE_URL}/visualize/${result_id}`, null, {
    withCredentials: true,
  });
  return response.data;
};

export const shareVisualResult = async (result_id: number): Promise<any> => {
  const response = await axios.post(`${API_BASE_URL}/share/${result_id}`, null, {
    withCredentials: true,
  });
  return response.data;
};
