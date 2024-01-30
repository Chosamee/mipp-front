import React, { useEffect } from "react";
import googleBrandIcon from "assets/web_light_sq_SI@3x.png";
import { handleOauthLogin, handleSessionState } from "api/authService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useTranslation } from "react-i18next";
import { getLangUrl } from "locales/utils";

const GoogleLoginButton = () => {
  const { i18n } = useTranslation();
  const initiateLogin = async () => {
    const redirect = await handleSessionState(i18n.language);
    window.location.href = redirect;
  };
  const { authState, updateAuthState } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authState.isLoggedIn === true) {
      navigate(getLangUrl("/home"));
    }
    const handleAuthentication = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      const state = urlParams.get("state");
      console.log(i18n.language);
      if (code && state) {
        try {
          // 백엔드로 인증 코드 전송 및 처리
          await handleOauthLogin(code, state, navigator.language.split("-")[0]);
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
  }, [navigate]);

  return (
    <button onClick={initiateLogin} className="mt-20">
      <img src={googleBrandIcon} alt="구글 로그인 버튼" className="w-[300px]" />
      {/* <img src={naverBrandIcon} alt="구글 로그인 버튼" className="w-[300px]" /> */}
    </button>
  );
};

export default GoogleLoginButton;
