import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center flex-grow">
      <div className="h-20"></div>
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
    </div>
  );
};

export default LoadingSpinner;
