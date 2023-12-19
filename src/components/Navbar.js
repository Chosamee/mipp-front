// NavbarComponent.js

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loadTokenFromLocalStorage } from "../util/HandleToken";
import AuthProvider from "../util/AuthProvider";

const NavBar = () => {
  const token = loadTokenFromLocalStorage();

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AuthProvider>
      <nav
        className={`bg-blue-600 text-white px-4 py-2 flex justify-between items-center h-20
      fixed w-full top-0 left-0
      transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}>
        <div onClick={() => handleNavLinkClick("/")}>
          <img src="logo192.png" alt="Company Logo" className="h-10" />
        </div>
        <div className="flex items-center">
          <label htmlFor="language-select" className="mr-2">
            언어선택
          </label>
          <select
            id="language-select"
            className="bg-blue-700 text-white py-1 px-2 rounded focus:outline-none">
            <option value="ko">KO</option>
            <option value="ko">ENG</option>
          </select>
        </div>
        <div className="flex items-center">
          {token == null ? (
            <button className="flex items-center">
              {/* SVG 아이콘을 사용하거나 다른 아이콘 라이브러리를 사용하세요 */}
              <span
                className="ml-2"
                onClick={() => handleNavLinkClick("/login")}>
                로그인
              </span>
            </button>
          ) : (
            <button className="flex items-center">
              {/* SVG 아이콘을 사용하거나 다른 아이콘 라이브러리를 사용하세요 */}
              <span
                className="ml-2"
                onClick={() => handleNavLinkClick("/result")}>
                내 신청들
              </span>
            </button>
          )}
        </div>
      </nav>
    </AuthProvider>
  );
};

export default NavBar;
