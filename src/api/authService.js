import axios from "axios";
import { loadTokenFromLocalStorage, saveTokenToLocalStorage } from "../util/HandleToken";

const API_BASE_URL = process.env.REACT_APP_MIPP_API_URL;

export const verifyToken = async () => {
  const token = loadTokenFromLocalStorage();
  const formData = new FormData();
  formData.append("token", token);

  try {
    await axios.post(`${API_BASE_URL}/verifyToken`, formData);
    return true;
  } catch (error) {
    console.error("Token verification error:", error);
    return false;
  }
};

export const handleGoogleLogin = async (googleData, navigate) => {
  const formData = new FormData();
  formData.append("token", googleData.credential);

  try {
    const response = await axios.post(`${API_BASE_URL}/google_token`, formData);
    console.log("Google Login Success:", response);

    localStorage.setItem("email", response.data.email);
    localStorage.setItem("name", response.data.name);
    saveTokenToLocalStorage(googleData.credential);
  } catch (error) {
    console.error("Error during Google Login:", error);
    throw error;
  }
};
