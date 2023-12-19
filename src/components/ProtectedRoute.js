import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useAuth } from "../util/AuthContext";
import { loadTokenFromLocalStorage } from "../util/HandleToken";
import LoadingSpinner from "./LoadingSpinner";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authState, updateAuthState } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      setIsLoading(true);
      const token = loadTokenFromLocalStorage();
      const formData = new FormData();
      formData.append("token", token);
      await axios
        .post(process.env.REACT_APP_MIPP_API_URL + "/verifyToken", formData)
        .then((response) => {
          updateAuthState({ ...authState, isLoggedIn: true, isVerified: true });
        })
        .catch((error) => {
          console.error(error);
          updateAuthState({ ...authState, isLoggedIn: false, isVerified: false });
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    verifyToken();
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
