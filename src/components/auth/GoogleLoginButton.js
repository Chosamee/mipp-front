import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import googleBrandIcon from "assets/web_light_sq_SI@3x.png";
import naverBrandIcon from "assets/btnG_official.png";

const GoogleLoginButton = () => {
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const REDIRECT_URI = `${window.location.origin}/login`;

  const initiateLogin = () => {
    const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const responseType = "code";
    const scope = encodeURIComponent(
      "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
    );
    const redirectUri = encodeURIComponent(`${window.location.origin}/login/callback`); // redirect_uri 설정
    const googleURL = `${googleAuthUrl}?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

    window.location.href = googleURL; // 사용자를 Google 로그인 페이지로 리디렉션
  };

  return (
    <button onClick={initiateLogin} className="mt-20">
      <img src={googleBrandIcon} alt="구글 로그인 버튼" className="w-[300px]" />
      {/* <img src={naverBrandIcon} alt="구글 로그인 버튼" className="w-[300px]" /> */}
    </button>
  );
};

export default GoogleLoginButton;
