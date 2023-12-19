import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    isVerified: false,
    isAdmin: false,
    // 여기에 추가적인 상태나 정보를 저장할 수 있습니다.
  });

  // 토큰 검증 상태 업데이트 함수
  const updateAuthState = (newState) => {
    setAuthState(newState);
  };

  return (
    <AuthContext.Provider value={{ authState, updateAuthState }}>{children}</AuthContext.Provider>
  );
};
