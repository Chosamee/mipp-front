import { useAuth } from "hooks/useAuth";
import { getLangUrl } from "locales/utils";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useUserInfo } from "stateStore/useUserInfo";

const ProfileMenu = () => {
  const { t } = useTranslation();
  const { updateUserInfo, userInfo } = useAuth();
  const { logout } = useAuth();
  const handleLogoutClick = async () => {
    if (!window.confirm(t("dashboard.로그아웃 하시겠습니까?"))) {
      return;
    }
    try {
      logout();
    } catch (error) {
      console.error("logout error: ", error);
    }
  };

  return (
    <div className="flex flex-col gap-5 md:w-48 w-full md:items-start items-center">
      {userInfo && (
        <div className="flex flex-col md:items-start items-center">
          <img
            src={userInfo.profileImage}
            alt="profile_image"
            width={54}
            className="rounded-full"
          />
          <div className="font-semibold text-xl mt-4">{userInfo.nickname}</div>
          <div className="text-sm mt-2 break-keep">{userInfo.email}</div>
          {/* <div>{userInfo.membership}</div> */}
        </div>
      )}
      <div className="flex flex-col gap-3 md:items-start items-center">
        <Link to={getLangUrl("/profile/edit")} className="text-[#8D8D8D] text-sm">
          {t("dashboard.회원정보 수정하기")}
        </Link>
        <button onClick={handleLogoutClick} className="text-[#8D8D8D] text-sm">
          {t("dashboard.로그아웃")}
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;
