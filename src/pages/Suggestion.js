import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/views/Pagination";
import LoadingSpinner from "../components/views/LoadingSpinner";
import { addPosts, fetchPosts, deletePosts } from "../api/suggestionService";
import { useTranslation } from "react-i18next";
import { getLangUrl } from "locales/utils";
import { useAuth } from "components/auth/AuthContext";

const Suggestion = () => {
  const [myData, setMyData] = useState({});
  const [originData, setOriginData] = useState([]);
  const itemsPerPage = 10;

  const navigate = useNavigate();
  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPosts();
        setMyData(data.my_posts);
        setOriginData(data.posts);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const convertToLocalTime = (data) => {
    return data.map((item) => {
      const dateOptions = { year: "numeric", month: "2-digit", day: "2-digit" };
      const timeOptions = { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false };

      const date = new Date(item.created_at);
      const formattedDate = date.toLocaleDateString("ko-KR", dateOptions);
      const formattedTime = date.toLocaleTimeString("ko-KR", timeOptions);

      return {
        ...item,
        created_at: `${formattedDate}\n${formattedTime}`,
        requested_at: `${formattedDate}\n${formattedTime}`,
      };
    });
  };
  const resultData = convertToLocalTime(originData);
  // 검색 기능
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchType, setSearchType] = useState("content");

  const filteredData = searchKeyword
    ? resultData.filter(
        (item) =>
          item[searchType] && item[searchType].toLowerCase().includes(searchKeyword.toLowerCase())
      )
    : resultData;

  // 건의사항글 작성 인식
  const [contents, setContents] = useState("");
  const handleInputChange = (event) => {
    setContents(event.target.value);
  };
  const { updateAuthState } = useAuth();
  // 서버에 전송하는 함수
  const handleSubmit = async () => {
    if (!contents) {
      alert(t("request.errorBlank"));
      return;
    }
    if (contents.length > 200) {
      alert(t("request.errorCount"));
      return;
    }
    const confirmSubmit = window.confirm(t("request.confirmUpload"));
    if (confirmSubmit) {
      try {
        const response = await addPosts(contents);
        console.log(response);
        navigate(0);
      } catch (error) {
        console.log(error);
        updateAuthState({ isLoggedIn: false });
        navigate(getLangUrl("/login"));
      }
    } else {
      console.log("cancelled");
    }
  };

  const handleDelete = async (id) => {
    const confirmSubmit = window.confirm(t("request.confirmDelete"));
    if (confirmSubmit) {
      try {
        await deletePosts(id);
        navigate(0);
      } catch (error) {
        console.log("delete front error: ", error);
      }
    }
  };

  const { t } = useTranslation();
  return (
    <div className="container mx-auto max-w-7xl px-5 py-10 xl:mt-32 md:mt-48 mt-32 ">
      <h1 className="mb-10">{t("request.title")}</h1>
      <div className="flex flex-col mx-auto mb-20">
        <input
          type="text"
          value={contents}
          onChange={handleInputChange}
          placeholder={t("request.guide")}
          className="w-full px-4 py-2 border rounded-md mb-4"
        />
        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2">
          Submit
        </button>
      </div>

      {filteredData ? (
        <Pagination
          data={filteredData}
          itemsPerPage={itemsPerPage}
          handleNavLinkClick={handleNavLinkClick}
          renderItem={(item, index) => (
            <div
              key={index}
              className="bg-blue-200 p-4 flex flex-col md:grid md:grid-cols-12 items-center mb-2 rounded-2xl">
              <div
                className="flex-grow text-blue-800 items-center col-span-8"
                style={{ flexBasis: "65%" }}>
                <span className="font-bold text-blue-800">{item.content}</span>
              </div>
              <div></div>
              <div className="items-center justify-center">
                <span className="font-bold text-blue-800">{item.user_nickname}</span>
              </div>
              <div className="items-center justify-center text-center">
                <span className="font-bold text-blue-800 ">{item.created_at}</span>
              </div>
              {myData.some((mine) => mine.id === item.id) ? (
                <button className="pr-2" onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              ) : (
                <div></div>
              )}
            </div>
          )}
        />
      ) : (
        <LoadingSpinner />
      )}
      {/* search */}
      <div className="flex gap-2 mb-4 mt-2">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded w-full"
          placeholder={`${t("search.guide")} (${t(`search.${searchType}`)})`}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />

        <select
          className="p-2 border border-gray-300 rounded w-1/4"
          onChange={(e) => setSearchType(e.target.value)}
          value={searchType}>
          <option value="content">{t("search.content")}</option>
        </select>
      </div>
    </div>
  );
};
export default Suggestion;
