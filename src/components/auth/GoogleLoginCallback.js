import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { handleGoogleLogin } from "api/authService";
import { useAuth } from "./AuthContext";
import { getLangUrl } from "locales/utils";
const GoogleLoginCallback = () => {
  const { authState, updateAuthState } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1)); // '#' 문자를 제외하고 파라미터를 가져옴
    const token = params.get("access_token");
    console.log(token);
    const handleLoginSuccess = async (googleData) => {
      try {
        const response = await handleGoogleLogin(googleData);
        updateAuthState({
          ...authState,
          isLoggedIn: true,
        });
        // 추가정보 입력 routing 함수. 임시 주석처리.
        // if (response.message === "New User") navigate("/regist");
        // else if (response.message === "Additional Info Required") navigate("/regist");
        // else if (response.message === "login complete") navigate("/home");
        // else throw new expect();
        navigate(getLangUrl("/home"));
      } catch (error) {
        console.log("Login Error Server response:", error);
      }
    };
    if (token) {
      handleLoginSuccess(token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return <div>로그인 처리 중...</div>;
};

export default GoogleLoginCallback;
