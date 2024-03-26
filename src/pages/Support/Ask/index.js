import { useAuth } from "components/auth/AuthContext";
import React from "react";
import { useTranslation } from "react-i18next";
import GuestAsk from "./GuestAsk";
import MemberAsk from "./MemberAsk";

const Ask = () => {
  const { authState } = useAuth();
  return <>{authState.isLoggedIn ? <MemberAsk /> : <GuestAsk />}</>;
};

export default Ask;
