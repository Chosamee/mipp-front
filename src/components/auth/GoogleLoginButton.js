import React from "react";

const GoogleLoginButton = () => {
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const REDIRECT_URI = `${window.location.origin}/login/callback`;

  const handleGoogleLogin = async () => {
    try {
      const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";
      const responseType = "token";
      const scope = encodeURIComponent(
        "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
      );
      const googleURL = `${googleAuthUrl}?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${responseType}&scope=${scope}`;

      window.location.href = googleURL;
    } catch (error) {
      console.error("워닝! 워닝! 에러발생!");
    }
  };

  return (
    <button onClick={handleGoogleLogin}>
      <img
        src="https://imgnews.pstatic.net/image/016/2015/09/03/20150903000132_0_99_20150903075103.jpg?type=w647"
        width="45"
        alt="구글 로그인 버튼"
      />
    </button>
  );
};

export default GoogleLoginButton;
