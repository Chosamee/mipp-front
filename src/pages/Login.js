import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginComp from "../components/login/GoogleLoginComp";

const Login = ({ onLogin }) => {
  // Google Client ID
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="my-8 text-3xl text-gray-800 font-bold">Google 로그인하고 이용해주세요</div>
      <div className="flex justify-center items-center m-auto h-20">
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          <GoogleLoginComp onLogin={onLogin} />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default Login;
