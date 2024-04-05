import { getLangUrl } from "locales/utils";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./navbar.css";

interface IRightNavItemsProps {
  isLoggedIn: boolean;
  handleLogoutClick: () => void;
  isMenuOpen: boolean;
}

const NavDropDownItems = ({ isLoggedIn, handleLogoutClick, isMenuOpen }: IRightNavItemsProps) => {
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`text-left absolute top-16 left-0 px-5 bg-white w-full text-base font-medium pb-10 flex flex-col gap-6 z-30 Navbar-linkHoverEffect ${
          isMenuOpen ? "block" : "hidden"
        }`}
        style={{ overflowY: "auto", maxHeight: "calc(100vh - 78px)" }}>
        <div className="mt-[21px] flex flex-col justify-center gap-6">
          <Link to={getLangUrl("/home")} className=" text-blue-600 font-bold text-xl">
            {t("startChecking")}
          </Link>
          <Link to={getLangUrl("/intro")}>{t("nav.intro")}</Link>
          <Link to={getLangUrl("/howtouse")}>{t("nav.howToUse")}</Link>
          <Link to={getLangUrl("/support")}>{t("nav.support")}</Link>
        </div>
        <div className="bg-[#D9D9D9] h-px" />
        <div className="flex flex-col justify-center gap-6">
          {!isLoggedIn ? (
            <Link to={getLangUrl("/login")}>{t("nav.login")}</Link>
          ) : (
            <>
              <Link to={getLangUrl("/community")}>{t("nav.request")}</Link>
              <Link to={getLangUrl("/result")}>{t("nav.result")}</Link>
              <Link to={getLangUrl("/dashboard")}>{t("nav.dashboard")}</Link>
              <div className="bg-[#D9D9D9] h-px" />
              <button
                onClick={handleLogoutClick}
                className="text-left hover:ring-2 hover:ring-opacity-50 hover:ring-blue-500
                py-1 px-2 md:px-3 md:py-2 rounded-lg focus:outline-none"
                style={{ transition: "box-shadow 0.1s ease-in-out" }}>
                {t("nav.logout")}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default NavDropDownItems;
