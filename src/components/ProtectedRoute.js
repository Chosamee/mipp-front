import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../util/AuthContext";
import LoadingSpinner from "./LoadingSpinner";
import { verifyToken } from "../api/authService";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authState, updateAuthState } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const performVerification = async () => {
      setIsLoading(true);
      const isTokenValid = await verifyToken();
      updateAuthState({ ...authState, isLoggedIn: isTokenValid, isVerified: isTokenValid });
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
      ) : authState.isVerified ? (
        <Component {...rest} />
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default ProtectedRoute;
