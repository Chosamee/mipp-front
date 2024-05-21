import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_MIPP_API_URL;

/** 토큰 검증 함수 */
// isValid: 유효한 토큰인지 여부
// action: 추가 정보 입력이 필요한지 여부
// nickname: 사용자 닉네임
// profileImage: 사용자 프로필 이미지
// email: 사용자 이메일
export const verifyToken = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/verifyToken`, null, {
      withCredentials: true,
    });
    return {
      isValid: true,
      action: response.data.action === "Additional_info_needed" ? false : true,
      nickname: response.data.nickname,
      profileImage: response.data?.profileImage,
      email: response.data?.email,
    };
  } catch (error) {
    console.error("Token verification error:");
    return {
      isValid: false,
      action: false,
    };
  }
};

/** 로그아웃 함수 */
export const handleLogout = async () => {
  try {
    await axios.post(`${API_BASE_URL}/logout`, null, { withCredentials: true });
    console.log("Logout Success:");
  } catch (error) {
    console.error("Logout api error:", error);
    throw error;
  }
};

/** 로그인 전 xss 방지를 위한 state 생성 함수 */
export const handleSessionState = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/session_state`, null, {
      withCredentials: true,
    });
    return response.data.redirect_url;
  } catch (error) {
    console.error("Error during Google Login:", error);
    throw error;
  }
};

/**  구글 로그인 함수 */
// code: 구글에서 받은 code
// state: xss 방지를 위한 state
export const handleOauthLogin = async ({ code, state }: { code: string; state: string }) => {
  const formData = new FormData();
  formData.append("code", code);
  formData.append("state", state);

  try {
    const response = await axios.post(`${API_BASE_URL}/google_token`, formData, {
      withCredentials: true,
    });
    console.log("Google Login Success:");
    return response.data;
  } catch (error) {
    console.error("Error during Login:", error);
    throw error;
  }
};

/** 회원가입 함수 */
// 추가정보 입력
export const handleRegist = async (registForm: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/additional_info`, registForm, {
      withCredentials: true,
    });
    console.log("Regist Success:");
    return response;
  } catch (error) {
    console.error("Error Regist Api:", error);
    throw error;
  }
};

/*** 닉네임 중복 확인 함수 */
export const handleCheckNicknameDuplicate = async (nickname: string) => {
  const formData = new FormData();
  formData.append("nickname", nickname);
  try {
    const response = await axios.post(`${API_BASE_URL}/nickname_check`, formData, {
      withCredentials: true,
    });
    console.log("check Success:");
    return response.data;
  } catch (error) {
    console.error("check error Api:", error);
    throw error;
  }
};
