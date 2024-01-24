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
      {data ? (
        <div>
          {t("pagination.tot")} {Object.keys(data).length} {t("pagination.num")}
        </div>
      ) : (
        <div></div>
      )}
      {/* 데이터 렌더링 부분 */}
      {currentPageData.map((item, index) => renderItem(item, index))}
      {/* 페이지네이션 부분 */}
      <div className="mx-auto flex justify-center items-center bg-slate-300">
        <button
          className="mx-3 px-2"
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}>
          {t("pagination.first")}
        </button>
        <button
          className="mx-3 px-2"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}>
          {t("pagination.prev")}
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
          {t("pagination.next")}
        </button>
        <button
          onClick={() => setCurrentPage(maxPage)}
          disabled={currentPage === maxPage}
          className="mx-3 px-2">
          {t("pagination.last")}
        </button>
      </div>
    </React.Fragment>
  );
};

export default Pagination;
