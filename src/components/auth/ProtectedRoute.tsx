import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { getLangUrl } from "locales/utils";
import { useAuth } from "hooks/useAuth";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;

  if (!isLoggedIn) {
    // 인증되지 않은 사용자를 로그인 페이지로 리디렉션
    return <Navigate to="/login" replace />;
  }

  // 인증된 사용자에게 컴포넌트 렌더링
  return children;
};

export default ProtectedRoute;
