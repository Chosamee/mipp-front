import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { getLangUrl } from "locales/utils";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authState } = useAuth();

  if (!authState.isLoggedIn) {
    // 인증되지 않은 사용자는 로그인 페이지로 리디렉션
    return <Navigate to={getLangUrl("/login")} replace />;
  }

  // 인증된 사용자에게 컴포넌트 렌더링
  return <Component {...rest} />;
};

export default ProtectedRoute;
