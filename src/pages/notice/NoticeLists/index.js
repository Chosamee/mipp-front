import Pagination from "components/views/Pagination";
import NoticeEach from "./components/NoticeEach";
import LoadingSpinner from "components/views/LoadingSpinner";
import { useEffect, useRef, useState } from "react";
import { fetchAllNotices } from "../api";
import { useLocation, useNavigate } from "react-router-dom";

const NoticeLists = async () => {
  const [notices, setNotices] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllNotices();
        setNotices(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  // 검색 기능
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchType, setSearchType] = useState("title");
  const itemsPerPage = 10;

  const queryParams = new URLSearchParams(location.search);
  const [currentPage, setCurrentPage] = useState(parseInt(queryParams.get("page") || "1", 10));
  const [inst, setInst] = useState(queryParams.get("inst") || "all");

  const prevInstRef = useRef(inst);
  // URL 파라미터로부터 inst와 currentPage 값을 초기화
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const urlInst = queryParams.get("inst") || "all";
    const urlPage = parseInt(queryParams.get("page"), 10) || 1;

    // URL에서 읽은 값이 현재 상태와 다를 경우에만 상태를 업데이트합니다.
    if (urlInst !== inst || urlPage !== currentPage) {
      setInst(urlInst);
      setCurrentPage(urlPage);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]); // location.search가 변경될 때마다 실행됩니다.

  // inst 값이 변경될 때만 실행되는 useEffect
  useEffect(() => {
    if (inst !== prevInstRef.current) {
      setCurrentPage(1); // inst가 변경되면 page를 1로 설정
      const params = new URLSearchParams();
      if (inst !== "all") params.append("inst", inst);
      // inst가 변경되었을 때는 page 파라미터를 URL에 포함시키지 않습니다.
      navigate({ pathname: location.pathname, search: params.toString() }, { replace: true });
      prevInstRef.current = inst;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inst]); // 의존성 배열에 inst만 포함시켜 inst 값이 변경될 때만 이 useEffect가 실행되도록 합니다.

  // currentPage 값이 변경될 때만 실행되는 useEffect
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (currentPage !== 1) params.set("page", currentPage);
    else params.delete("page"); // 1페이지인 경우 page 파라미터를 URL에서 제거합니다.
    navigate({ pathname: location.pathname, search: params.toString() }, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]); // 의존성 배열에 currentPage만 포함시켜 currentPage 값이 변경될 때만 이 useEffect가 실행되도록 합니다.

  const filteredData = searchKeyword
    ? inst !== "all"
      ? notices.filter(
          (item) =>
            item[searchType] &&
            item[searchType].toLowerCase().includes(searchKeyword.toLowerCase()) &&
            item["inst"] === inst
        )
      : notices.filter(
          (item) =>
            item[searchType] && item[searchType].toLowerCase().includes(searchKeyword.toLowerCase())
        )
    : inst !== "all"
    ? notices.filter((item) => item[searchType] && item["inst"] === inst)
    : notices;

  return (
    <>
      {filteredData ? (
        <Pagination
          data={filteredData}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          renderItem={(item) => {
            return <NoticeEach item={item} />;
          }}
        />
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default NoticeLists;
