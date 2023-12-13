import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleLoginComp = (props) => {
  // Google API Console에서 얻은 클라이언트 ID
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  // 로그인 성공시 Server에 Token 전송
  const handleLoginSuccess = async (googleData) => {
    await axios
      .post(props.apiUrl, {
        token: googleData.credential,
      })
      .then((response) => {
        console.log("Google Login Success:", response);
        props.onLogin();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 로그인 실패시 에러 출력
  const handleLoginFailure = (error) => {
    console.error("Google Login Failure:", error);
  };

  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      buttonText="Google로 로그인"
      onSuccess={handleLoginSuccess}
      onFailure={handleLoginFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginComp;
