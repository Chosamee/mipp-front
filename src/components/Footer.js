import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white mt-auto">
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="mb-4 md:mb-0 align">
          <p className="text-lg text-left">이메일: aimipp@gmail.com</p>
        </div>
        <div className=" text-center md:text-left">
          <p className="text-2xl">더블H컴퍼니</p>
          <p className="text-sm">주소, 서울특별시 영등포구 도림로 17길</p>
        </div>
        <div className="mb-4 md:mb-0">
          <p className="text-lg text-right">SNS.</p>
        </div>
      </div>
      <div className="bg-white h-px w-full"></div>

      <div className="container mx-auto pb-4 px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-3 text-center text-xs mt-4">
          <p>©2023 BY POLY.</p>
          <p>PROUDLY CREATED WITH DoubleHCompany.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
