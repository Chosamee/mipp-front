import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { handleGoogleLogin } from "../api/authService"; // Google 로그인 함수 임포트
import { useNavigate } from "react-router-dom";

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = async (googleData) => {
    try {
      const response = await handleGoogleLogin(googleData);
      // 추가정보 입력 routing 함수. 임시 주석처리.
      // if (response.message === "New User") navigate("/regist");
      // else if (response.message === "Additional Info Required") navigate("/regist");
      // else if (response.message === "login complete") navigate("/home");
      // else throw new expect();
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
