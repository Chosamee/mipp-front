import { handleLogout } from "api/authService";
import { useAuth } from "components/auth/AuthContext";
import { getLangUrl } from "locales/utils";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserInfo } from "stateStore/useUserInfo";

const ProfileMenu = () => {
  const userInfo = useUserInfo((state) => state.userInfo);
  const { updateAuthState, authState } = useAuth();
  const navigate = useNavigate();
  const handleLogoutClick = async () => {
    if (!window.confirm("로그아웃 하시겠습니까?")) {
      return;
    }
    try {
      await handleLogout();
      updateAuthState({ ...authState, isLoggedIn: false });
      navigate(getLangUrl("/"));
    } catch (error) {
      console.error("logout error: ", error);
    }
  };

  return (
    <div className="flex flex-col gap-5 w-64 items-start">
      {userInfo && (
        <div className="flex flex-col">
          <img
            src={userInfo.profile_link}
            alt="profile_image"
            width={54}
            className="rounded-full"
          />
          <div className="font-semibold text-xl mt-4">{userInfo.nickname}</div>
          <div className="text-sm mt-2">{userInfo.email}</div>
          {/* <div>{userInfo.membership}</div> */}
        </div>
      )}
      <div className="flex flex-col gap-3 items-start">
        <Link to="/mypage" className="text-[#8D8D8D] text-sm">
          회원정보 수정하기
        </Link>
        <button onClick={handleLogoutClick} className="text-[#8D8D8D] text-sm">
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;
