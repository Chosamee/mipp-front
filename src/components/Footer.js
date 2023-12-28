import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto w-full top-0 left-0">
      <div id="wrapper" className="bg-blue-600 ">
        <div className="text-white container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-4 w-given">
          <div className="flex md:justify-start justify-center">
            <span className="text-lg">이메일: aimipp@gmail.com</span>
            {/* <img src={youtube} alt="Youtube Social" width={30} height={30} className="ml-4" /> */}
          </div>
          <div className="grid text-center">
            <span className="text-2xl">더블H컴퍼니</span>
            <span className="text-sm">주소, 서울특별시 영등포구 도림로 17길</span>
          </div>
          <div className="flex items-center justify-center">
            <label htmlFor="language-select" className="mr-2">
              언어선택
            </label>
            <select
              id="language-select"
              className="bg-blue-700 text-white py-1 px-2 rounded focus:outline-none">
              <option value="ko">KO</option>
              <option value="ko">EN</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container mx-auto pb-2 px-4 grid grid-cols-1 md:grid-cols-3 gap-4 w-given">
        <div className="col-span-1 md:col-span-3 text-center text-xs mt-2">
          <span>©2023 BY POLY. PROUDLY CREATED WITH DoubleHCompany.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
