import AskCreate from "./AskCreate";
import React from "react";
const GuestAsk = () => {
  return (
    <div className="flex flex-col mx-auto items-center">
      <h1 className="text-2xl px-3">Guest Support</h1>
      <AskCreate isGuest={true} />
    </div>
  );
};

export default GuestAsk;
