import Pagination from "components/views/Pagination";
import NoticeEach from "./NoticeEach";
import LoadingSpinner from "components/views/LoadingSpinner";
import { useEffect, useRef, useState } from "react";
import { fetchAllNotices } from "../api";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import loupe from "assets/loupe.svg";

const NoticeList = () => {
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
  const itemsPerPage = 10;

  const queryParams = new URLSearchParams(location.search);
  const [currentPage, setCurrentPage] = useState(parseInt(queryParams.get("page") || "1", 10));
  const [noticeType, setNoticeType] = useState(queryParams.get("type") || "all");

  const prevInstRef = useRef(noticeType);
  // URL 파라미터로부터 inst와 currentPage 값을 초기화
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const urlInst = queryParams.get("inst") || "all";
    const urlPage = parseInt(queryParams.get("page"), 10) || 1;

    // URL에서 읽은 값이 현재 상태와 다를 경우에만 상태를 업데이트합니다.
    if (urlInst !== noticeType || urlPage !== currentPage) {
      setNoticeType(urlInst);
      setCurrentPage(urlPage);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]); // location.search가 변경될 때마다 실행됩니다.

  // inst 값이 변경될 때만 실행되는 useEffect
  useEffect(() => {
    if (noticeType !== prevInstRef.current) {
      setCurrentPage(1); // inst가 변경되면 page를 1로 설정
      const params = new URLSearchParams();
      if (noticeType !== "all") params.append("inst", noticeType);
      // inst가 변경되었을 때는 page 파라미터를 URL에 포함시키지 않습니다.
      navigate({ pathname: location.pathname, search: params.toString() }, { replace: true });
      prevInstRef.current = noticeType;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noticeType]); // 의존성 배열에 inst만 포함시켜 inst 값이 변경될 때만 이 useEffect가 실행되도록 합니다.

  // // currentPage 값이 변경 될 때만 실행되는 useEffect
  // useEffect(() => {
  //   const params = new URLSearchParams(location.search);
  //   if (currentPage !== 1) params.set("page", currentPage);
  //   else params.delete("page"); // 1페이지인 경우 page 파라미터를 URL에서 제거합니다.
  //   navigate({ pathname: location.pathname, search: params.toString() }, { replace: true });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [currentPage]); // 의존성 배열에 currentPage만 포함시켜 currentPage 값이 변경될 때만 이 useEffect가 실행되도록 합니다.

  const filteredData = searchKeyword
    ? noticeType !== "all"
      ? notices.filter(
          (item) =>
            (item["en_title"] || item["ko_title"]) &&
            (item["en_title"].toLowerCase().includes(searchKeyword.toLowerCase()) ||
              item["ko_title"].toLowerCase().includes(searchKeyword.toLowerCase())) &&
            item["type"] === noticeType
        )
      : notices.filter(
          (item) =>
            (item["en_title"] || item["ko_title"]) &&
            (item["en_title"].toLowerCase().includes(searchKeyword.toLowerCase()) ||
              item["ko_title"].toLowerCase().includes(searchKeyword.toLowerCase()))
        )
    : noticeType !== "all"
    ? notices.filter(
        (item) => (item["en_title"] || item["ko_title"]) && item["type"] === noticeType
      )
    : notices;

  const { t, i18n } = useTranslation();

  return (
    <div className="mx-auto px-5 w-[375px] desktop:w-[960px] py-[150px] font-['Pretendard-Regular'] leading-[normal]">
      {/* Title 및 검색 하십시오.. */}
      <div className="gap-[26px] flex desktop:flex-row flex-col desktop:items-center mb-9 desktop:h-10">
        <h1 className="text-[24px] leading-[28px] font-semibold text-[#171923]">
          {i18n.language === "en" ? "Notice" : "공지사항"}
        </h1>
        <div className="w-[326px] desktop:w-[360px] gap-[14px] h-10 flex rounded-[6px] items-center border-[#E0E4E8] border-[1px]">
          <input
            className="overflow-ellipsis text-[14px] font-medium leading-[18px] tracking-[0.203px] w-[264px] focus:outline-none ml-4"
            type="text"
            placeholder={`${t("search.guide")}`}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <img src={loupe} alt="Loupe" />
        </div>
      </div>
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
    </div>
  );
};

export default NoticeList;
