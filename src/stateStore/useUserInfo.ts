import { create } from "zustand";

interface UserInfo {
  nickname: string;
  email: string;
  membership: string;
  profile_link: string;
}

interface UserInfoState {
  userInfo?: UserInfo;
  setUserInfo: (userInfo: UserInfo) => void;
}

export const useUserInfo = create<UserInfoState>((set) => ({
  userInfo: undefined,
  setUserInfo: (userInfo: UserInfo) => set({ userInfo }),
}));
