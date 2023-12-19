import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { saveTokenToLocalStorage } from "../../util/HandleToken";
import { useNavigate } from "react-router-dom";

const GoogleLoginComp = (props) => {
  // Google API Console에서 얻은 클라이언트 ID
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  // 로그인 성공시 Server에 Token 전송
  const handleLoginSuccess = async (googleData) => {
    const formData = new FormData();
    formData.append("token", googleData.credential);
    await axios
      .post(props.apiUrl, formData)
      .then((response) => {
        console.log("Google Login Success:", response);

        localStorage.setItem("email", response.data.email);
        localStorage.setItem("name", response.data.name);
        async function saveAndNavigate() {
          await saveTokenToLocalStorage(googleData.credential);
          handleNavigate("/home");
        }
        saveAndNavigate();
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
      onSuccess={handleLoginSuccess}
      onFailure={handleLoginFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginComp;
