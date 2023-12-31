import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import LoadingSpinner from "../views/LoadingSpinner";
import { verifyToken } from "../../api/authService";
import { getLangUrl } from "locales/utils";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authState, updateAuthState } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [action, setAction] = useState(true);

  useEffect(() => {
    const performVerification = async () => {
      setIsLoading(true);
      const isTokenValid = await verifyToken();
      updateAuthState({
        ...authState,
        isLoggedIn: isTokenValid.isValid,
      });
      // 임시적으로 주석처리.
      // 회원이지만 추가 정보를 입력하지 않았을 시에 작동
      // if (isTokenValid.isValid && !isTokenValid.action) {
      //   alert("추가정보를 입력해주세용");
      // }
      // setAction(isTokenValid.action);
      setIsLoading(false);
    };
    performVerification();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? (
        <div>
          <LoadingSpinner />
        </div>
      ) : authState.isLoggedIn ? (
        action ? (
          <Component {...rest} />
        ) : (
          <Navigate to={getLangUrl("/home")} />
        )
      ) : (
        <Navigate to={getLangUrl("/login")} />
      )}
    </>
  );
};

export default ProtectedRoute;
