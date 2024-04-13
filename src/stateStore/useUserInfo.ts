import { create } from "zustand";

interface UserInfo {
  nickname?: string;
  email?: string;
  membership?: string;
  profileImage?: string;
}

interface UserInfoState {
  userInfo?: UserInfo;
  setUserInfo: (userInfo: UserInfo) => void;
}

const useUserInfo = create<UserInfoState>((set) => ({
  userInfo: undefined,
  setUserInfo: (newUserInfo: Partial<UserInfo>) =>
    set((state) => ({
      userInfo: {
        ...state.userInfo,
        ...newUserInfo,
      },
    })),
}));
