import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginButton from "../components/auth/GoogleLoginButton";
import { useTranslation } from "react-i18next";
import { useAuth } from "components/auth/AuthContext";
import { getLangUrl } from "locales/utils";
import { Navigate } from "react-router-dom";

const Login = () => {
  // Google Client ID
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const { t } = useTranslation();
  const { authState } = useAuth();
  return (
    <>
      {authState.isLoggedIn ? (
        <Navigate to={getLangUrl("/index")} />
      ) : (
        <div className="flex h-full items-center justify-center my-auto pt-20">
          <div className="flex flex-col pt-40">
            <div className="text-3xl text-gray-800 font-bold my-auto">
              {t("login.requiredLogin")}
            </div>
            <div className="flex justify-center items-center h-20">
              <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                <GoogleLoginButton />
              </GoogleOAuthProvider>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
