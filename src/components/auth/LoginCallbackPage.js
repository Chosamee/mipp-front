import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleOauthLogin } from "api/authService";
import { useAuth } from "./AuthContext";
import { getLangUrl } from "locales/utils";

const LoginCallbackPage = () => {
  const { authState, updateAuthState } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const handleAuthentication = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      const state = urlParams.get("state");

      if (code && state) {
        try {
          // 백엔드로 인증 코드 전송 및 처리
          await handleOauthLogin(code, state);
          updateAuthState({
            ...authState,
            isLoggedIn: true,
          });
          navigate(getLangUrl("/home")); // 성공 시 홈 페이지로 리디렉션
        } catch (error) {
          console.error("Authentication error:", error);
          // 오류 처리 로직
        }
      }
    };

    handleAuthentication();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div></div>;
};

export default LoginCallbackPage;