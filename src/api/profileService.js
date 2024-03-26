import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_MIPP_API_URL;

export const fetchProfile = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/profile`, null, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetchProfile Api:", error);
    throw error;
  }
};

// export const updateProfile = async (userInfo) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/modify_profile`, userInfo, {
//       withCredentials: true,
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetchProfile Api:", error);
//     throw error;
//   }
// };

export const deleteUser = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/delete_user`, null, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetchProfile Api:", error);
    throw error;
  }
};
