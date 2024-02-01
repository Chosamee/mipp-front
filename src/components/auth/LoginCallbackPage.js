import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleOauthLogin } from "api/authService";
import { useAuth } from "./AuthContext";
import { getLangUrl } from "locales/utils";

const LoginCallbackPage = () => {
  const { updateAuthState } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthentication = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      const state = urlParams.get("state");

      if (code && state) {
        try {
          await handleOauthLogin(code, state);
          updateAuthState({ isLoggedIn: true });
          navigate(getLangUrl("/home"));
        } catch (error) {
          console.error("Authentication error:", error);
          navigate(getLangUrl("/login")); // 오류 시 로그인 페이지로 리디렉션
        }
      }
    };

    handleAuthentication();
  }, [navigate, updateAuthState]);

  // 로딩 인디케이터나 메시지를 추가하는 것이 좋을 수 있습니다.
  return <div>로그인 처리 중...</div>;
};

export default LoginCallbackPage;
