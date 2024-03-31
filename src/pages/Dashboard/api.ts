import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { DashboardData } from ".";
import { ProfileEditorResponse } from "./ProfileEditor";

const API_BASE_URL = process.env.REACT_APP_MIPP_API_URL as string;

export const updateProfileImage = async (image: File) => {
  interface Iresult {
    data: { profile_link: string };
  }
  const formData = new FormData();
  formData.append("file", image);

  try {
    const response: AxiosResponse<Iresult> = await axios.post(
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

const fetchDashboardData = async (lang: string): Promise<DashboardData> => {
  const response = await axios.post(`${API_BASE_URL}/dashboard?lang=${lang}`, null, {
    withCredentials: true,
  });
  console.log(response.data);
  return response.data;
};

export const useDashboardDataQuery = (lang: string) =>
  useQuery<DashboardData, Error>(["dashboardData", lang], () => fetchDashboardData(lang));

export const updateProfile = async ({
  nickname,
  imageFile,
}: {
  nickname: string;
  imageFile: File | null;
}): Promise<ProfileEditorResponse> => {
  const formData = new FormData();
  if (imageFile) formData.append("profile_image", imageFile);
  formData.append("info_json", JSON.stringify({ nickname: nickname }));

  try {
    const response = await axios.put(`${API_BASE_URL}/profile`, formData, {
      withCredentials: true,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // 서버에서 응답한 에러를 처리
      throw new Error(error.response?.data.message || "An unknown error occurred");
    }
    // 네트워크 에러 또는 기타 에러를 처리
    throw new Error("An unknown error occurred");
  }
};

export const checkNameDuplicate = async (nickname: string): Promise<boolean> => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/profile/check-nickname?nickname=${nickname}`,
      null,
      {
        withCredentials: true,
      }
    );
    console.log("check Success:");
    return response.data.isAvailable;
  } catch (error) {
    console.error("check error Api:", error);
    throw error;
  }
};
