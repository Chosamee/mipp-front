import { handleGoogleLogin } from "api/authService";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
  const { i18n } = useTranslation();
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  //   const handleGoogleLogin = async () => {
  //     try {
  //       const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  //       const responseType = "code";
  //       const scope = encodeURIComponent(
  //         "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
  //       );
  //       const googleURL = `${googleAuthUrl}?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${responseType}&scope=${scope}`;

  //       window.location.href = googleURL;
  //     } catch (error) {
  //       console.error("워닝! 워닝! 에러발생!");
  //     }
  //   };

  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthentication = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      if (code) {
        try {
          console.log(code);

          // 백엔드로 인증 코드 전송 및 처리
          await handleGoogleLogin(code);
          navigate("/home"); // 성공 시 홈 페이지로 리디렉션
        } catch (error) {
          console.error("Authentication error:", error);
          // 오류 처리 로직
        }
      }
    };

    handleAuthentication();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  const initiateLogin = () => {
    const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const responseType = "code";
    const scope = encodeURIComponent(
      "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
    );
    // i18n에서 현재 언어 설정 가져오기
    const currentLanguage = i18n.language;

    // 현재 언어 설정을 포함한 redirect_uri 생성
    const redirectUri = encodeURIComponent(`${window.location.origin}/${currentLanguage}/login`);

    const googleURL = `${googleAuthUrl}?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
    window.location.href = googleURL; // 사용자를 Google 로그인 페이지로 리디렉션
  };

  return (
    <button onClick={initiateLogin}>
      <img
        src="https://imgnews.pstatic.net/image/016/2015/09/03/20150903000132_0_99_20150903075103.jpg?type=w647"
        width="45"
        alt="구글 로그인 버튼"
      />
    </button>
  );
};

export default GoogleLoginButton;
