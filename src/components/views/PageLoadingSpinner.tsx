import React from "react";

const PageLoadingSpinner = () => {
  return (
    <div className="flex min-h-screen flex-grow justify-center items-center ">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500" />
    </div>
  );
};

export default PageLoadingSpinner;
