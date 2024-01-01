import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
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
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  //bg-gradient-to-r from-purple-500/50 to-blue-600/50 backdrop-blur
  return (
    <nav className="backdrop-blur-xl text-white bg-black bg-opacity-75 h-20 fixed top-0 left-0 right-0 z-30 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 justify-between">
          {/* Logo and title */}
          <button onClick={() => navigate(getLangUrl("/"))} className="flex items-center px-2 mr-4">
            <img src={logo} alt="MIPP Logo" className="h-7" />
            <span className="self-center text-3xl font-bold whitespace-nowrap pl-4">MIPP</span>
          </button>
          <div className="hidden md:flex justify-between w-full">
            <div className="flex items-center space-x-4">
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
            </div>
            {authState.isLoggedIn ? (
              <div className="hidden sm:flex items-center space-x-4 justify-end">
                <button className="flex items-center px-4">
                  <span className="" onClick={() => navigate(getLangUrl("/mypage"))}>
                    {t("nav.myAccount")}
                  </span>
                </button>
                <button className="flex items-center px-4">
                  <span className="" onClick={() => navigate(getLangUrl("/result"))}>
                    {t("nav.result")}
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
            ) : (
              <button className="items-center px-4">
                <span className="" onClick={() => navigate(getLangUrl("/mypage"))}>
                  {t("nav.login")}
                </span>
              </button>
            )}
          </div>
          <div className="md:hidden justify-center">
            <button
              onClick={() => navigate(getLangUrl("/home"))}
              className="text-white px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring transition">
              {t("startChecking")}
            </button>
          </div>
          <div className="relative md:hidden  flex justify-end">
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
              className={`absolute right-0 top-20 mt-2 p-5 bg-white text-black rounded shadow-lg w-96 ${
                isMenuOpen ? "block" : "hidden"
              }`}>
              {!authState.isLoggedIn ? (
                <div className="flex flex-row justify-between">
                  <div className="p-4">
                    <button
                      onClick={() => navigate(getLangUrl("/intro"))}
                      className="block w-full text-left">
                      {t("nav.intro")}
                    </button>
                    <button
                      onClick={() => navigate(getLangUrl("/howtouse"))}
                      className="block w-full text-left">
                      {t("nav.howToUse")}
                    </button>
                  </div>
                  <div className="p-4">
                    <button
                      onClick={() => navigate(getLangUrl("/board"))}
                      className="block w-full text-left">
                      {t("nav.request")}
                    </button>
                    <button
                      onClick={() => navigate(getLangUrl("/login"))}
                      className="block w-full text-left">
                      {t("nav.login")}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-row justify-between">
                  <div className="p-4">
                    <button
                      onClick={() => navigate(getLangUrl("/intro"))}
                      className="block w-full text-left">
                      {t("nav.intro")}
                    </button>
                    <button
                      onClick={() => navigate(getLangUrl("/howtouse"))}
                      className="block w-full text-left">
                      {t("nav.howToUse")}
                    </button>
                    <button
                      onClick={() => navigate(getLangUrl("/result"))}
                      className="block w-full text-left">
                      {t("nav.result")}
                    </button>
                  </div>
                  <div className="p-4">
                    <button
                      onClick={() => navigate(getLangUrl("/board"))}
                      className="block w-full text-left">
                      {t("nav.request")}
                    </button>
                    <button
                      onClick={() => navigate(getLangUrl("/asks"))}
                      className="block w-full text-left">
                      {t("nav.ask")}
                    </button>
                    <button onClick={() => handleLogoutClick} className="block w-full text-left">
                      {t("nav.logout")}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
