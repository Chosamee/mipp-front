// hooks/useAuth.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { verifyToken, handleLogout, handleOauthLogin } from "../api/authService";
import { useNavigate } from "react-router-dom";
import { getLangUrl } from "locales/utils";
import { updateProfile } from "pages/Dashboard/api";

export const useAuth = () => {
  const queryClient = useQueryClient();

  // 사용자 인증 상태 확인
  const { data: authData, isLoading } = useQuery({
    queryKey: ["authStatus"],
    queryFn: verifyToken,
    staleTime: Infinity,
    select: (data) => data ?? { isValid: false }, // 데이터가 없으면 isValid를 false로 설정
  });

  const navigate = useNavigate();

  // 로그인
  const loginMutation = useMutation({
    mutationFn: handleOauthLogin,
    onSuccess: (data) => {
      // 로그인 성공 후 처리, 예: `isValid`를 `true`로 설정
      queryClient.setQueryData(["authStatus"], { isValid: true, ...data });
      navigate(getLangUrl("/home"));
    },
    onError: (error) => {
      // 로그인 실패 처리
      console.error("Login failed:", error);
    },
  });

  // 로그아웃 처리
  const logout = async () => {
    try {
      await handleLogout();
      queryClient.setQueryData(["authStatus"], { isValid: false });
      navigate(getLangUrl("/"));
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const updateUserInfo = (newUserInfo: any) => {
    const currentData = queryClient.getQueryData(["authStatus"]);
    if (currentData) {
      queryClient.setQueryData(["authStatus"], { ...currentData, ...newUserInfo });
    }
  };

  const profileUpdateMutation = useMutation({
    mutationFn: updateProfile,
    onMutate: async (newData) => {
      await queryClient.cancelQueries({ queryKey: ["authStatus"] });

      const previousUserInfo = queryClient.getQueryData(["authStatus"]);
      const safePreviousUserInfo = previousUserInfo || {};

      // 낙관적 업데이트를 수행합니다.
      updateUserInfo({
        ...safePreviousUserInfo,
        ...newData,
      });

      return { previousUserInfo };
    },
    onError: (err, newData, context) => {
      // 롤백
      if (context?.previousUserInfo) {
        updateUserInfo(context.previousUserInfo);
      }
    },
    onSettled: () => {
      // 성공 또는 에러 후에 실행
      queryClient.invalidateQueries({ queryKey: ["authStatus"] });
      queryClient.invalidateQueries({ queryKey: ["dashboardData"] });
    },
  });

  return {
    isLoggedIn: !!authData?.isValid,
    userInfo: authData?.isValid ? authData : null, // 로그인 상태면 사용자 정보 반환, 아니면 null
    isLoading,
    login: (code: string, state: string) => loginMutation.mutate({ code, state }),
    logout,
    updateUserInfo,
    profileUpdateMutation,
  };
};
