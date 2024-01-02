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
      navigate(getLangUrl("/"));
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
    console.log(location.pathname.split("/"));
    setIsMenuOpen(false);
  }, [location]);

  //bg-gradient-to-r from-purple-500/50 to-blue-600/50 backdrop-blur
  return (
    <nav
      className={`backdrop-blur-xl text-white  xl:h-20 md:h-36 h-20 fixed top-0 left-0 right-0 z-30 ${
        !location.pathname.split("/")[2] ? "bg-black bg-opacity-75" : "bg-blue-500"
      }`}>
      <div className="max-w-7xl mx-auto flex-col">
        <div className=" mx-auto px-4">
          <div className="flex items-center h-20 justify-between">
            {/* Logo and title */}
            <button
              onClick={() => navigate(getLangUrl("/"))}
              className="flex items-center px-2 mr-4">
              <img src={logo} alt="MIPP Logo" className="md:h-7 h-5" />
              <span className="self-center md:text-3xl text-2xl font-bold whitespace-nowrap pl-4">
                MIPP
              </span>
            </button>

            <div className="justify-center font-bold ml-2">
              <LanguageSwitcher />
            </div>

            <div className="hidden xl:flex justify-between w-full ml-2 font-bold">
              <div className="flex items-center space-x-4">
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
                <button className="flex items-center px-4 border-2 rounded-lg">
                  <span className="p-2" onClick={() => navigate(getLangUrl("/home"))}>
                    {t("startChecking")}
                  </span>
                </button>
              </div>
            </div>
            <div className="hidden md:flex w-full font-bold justify-end">
              {authState.isLoggedIn ? (
                <div className="hidden sm:flex items-center space-x-4 justify-end">
                  <button className="flex items-center px-4">
                    <span className="" onClick={() => navigate(getLangUrl("/asks"))}>
                      {t("nav.ask")}
                    </span>
                  </button>
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

            <div className="relative md:hidden  flex justify-end">
              <button
                onClick={toggleMenu}
                className="text-white px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring transition">
                Menu
              </button>

              {/* 드롭다운 메뉴 */}
              <div
                className={`absolute right-0 top-20 mt-2 p-5 bg-white text-black rounded shadow-lg w-48 ${
                  isMenuOpen ? "block" : "hidden"
                }`}>
                {!authState.isLoggedIn ? (
                  <div className="p-4 flex flex-col ">
                    <button
                      onClick={() => navigate(getLangUrl("/home"))}
                      className="block w-full text-left font-bold">
                      {t("startChecking")}
                    </button>
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
                ) : (
                  <div className="p-4 z-40">
                    <button
                      onClick={() => navigate(getLangUrl("/home"))}
                      className="block w-full text-left font-bold">
                      {t("startChecking")}
                    </button>
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
                    <button onClick={handleLogoutClick} className="block w-full text-left">
                      {t("nav.logout")}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex xl:hidden justify-between w-full ml-2 font-bold">
          <div className="flex items-center space-x-4">
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
            <button className="flex items-center px-4 border-2 rounded-lg">
              <span className="p-2" onClick={() => navigate(getLangUrl("/home"))}>
                {t("startChecking")}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
