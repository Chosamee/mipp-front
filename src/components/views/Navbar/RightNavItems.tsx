import { getLangUrl } from "locales/utils";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./navbar.css";

interface IRightNavItemsProps {
  isLoggedIn: boolean;
  handleLogoutClick: () => void;
}

const RightNavItems = ({ isLoggedIn, handleLogoutClick }: IRightNavItemsProps) => {
  const { t } = useTranslation();
  return (
    <div className="font-bold flex items-center text-lg gap-5">
      {isLoggedIn ? (
        <div className="flex gap-2 items-center justify-end text-nowrap Navbar-linkHoverEffect">
          <Link className="" to={getLangUrl("/dashboard")}>
            {t("nav.dashboard")}
          </Link>
          <Link className="" to={getLangUrl("/result")}>
            {t("nav.result")}
          </Link>
          {isLoggedIn && (
            <button
              onClick={handleLogoutClick}
              className="text-left hover:ring-2 hover:ring-opacity-50 hover:ring-blue-500
              py-1 px-2 md:px-3 md:py-2 rounded-lg focus:outline-none"
              style={{ transition: "box-shadow 0.1s ease-in-out" }}>
              {t("nav.logout")}
            </button>
          )}
        </div>
      ) : (
        <div className="md:flex px-2 gap-[30px] hidden text-nowrap">
          <Link className="flex p-4 gap-[6px] text-[18px] leading-6" to={getLangUrl("/login")}>
            {t("nav.login")}
          </Link>
        </div>
      )}
      <Link
        className="py-3 px-7 flex-shrink-0 rounded-full font-semibold text-lg bg-[#3553F3] text-white"
        to={getLangUrl("/home")}>
        {t("startChecking")}
      </Link>
    </div>
  );
};

export default RightNavItems;
