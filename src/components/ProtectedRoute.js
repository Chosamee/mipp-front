import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import LoadingSpinner from "./LoadingSpinner";
import { verifyToken } from "../api/authService";

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
      if (isTokenValid.isValid && !isTokenValid.action) {
        alert("추가정보를 입력해주세용");
      }
      setAction(isTokenValid.action);
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
          <Navigate to="/regist" />
        )
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default ProtectedRoute;
