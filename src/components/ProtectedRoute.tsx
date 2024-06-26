import React, { ReactNode, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { getLangUrl } from "locales/utils";
import { useAuth } from "hooks/useAuth";
import PageLoadingSpinner from "components/views/PageLoadingSpinner";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isLoggedIn, isLoading, refetch } = useAuth();
  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoading) return <PageLoadingSpinner />;

  if (!isLoggedIn) {
    // 인증되지 않은 사용자를 로그인 페이지로 리디렉션
    return <Navigate to={getLangUrl("/login")} replace />;
  }

  // 인증된 사용자에게 컴포넌트 렌더링
  return children;
};

export default ProtectedRoute;
