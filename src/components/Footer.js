import React from "react";
import youtube from "../img/youtube_social.svg";

const Footer = () => {
  return (
    <footer className="mt-auto ">
      <div id="wrapper" className="bg-blue-600 ">
        <div className="text-white container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="">
            <span className="text-lg">이메일: aimipp@gmail.com</span>
          </div>
          <div className="grid text-center">
            <span className="text-2xl">더블H컴퍼니</span>
            <span className="text-sm">주소, 서울특별시 영등포구 도림로 17길</span>
          </div>
          <div className="flex items-start justify-end">
            <span className="text-lg text-right">SNS.</span>
            <img src={youtube} alt="Youtube Social" width={30} height={30} className="ml-4" />
          </div>
        </div>
      </div>
      <div className="container mx-auto pb-2 px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-3 text-center text-xs mt-2">
          <span>©2023 BY POLY.</span>
          <br />
          <span>PROUDLY CREATED WITH DoubleHCompany.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
