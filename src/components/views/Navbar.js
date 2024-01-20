import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "components/auth/AuthContext";
import { handleLogout } from "api/authService";
import LanguageSwitcher from "components/views/LanguageSwitcher";
import { getLangUrl } from "locales/utils";
import { useTranslation } from "react-i18next";
import i18n from "i18n";

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

  // 언어 변경
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);

    // 현재 경로를 가져온 후, 언어 코드 부분만 변경
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split("/");
    pathParts[1] = language; // URL의 언어 부분을 변경 (예: /en/about -> /ko/about)
    const newPath = pathParts.join("/");

    navigate(newPath); // 변경된 URL로 이동
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
      className={`backdrop-blur-xl text-black  h-fit fixed top-0 left-0 right-0 z-30 ${
        !location.pathname.split("/")[2] ? "bg-white" : "bg-white"
      }
        tracking-[0.0096em] leading-6
      `}>
      <div className="flex items-center justify-between py-5">
        {/* GNB 메인*/}
        <div className="flex font-bold gap-[60px] py-3 pl-6">
          <button
            onClick={() => navigate(getLangUrl("/"))}
            className="self-center text-4xl font-bold">
            MIPP
          </button>
          <div className="flex gap-10 py-3 pr-6">
            <div className="flex gap-[26px] px-2">
              <button
                className="flex p-1 gap-[6px] items-center"
                onClick={() => navigate(getLangUrl("/intro"))}>
                {t("nav.intro")}
              </button>
              <button
                className="flex p-1 gap-[6px] items-center"
                onClick={() => navigate(getLangUrl("/howtouse"))}>
                {t("nav.howToUse")}
              </button>
              <button
                className="flex p-1 gap-[6px] items-center"
                onClick={() => navigate(getLangUrl("/board"))}>
                {t("nav.request")}
              </button>
              <div className="flex gap-[14px] p-1">
                <button
                  className="flex p-1 gap-[6px] items-center"
                  onClick={() => changeLanguage("kr")}>
                  KR
                </button>
                <div className="w-[1px] h-5 bg-[#D9D9D9] self-center"></div>
                <button
                  className="flex p-1 gap-[6px] items-center"
                  onClick={() => LanguageSwitcher("en")}>
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 우측 subMenu */}
        <div className="font-bold justify-end py-3 pr-6 gap-[30px]">
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
            <div className="flex px-2 gap-[30px]">
              <button
                className="flex p-4 gap-[6px] text-lg leading-6"
                onClick={() => navigate(getLangUrl("/login"))}>
                {t("nav.login")}
              </button>
              <button
                className="flex items-center py-[14px] px-[30px] border-2 gap-[6px]
                    rounded-[100px] font-semibold text-lg bg-[#3553F3] text-white"
                onClick={() => navigate(getLangUrl("/home"))}>
                {t("startChecking")}
              </button>
            </div>
          )}
        </div>
        {/* 드롭다운 메뉴 */}

        {/* <div className="relative md:hidden  flex justify-end">
              <button
                onClick={toggleMenu}
                className="text-white px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring transition">
                Menu
              </button>

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
            </div> */}
      </div>
    </nav>
  );
};

export default NavBar;
