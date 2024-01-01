import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "components/auth/AuthContext";
import logo from "logo.svg";
import { handleLogout } from "api/authService";
import LanguageSwitcher from "components/views/LanguageSwitcher";
import { getLangUrl } from "locales/utils";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { authState, updateAuthState } = useAuth();
  const { t } = useTranslation();
  // navigate 기능
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    try {
      await handleLogout();
      updateAuthState({ ...authState, isLoggedIn: false });
      navigate("/");
      setIsMenuOpen(false); // 메뉴 닫기
    } catch (error) {
      console.log("logout error: ", error);
    }
  };

  // 햄버거 메뉴 상태 관리
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //bg-gradient-to-r from-purple-500/50 to-blue-600/50 backdrop-blur
  return (
    <nav className="backdrop-blur-xl text-white bg-black bg-opacity-75 h-20 fixed top-0 left-0 right-0 z-30 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo and title */}
          <button onClick={() => navigate(getLangUrl("/"))} className="flex items-center px-2">
            <img src={logo} alt="MIPP Logo" className="h-7" />
            <span className="self-center text-3xl font-bold whitespace-nowrap pl-4">MIPP</span>
          </button>
          {/* Navigation Links and Language Select */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Language Select */}
            <LanguageSwitcher />
            {/* Other Links */}
            <button className="flex items-center px-4">
              <span className="" onClick={() => navigate(getLangUrl("/intro"))}>
                {t("nav.intro")}
              </span>
            </button>
            <button className="flex items-center px-4">
              <span className="" onClick={() => navigate(getLangUrl("/howtouse"))}>
                {t("nav.howToUse")}
              </span>
            </button>
            <button className="flex items-center px-4">
              <span className="" onClick={() => navigate(getLangUrl("/board"))}>
                {t("nav.request")}
              </span>
            </button>
            <button className="flex items-center px-4">
              <span className="" onClick={() => navigate(getLangUrl("/home"))}>
                {t("startChecking")}
              </span>
            </button>
            <button className="flex items-center px-4">
              <span className="" onClick={() => navigate(getLangUrl("/mypage"))}>
                {t("nav.myAccount")}
              </span>
            </button>
            <button className="flex items-center px-4">
              {authState.isLoggedIn && (
                <span className="" onClick={handleLogoutClick}>
                  {t("nav.logout")}
                </span>
              )}
            </button>
          </div>
          <div className="relative md:hidden">
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="text-white px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring transition">
              메뉴
            </button>
            {/* Dropdown Menu */}
            {/* <div
            className={`absolute right-0 top-20 mt-2 p-5 bg-white text-black rounded shadow-lg ${
              isMenuOpen ? "block" : "hidden"
            } sm:hidden`}>
          </div> */}
            {/* 드롭다운 메뉴 */}
            <div
              className={`absolute right-0 top-20 mt-2 p-5 bg-white text-black rounded shadow-lg w-48 ${
                isMenuOpen ? "block" : "hidden"
              }`}>
              {!authState.isLoggedIn ? (
                <button
                  onClick={() => navigate(getLangUrl("/login"))}
                  className="block w-full text-left">
                  로그인
                </button>
              ) : (
                <>
                  <button
                    onClick={() => navigate(getLangUrl("/asks"))}
                    className="block w-full text-left">
                    문의글
                  </button>
                  <button
                    onClick={() => navigate(getLangUrl("/result"))}
                    className="block w-full text-left">
                    내 신청 조회
                  </button>
                  <button
                    onClick={() => navigate(getLangUrl("/mypage"))}
                    className="block w-full text-left">
                    마이페이지
                  </button>
                  <button onClick={handleLogoutClick} className="block w-full text-left">
                    로그아웃
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
