import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { handleGoogleLogin } from "../api/authService"; // Google 로그인 함수 임포트
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = async (reponse) => {
    try {
      await handleGoogleLogin(reponse);
      navigate("/home");
    } catch (error) {
      console.log("Login Error Server response:", error);
    }
  };

  const handleLoginFailure = (error) => {
    console.error("Google Login Failure:", error);
  };

  return (
    <GoogleLogin
      buttonText="Login"
      onSuccess={handleLoginSuccess}
      onFailure={handleLoginFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginButton;
