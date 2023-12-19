import React, { useState } from "react";

const Pagination = ({ data, itemsPerPage, handleNavLinkClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);

  const currentPageData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getPaginatedPages = () => {
    const start = Math.max(1, currentPage >= maxPage - 2 ? maxPage - 4 : currentPage - 2);
    const end = Math.min(currentPage <= 3 ? 5 : currentPage + 2, maxPage);
    return new Array(end - start + 1).fill(null).map((_, index) => start + index);
  };

  return (
    <div>
      {/* 데이터 렌더링 부분 */}
      {currentPageData.map((item, index) => (
        <div key={index} className="bg-blue-200 p-4 flex items-center space-x-2 mb-2 rounded-2xl">
          <div className="flex-grow text-blue-800 items-center" style={{ flexBasis: "75%" }}>
            <span>{item.title}</span>
          </div>
          <div className="flex-grow items-center justify-center" style={{ flexBasis: "10%" }}>
            <span className="font-bold text-blue-800">{item.inst}</span>
          </div>
          <div className="flex-grow items-center justify-center" style={{ flexBasis: "15%" }}>
            <span className="font-bold text-blue-800">{item.status}</span>
          </div>
          <button
            onClick={() => handleNavLinkClick("/detail/" + item.id)}
            className="flex-grow bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded focus:outline-none shadow"
            style={{ flexBasis: "10%" }}
            disabled={item.status !== "완료"}>
            상세결과
          </button>
        </div>
      ))}

      {/* 페이지네이션 부분 */}
      <div className="container mx-auto flex justify-center items-center bg-slate-300">
        <button
          className="mx-3 px-2"
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}>
          처음
        </button>
        <button
          className="mx-3 px-2"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}>
          이전
        </button>
        {getPaginatedPages().map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`mx-3 px-2 w-10 ${currentPage === page ? "text-red-600" : ""}`}>
            {page}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === maxPage}
          className="mx-3 px-2">
          다음
        </button>
        <button
          onClick={() => setCurrentPage(maxPage)}
          disabled={currentPage === maxPage}
          className="mx-3 px-2">
          마지막
        </button>
      </div>
    </div>
  );
};

export default Pagination;
