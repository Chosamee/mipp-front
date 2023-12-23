import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeTokenFromLocalStorage } from "../util/HandleToken";
import { useAuth } from "../util/AuthContext";
import logo from "../logo.svg";

const NavBar = () => {
  const { authState, updateAuthState } = useAuth();

  // navigate 기능
  const navigate = useNavigate();
  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  // 상단바 fadeout
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(currentScrollPos <= 200); // 80px 이상 스크롤되면 숨김
  };

  const handleLogout = () => {
    removeTokenFromLocalStorage();
    updateAuthState({ ...authState, isLoggedIn: false, isVerified: false });
    navigate("/");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-blue-600 text-white px-4 py-2 flex justify-between items-center h-20 
      fixed w-full top-0 left-0 z-30
      transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>
      <button onClick={() => handleNavLinkClick("/")} className="flex items-center">
        <img src={logo} alt="MIPP Logo" className="h-7" />
        <span className="self-center ml-6 text-3xl font-bold">MIPP</span>
      </button>
      <div className="flex items-center">
        <label htmlFor="language-select" className="mr-2">
          언어선택
        </label>
        <select
          id="language-select"
          className="bg-blue-700 text-white py-1 px-2 rounded focus:outline-none">
          <option value="ko">KO</option>
          <option value="ko">EN</option>
        </select>
      </div>
      <div className="flex items-center">
        <button className="flex items-center">
          <span className="ml-2" onClick={() => handleNavLinkClick("/home")}>
            신청하기
          </span>
        </button>
      </div>
      <div className="flex items-center">
        {!authState.isVerified ? (
          <>
            <button className="flex items-center">
              <span className="ml-2" onClick={() => handleNavLinkClick("/login")}>
                로그인
              </span>
            </button>
          </>
        ) : (
          <>
            {!authState.isAdmin ? (
              <>
                <button className="flex items-center">
                  <span className="ml-2 mr-4" onClick={() => handleNavLinkClick("/board")}>
                    문의글
                  </span>
                </button>
                <button className="flex items-center">
                  <span className="ml-2 mr-4" onClick={() => handleNavLinkClick("/result")}>
                    내 신청 조회
                  </span>
                </button>
              </>
            ) : (
              <button className="flex items-center">
                <span className="ml-2 mr-4" onClick={() => handleNavLinkClick("/admin")}></span>
                관리자 페이지
              </button>
            )}
            <button className="flex items-center">
              <span className="ml-2" onClick={() => handleLogout()}>
                로그아웃
              </span>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
