import React, { useEffect, useState } from "react";
import googleBrandIcon from "assets/web_light_sq_SI@3x.png";
import { handleOauthLogin, handleSessionState } from "api/authService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useTranslation } from "react-i18next";
import { getLangUrl } from "locales/utils";

const GoogleLoginButton = () => {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const initiateLogin = async () => {
    setIsLoading(true);

    try {
      const redirect = await handleSessionState();
      window.location.href = redirect;
      // 성공적인 리디렉션 후에는 여기에 도달하지 않음
    } catch (error) {
      setIsLoading(false);
      console.error("Login failed:", error);
    }
  };
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
          setIsLoading(false);
        }
      }
    };

    handleAuthentication();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return (
    <button onClick={initiateLogin} className="mt-12" disabled={isLoading}>
      <img src={googleBrandIcon} alt="구글 로그인 버튼" className="w-[300px]" />
      {/* <img src={naverBrandIcon} alt="구글 로그인 버튼" className="w-[300px]" /> */}
    </button>
  );
};

export default GoogleLoginButton;
