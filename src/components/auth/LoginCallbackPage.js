import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleOauthLogin } from "api/authService";
import { useAuth } from "./AuthContext";
import { getLangUrl } from "locales/utils";
import LoadingSpinner from "components/views/LoadingSpinner";
import { useTranslation } from "react-i18next";

const LoginCallbackPage = () => {
  const { updateAuthState } = useAuth();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthentication = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      const state = urlParams.get("state");

      if (code && state) {
        i18n.changeLanguage(localStorage.getItem("language")); // 로컬 스토리지에 언어 설정 저장
        localStorage.removeItem("language");
        try {
          const response = await handleOauthLogin(code, state);
          console.log(response);
          updateAuthState({ isLoggedIn: true, user_id: response.user_id });
          navigate(getLangUrl("/home"));
        } catch (error) {
          console.error("Authentication error:", error);
          navigate(getLangUrl("/login")); // 오류 시 로그인 페이지로 리디렉션
        }
      }
    };

    handleAuthentication();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex pt-[300px] pb-[200px] items-center">
      <LoadingSpinner />
    </div>
  );
};

export default LoginCallbackPage;
