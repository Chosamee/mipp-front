import React, { useEffect } from "react";
import GoogleLoginButton from "../components/auth/GoogleLoginButton";
import { useTranslation } from "react-i18next";
import { getLangUrl } from "locales/utils";
import { Navigate, useNavigate } from "react-router-dom";
import LoginSEOEN from "seo/LoginSEO.en";
import LoginSEOKO from "seo/LoginSEO.ko";
import { useAuth } from "hooks/useAuth";

const Login = () => {
  // Google Client ID
  const { t, i18n } = useTranslation();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn === true) {
      navigate(getLangUrl("/home"));
    }
  });

  return (
    <React.Fragment>
      {isLoggedIn ? (
        <Navigate to={getLangUrl("/index")} />
      ) : (
        <div className="flex h-full items-center justify-center my-auto px-5 ">
          {i18n.language === "en" ? <LoginSEOEN /> : <LoginSEOKO />}

          <div className="flex flex-col pt-40">
            <h1 className="text-3xl text-gray-800 font-bold my-auto">{t("login.requiredLogin")}</h1>
            <div className="flex justify-center items-center mb-32">
              <GoogleLoginButton />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Login;
