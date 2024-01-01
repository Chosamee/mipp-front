import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginButton from "../components/auth/GoogleLoginButton";
import { useTranslation } from "react-i18next";

const Login = () => {
  // Google Client ID
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const { t } = useTranslation();
  return (
    <div className="flex h-full items-center justify-center bg-gray-100 my-auto w-max-7xl pt-20">
      <div className="flex flex-col pt-40">
        <div className="text-3xl text-gray-800 font-bold my-auto">{t("login.requiredLogin")}</div>
        <div className="flex justify-center items-center h-20">
          <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <GoogleLoginButton />
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
};

export default Login;
