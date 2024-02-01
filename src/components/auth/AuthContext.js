import React, { createContext, useContext, useState, useEffect } from "react";
import { verifyToken } from "../../api/authService";
import { useLocation } from "react-router-dom";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

const protectedRoutes = ["/mypage", "/board", "/result", "/home", "/asks", "/detail"];

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    isLoading: true,
    // 여기에 추가적인 상태나 정보를 저장
  });
  const location = useLocation();

  // 토큰 검증 상태 업데이트 함수
  const updateAuthState = (newState) => {
    setAuthState(newState);
  };

  useEffect(() => {
    const checkToken = async () => {
      const isTokenValid = await verifyToken(); // 서버에 토큰 유효성 검증 요청
      setAuthState({ isLoggedIn: isTokenValid.isValid, isLoading: false });
      if (!isTokenValid) {
        clearInterval(interval); // 인증 실패시 인터벌 중지
      }
    };
    checkToken();
    const interval = setInterval(checkToken, 5 * 60 * 1000); // 예: 5분마다 검증

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 중지
  }, []);

  // 새로고침 시에 로그아웃 되는거 수정
  useEffect(() => {
    const checkTokenValidity = async () => {
      try {
        const isTokenValid = await verifyToken();
        setAuthState({
          ...authState,
          isLoggedIn: isTokenValid.isValid,
        });
      } catch (error) {
        console.error("Authentication error:", error);
      }
    };
    const pathParts = location.pathname.split("/").slice(2);
    const pathWithoutLang = `/${pathParts.join("/")}`;
    const pathIsProtected = protectedRoutes.some((protectedPath) =>
      pathWithoutLang.startsWith(protectedPath)
    );
    if (pathIsProtected) {
      checkTokenValidity();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <AuthContext.Provider value={{ authState, updateAuthState }}>{children}</AuthContext.Provider>
  );
};
