import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import logo from "../logo.svg";
import { handleLogout } from "api/authService";

const NavBar = () => {
  const { authState, updateAuthState } = useAuth();

  // navigate 기능
  const navigate = useNavigate();
  const handleNavLinkClick = (path) => {
    navigate(path);
    setIsMenuOpen(false); // 메뉴 닫기
  };

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

  // return (
  //   <nav
  //     className="bg-blue-600 text-white h-20
  //     fixed top-0 left-0 right-0 z-30">
  //     <div className="flex justify-between items-center mx-auto">
  //       <div className="w-[1000px] flex justify-between items-center h-20 mx-auto">
  //         <button onClick={() => handleNavLinkClick("/")} className="flex items-center">
  //           <img src={logo} alt="MIPP Logo" className="h-7" />
  //           <span className="self-center ml-6 text-3xl font-bold">MIPP</span>
  //         </button>
  //         <div className="flex items-center">
  //           <label htmlFor="language-select" className="mr-2">
  //             언어선택
  //           </label>
  //           <select
  //             id="language-select"
  //             className="bg-blue-700 text-white py-1 px-2 rounded focus:outline-none">
  //             <option value="ko">KO</option>
  //             <option value="ko">EN</option>
  //           </select>
  //         </div>
  //         <div className="flex items-center">
  //           <button className="flex items-center">
  //             <span className="ml-2" onClick={() => handleNavLinkClick("/home")}>
  //               신청하기
  //             </span>
  //           </button>
  //         </div>
  //         <button className="flex items-center">
  //           <span className="ml-2 mr-4" onClick={() => handleNavLinkClick("/board")}>
  //             공개 건의 게시판
  //           </span>
  //         </button>

  //         {/* 햄버거 버튼 */}
  //         <button onClick={toggleMenu} className=" flex flex-col justify-center gap-1">
  //           <span className="block w-8 h-0.5 bg-white"></span>
  //           <span className="block w-8 h-0.5 bg-white"></span>
  //           <span className="block w-8 h-0.5 bg-white"></span>
  //         </button>

  //         {/* 드롭다운 메뉴 */}
  //         <div
  //           className={`absolute right-0 top-20 mt-2 p-5 bg-white text-black rounded shadow-lg ${
  //             isMenuOpen ? "block" : "hidden"
  //           }`}>
  //           {!authState.isLoggedIn ? (
  //             <button
  //               onClick={() => handleNavLinkClick("/login")}
  //               className="block w-full text-left">
  //               로그인
  //             </button>
  //           ) : (
  //             <>
  //               <button
  //                 onClick={() => handleNavLinkClick("/asks")}
  //                 className="block w-full text-left">
  //                 문의글
  //               </button>
  //               <button
  //                 onClick={() => handleNavLinkClick("/result")}
  //                 className="block w-full text-left">
  //                 내 신청 조회
  //               </button>
  //               <button onClick={handleLogoutClick} className="block w-full text-left">
  //                 로그아웃
  //               </button>
  //             </>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   </nav>
  // );
  return (
    <nav className="bg-blue-600 text-white h-20 fixed top-0 left-0 right-0 z-30">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and title */}
          <button onClick={() => handleNavLinkClick("/")} className="flex items-center">
            <img src={logo} alt="MIPP Logo" className="h-7" />
            <span className="self-center text-xl sm:text-3xl font-bold whitespace-nowrap">
              MIPP
            </span>
          </button>

          {/* Navigation Links and Language Select */}
          <div className="hidden sm:flex items-center space-x-4">
            {/* Language Select */}
            <div className="flex items-center">
              <label htmlFor="language-select" className="mr-2">
                언어선택
              </label>
              <select
                id="language-select"
                className="bg-blue-700 text-white py-1 px-2 rounded focus:outline-none">
                <option value="ko">KO</option>
                <option value="en">EN</option>
              </select>
            </div>

            {/* Other Links */}
            <button className="flex items-center">
              <span className="ml-2" onClick={() => handleNavLinkClick("/home")}>
                신청하기
              </span>
            </button>
            <button className="flex items-center">
              <span className="ml-2 mr-4" onClick={() => handleNavLinkClick("/board")}>
                공개 건의 게시판
              </span>
            </button>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="sm:hidden flex items-center px-3 py-2 border rounded">
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20">
              {/* SVG path for hamburger icon */}
            </svg>
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute right-0 top-20 mt-2 p-5 bg-white text-black rounded shadow-lg ${
              isMenuOpen ? "block" : "hidden"
            } sm:hidden`}>
            {/* ... */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
