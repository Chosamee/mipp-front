import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_MIPP_API_URL;

export const verifyToken = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/verifyToken`, null, {
      withCredentials: true,
    });
    console.log("verify: ", response);
    return {
      isValid: true,
      action: response.data.action === "Additional_info_needed" ? false : true,
    };
  } catch (error) {
    console.error("Token verification error:", error);
    return {
      isValid: false,
      action: false,
    };
  }
};

export const handleLogout = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/logout`, null, { withCredentials: true });
    console.log("Logout Success:", response);
  } catch (error) {
    console.error("Logout api error:", error);
    throw error;
  }
};

export const handleSessionState = async (language) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/session_state?language=${language}`, {
      withCredentials: true,
    });
    return response.data.redirect_url;
  } catch (error) {
    console.error("Error during Google Login:", error);
    throw error;
  }
};

export const handleOauthLogin = async (code, state) => {
  const formData = new FormData();
  formData.append("code", code);
  formData.append("state", state);
  try {
    const response = await axios.post(`${API_BASE_URL}/google_token`, formData, {
      withCredentials: true,
    });
    console.log("Google Login Success:", response);
    return response.data;
  } catch (error) {
    console.error("Error during Login:", error);
    throw error;
  }
};

export const handleGoogleLogin = async (googleData) => {
  const formData = new FormData();
  formData.append("token", googleData.credential);
  try {
    const response = await axios.post(`${API_BASE_URL}/google_token`, formData, {
      withCredentials: true,
    });
    console.log("Google Login Success:", response);
    return response.data;
  } catch (error) {
    console.error("Error during Google Login:", error);
    throw error;
  }
};

export const handleRegist = async (registForm) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/additional_info`, registForm, {
      withCredentials: true,
    });
    console.log("Regist Success:", response);
    return response;
  } catch (error) {
    console.error("Error Regist Api:", error);
    throw error;
  }
};

export const handleCheckNicknameDuplicate = async (nickname) => {
  console.log(nickname);
  const formData = new FormData();
  formData.append("nickname", nickname);
  try {
    const response = await axios.post(`${API_BASE_URL}/nickname_check`, formData, {
      withCredentials: true,
    });
    console.log("check Success:", response.data);
    return response.data;
  } catch (error) {
    console.error("check error Api:", error);
    throw error;
  }
};
