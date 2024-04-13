import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaginationAllData = ({ data, itemsPerPage, renderItem, currentPage, setCurrentPage }) => {
  const maxPage = Math.ceil(data.length / itemsPerPage);

  const currentPageData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const getPaginatedPages = () => {
    const start = Math.max(1, currentPage >= maxPage - 2 ? maxPage - 4 : currentPage - 2);
    const end = Math.min(currentPage <= 3 ? 5 : currentPage + 2, maxPage);
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  const navigate = useNavigate();
  const location = useLocation();
  // currentPage 값이 변경될 때만 실행되는 useEffect
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (currentPage !== 1) params.set("page", currentPage);
    else params.delete("page"); // 1페이지인 경우 page 파라미터를 URL에서 제거합니다.
    navigate({ pathname: location.pathname, search: params.toString() }, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]); // 의존성 배열에 currentPage만 포함시켜 currentPage 값이 변경될 때만 이 useEffect가 실행되도록 합니다.

  return (
    <>
      {currentPageData.map(renderItem)}
      <div className="mx-auto flex justify-center items-center mt-9 gap-3">
        <PaginationButton onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
          <DoubleLeftVector />
        </PaginationButton>
        <PaginationButton
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}>
          <LeftVector />
        </PaginationButton>
        {getPaginatedPages().map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-[28px] h-[26px] ${
              currentPage === page ? "rounded-[4px] bg-[#E2E8F0]" : ""
            }`}>
            {page}
          </button>
        ))}
        <PaginationButton
          onClick={() => setCurrentPage(Math.min(maxPage, currentPage + 1))}
          disabled={currentPage === maxPage}>
          <RightVector />
        </PaginationButton>
        <PaginationButton
          onClick={() => setCurrentPage(maxPage)}
          disabled={currentPage === maxPage}>
          <DoubleRightVector />
        </PaginationButton>
      </div>
    </>
  );
};

const PaginationButton = ({ children, onClick, disabled }) => (
  <button
    className="flex w-[26px] h-[26px] items-center justify-center"
    onClick={onClick}
    disabled={disabled}>
    {children}
  </button>
);

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

const DoubleLeftVector = () => (
  <>
    <LeftVector />
    <LeftVector />
  </>
);

const DoubleRightVector = () => (
  <>
    <RightVector />
    <RightVector />
  </>
);
export default PaginationAllData;
