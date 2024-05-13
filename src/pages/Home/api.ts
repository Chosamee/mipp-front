import axios from "axios";
import i18n from "i18n";

const API_BASE_URL = process.env.REACT_APP_MIPP_API_URL;

interface IUploadMediaParams {
  file?: File;
  url?: string;
  inst: string;
}

export const uploadMedia = async ({ file, url, inst }: IUploadMediaParams) => {
  const formData = new FormData();

  if (file) {
    formData.append("file", file);
  } else if (url) {
    formData.append("url", url);
  } else {
    throw new Error("No file or url");
  }

  formData.append("inst", inst);
  formData.append("language", i18n.language);

  try {
    const response = await axios.post(`${API_BASE_URL}/classify`, formData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading media:", error);
    throw error;
  }
};

export const getRemain = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/check_avail_num`, null, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error get remain:", error);
    throw error;
  }
};
