import React, { createContext, useContext, useState, useEffect } from "react";
import { verifyToken } from "../../api/authService";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    // 여기에 추가적인 상태나 정보를 저장할 수 있습니다.
  });

  // 토큰 검증 상태 업데이트 함수
  const updateAuthState = (newState) => {
    setAuthState(newState);
  };

  // 새로고침 시에 로그아웃 되는거 수정
  useEffect(() => {
    const checkTokenValidity = async () => {
      const isTokenValid = await verifyToken();
      setAuthState({
        ...authState,
        isLoggedIn: isTokenValid.isValid,
      });
    };
    checkTokenValidity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ authState, updateAuthState }}>{children}</AuthContext.Provider>
  );
};
