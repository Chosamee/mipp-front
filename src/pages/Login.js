import React from "react";
import GoogleLoginButton from "../components/auth/GoogleLoginButton";
import { useTranslation } from "react-i18next";
import { useAuth } from "components/auth/AuthContext";
import { getLangUrl } from "locales/utils";
import { Navigate } from "react-router-dom";

const Login = () => {
  // Google Client ID
  const { t } = useTranslation();
  const { authState } = useAuth();
  return (
    <React.Fragment>
      {authState.isLoggedIn ? (
        <Navigate to={getLangUrl("/index")} />
      ) : (
        <div className="flex h-full items-center justify-center my-auto px-5 xl:mt-32 md:mt-48 mt-32 ">
          <div className="flex flex-col pt-40">
            <div className="text-3xl text-gray-800 font-bold my-auto">
              {t("login.requiredLogin")}
            </div>
            <div className="flex justify-center items-center h-20">
              <GoogleLoginButton />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Login;
