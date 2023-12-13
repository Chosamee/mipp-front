import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import NaverLoginComp from "../components/login/NaverLoginComp";
import GoogleLoginComp from "../components/login/GoogleLoginComp";

const Login = ({ onLogin }) => {
  // Google Client ID
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const googleApiUrl = process.env.REACT_APP_MIPP_API_URL + "/google_token";
  return (
    <div>
      <h2 className="text-center mt-4">Google 로그인 예제</h2>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <GoogleLoginComp apiUrl={googleApiUrl} onLogin={onLogin} />
      </GoogleOAuthProvider>
      {/* <NaverLoginComp /> */}
    </div>
  );
};

export default Login;
