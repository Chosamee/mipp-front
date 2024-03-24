import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { DashboardData } from ".";

const API_BASE_URL = process.env.REACT_APP_MIPP_API_URL as string;

export const updateProfileImage = async (image: File) => {
  interface result {
    data: { profile_link: string };
  }
  const formData = new FormData();
  formData.append("file", image);

  try {
    const response: AxiosResponse<result> = await axios.post(
      `${API_BASE_URL}/add_profile_image`,
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error update profile image:", error);
  }
};

const fetchDashboardData = async (): Promise<DashboardData> => {
  const API_BASE_URL = process.env.REACT_APP_MIPP_API_URL as string;
  const response = await axios.post(`${API_BASE_URL}/dashboard`, null, {
    withCredentials: true,
  });
  console.log(response.data);
  return response.data;
};

export const useDashboardDataQuery = () =>
  useQuery<DashboardData, Error>("dashboardData", fetchDashboardData);
