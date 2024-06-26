import React, { useState } from "react";
import googleBrandIcon from "assets/web_light_sq_SI@3x.png";
import { handleSessionState } from "pages/Login/api";
import { useTranslation } from "react-i18next";

const GoogleLoginButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { i18n } = useTranslation();
  const initiateLogin = async () => {
    setIsLoading(true);

    try {
      localStorage.setItem("language", i18n.language);
      const redirect = await handleSessionState();
      window.location.href = redirect;
      // 성공적인 리디렉션 후에는 여기에 도달하지 않음
    } catch (error) {
      setIsLoading(false);
      console.error("Login failed:", error);
    }
  };

  return (
    <button onClick={initiateLogin} className="mt-12" disabled={isLoading}>
      <img src={googleBrandIcon} alt="구글 로그인 버튼" className="w-[300px]" />
      {/* <img src={naverBrandIcon} alt="구글 로그인 버튼" className="w-[300px]" /> */}
    </button>
  );
};

export default GoogleLoginButton;
