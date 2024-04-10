import React from "react";
import GuestAsk from "./GuestAsk";
import MemberAsk from "./MemberAsk";
import { useAuth } from "hooks/useAuth";

const Ask = () => {
  const { isLoggedIn } = useAuth();
  return <>{isLoggedIn ? <MemberAsk /> : <GuestAsk />}</>;
};

export default Ask;
