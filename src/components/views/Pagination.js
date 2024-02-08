import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Pagination = ({ data, itemsPerPage, renderItem }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation();
  const maxPage = Math.ceil(data.length / itemsPerPage);

  const currentPageData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getPaginatedPages = () => {
    const start = Math.max(1, currentPage >= maxPage - 2 ? maxPage - 4 : currentPage - 2);
    const end = Math.min(currentPage <= 3 ? 5 : currentPage + 2, maxPage);
    return new Array(end - start + 1).fill(null).map((_, index) => start + index);
  };

  return (
    <React.Fragment>
      {/* {data ? (
        <div>
          {t("pagination.tot")} {Object.keys(data).length} {t("pagination.num")}
        </div>
      ) : (
        <div></div>
      )} */}
      {/* 데이터 렌더링 부분 */}
      {currentPageData.map((item, index) => renderItem(item, index))}
      {/* 페이지네이션 부분 */}
      <div className="mx-auto flex justify-center items-center mt-9 gap-3">
        <button
          className="flex w-[26px] h-[26px] items-center justify-center"
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}>
          <LeftVector />
          <LeftVector />
        </button>
        <button
          className="w-[26px] h-[26px] items-center justify-center"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}>
          <LeftVector />
        </button>
        <div className="flex items-center gap-[7px]">
          {getPaginatedPages().map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-[28px] h-[26px]  ${
                currentPage === page ? "rounded-[4px] bg-[#E2E8F0]" : ""
              }`}>
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === maxPage}
          className="flex w-[26px] h-[26px] items-center justify-center">
          <RightVector />
        </button>
        <button
          onClick={() => setCurrentPage(maxPage)}
          disabled={currentPage === maxPage}
          className="flex w-[26px] h-[26px] items-center justify-center">
          <RightVector />
          <RightVector />
        </button>
      </div>
    </React.Fragment>
  );
};

const LeftVector = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
      <path d="M7 1L1 7L7 13" stroke="#C7C8C9" />
    </svg>
  );
};

const RightVector = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
      <path d="M1 13L7 7L1 1" stroke="#C7C8C9" />
    </svg>
  );
};
export default Pagination;
