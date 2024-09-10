import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getLangUrl } from "locales/utils";

import hamberger from "assets/햄버거바.svg";
import LeftNavItems from "./LeftNavItems";
import RightNavItems from "./RightNavItems";
import NavLanguageChanger from "./NavLanguageChanger";
import NavDropDownItems from "./NavDropDownItems";
import "./navbar.css";
import { useAuth } from "hooks/useAuth";

const NavBar = () => {
  const { logout, isLoggedIn } = useAuth();
  // navigate 기능
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogoutClick = async () => {
    try {
      logout();
      navigate(getLangUrl("/"));
      setIsMenuOpen(false); // 메뉴 닫기
    } catch (error) {
      console.error("logout error: ", error);
    }
  };

  // 언어 변경
  const changeLanguage = (language: string) => {
    // 현재 경로를 가져온 후, 언어 코드 부분만 변경
    const pathParts = location.pathname.split("/");
    pathParts[1] = language; // URL의 언어 부분을 변경
    return pathParts.join("/");
  };

  // 햄버거 메뉴 상태 관리
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWindowSizeChange = () => {
    if (window.innerWidth >= 1280) {
      // 데스크톱 사이즈 기준 너비
      setIsMenuOpen(false); // 메뉴 닫기
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  // location 바뀔 시 메뉴 닫기
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  //bg-gradient-to-r from-purple-500/50 to-blue-600/50 backdrop-blur
  return (
    <nav className="text-black fixed top-0 left-0 right-0 z-30 bg-white flex items-center h-20 px-6">
      <div className="flex items-center justify-between w-full linkHoverEffect">
        <div className="flex  font-bold md:gap-6 gap-6 items-center h-full">
          <Link
            to={getLangUrl("/")}
            className="md:self-start text-[36px] font-bold"
            onMouseOver={() => import("pages/Index")}>
            MIPPIA
          </Link>
          <div className="hidden xl:flex gap-6 self-start my-auto Navbar-linkHoverEffect">
            <LeftNavItems />
            <NavLanguageChanger changeLanguage={changeLanguage} />
          </div>
        </div>
        <div className="hidden xl:flex">
          <RightNavItems isLoggedIn={isLoggedIn} handleLogoutClick={handleLogoutClick} />
        </div>
        <NavDropDownItems
          isLoggedIn={isLoggedIn}
          handleLogoutClick={handleLogoutClick}
          isMenuOpen={isMenuOpen}
        />
        <div className="relative xl:hidden flex items-center Navbar-linkHoverEffect">
          <div className="mr-10">
            <NavLanguageChanger changeLanguage={changeLanguage} />
          </div>
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            className="justify-end p-2 rounded-md font-medium focus:outline-none hover:ring hover:ring-opacity-50 transition flex-shrink-0">
            <img src={hamberger} alt="Hamberger Bar" />
          </button>
        </div>
      </div>
      {/* 검정색 배경을 가진 요소 */}
      {isMenuOpen && (
        <div className="fixed top-20 left-0 right-0 bottom-0 bg-black opacity-50 z-20" />
      )}
    </nav>
  );
};

export default NavBar;
