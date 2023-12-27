import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_MIPP_API_URL;

export const verifyToken = async () => {
  try {
    await axios.post(`${API_BASE_URL}/verifyToken`, null, { withCredentials: true });
    return true;
  } catch (error) {
    console.error("Token verification error:", error);
    return false;
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

export const handleGoogleLogin = async (reponse) => {
  const formData = new FormData();
  formData.append("token", reponse.credential);

  try {
    const response = await axios.post(`${API_BASE_URL}/google_token`, formData);
    console.log("Google Login Success:", response);
  } catch (error) {
    console.error("Error during Google Login:", error);
    throw error;
  }
};
