import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { handleGoogleLogin } from "../../api/authService"; // Google 로그인 함수 임포트
import { useNavigate } from "react-router-dom";

const GoogleLoginComp = () => {
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const navigate = useNavigate();

  const handleLoginSuccess = async (googleData) => {
    try {
      await handleGoogleLogin(googleData);
      navigate("/home");
    } catch (error) {
      console.log("Google Login Error:", error);
    }
  };

  const handleLoginFailure = (error) => {
    console.error("Google Login Failure:", error);
  };

  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      onSuccess={handleLoginSuccess}
      onFailure={handleLoginFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginComp;
