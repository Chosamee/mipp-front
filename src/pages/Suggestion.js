import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../components/views/Pagination";
import LoadingSpinner from "../components/views/LoadingSpinner";
import { addPosts, fetchPosts, deletePosts } from "../api/suggestionService";

const Suggestion = () => {
  const [myData, setMyData] = useState({});
  const [resultData, setResultData] = useState([]);
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
        setResultData(data.posts);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  // 서버에 전송하는 함수
  const handleSubmit = async () => {
    if (!contents) {
      alert("내용을 입력해주세요");
      return;
    }

    const confirmSubmit = window.confirm("이 내용을 게시하시겠습니까?");
    if (confirmSubmit) {
      try {
        const response = await addPosts(contents);
        console.log(response);
        window.location.reload();
      } catch (error) {
        console.log(error);
        navigate("/home");
      }
    } else {
      console.log("취소됨");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePosts(id);
      window.location.reload();
    } catch (error) {
      console.log("delete front error: ", error);
    }
  };
  return (
    <div className="container mx-auto max-w-7xl px-5 py-10 xl:pt-32 md:pt-48 pt-32 ">
      <h1 className="mb-10">건의사항s</h1>
      <div className="flex flex-col mx-auto">
        <input
          type="text"
          value={contents}
          onChange={handleInputChange}
          placeholder="문의글 작성"
          className="w-full px-4 py-2 border rounded-md mb-4"
        />
        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2">
          등록
        </button>
      </div>
      {filteredData ? <div>총 {Object.keys(filteredData).length} 개</div> : <div></div>}
      {filteredData ? (
        <Pagination
          data={filteredData}
          itemsPerPage={itemsPerPage}
          handleNavLinkClick={handleNavLinkClick}
          renderItem={(item, index) => (
            <div
              key={index}
              className="bg-blue-200 p-4 flex md:flex-row flex-col items-center  mb-2 rounded-2xl">
              <div className="flex-grow text-blue-800 items-center" style={{ flexBasis: "65%" }}>
                <span className="font-bold text-blue-800">{item.content}</span>
              </div>
              <div style={{ flexBasis: "10%" }}></div>
              <div className="flex-grow items-center justify-center" style={{ flexBasis: "10%" }}>
                <span className="font-bold text-blue-800">{item.user_nickname}</span>
              </div>
              <div className="flex-grow items-center justify-center" style={{ flexBasis: "15%" }}>
                <span className="font-bold text-blue-800">{item.created_at}</span>
              </div>
              {myData.some((mine) => mine.id === item.id) ? (
                <button onClick={() => handleDelete(item.id)}>삭제</button>
              ) : (
                <div></div>
              )}
            </div>
          )}
        />
      ) : (
        <LoadingSpinner />
      )}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded w-full"
          placeholder={`검색어를 입력하세요 (${searchType})`}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <select
          className="p-2 border border-gray-300 rounded w-1/4"
          onChange={(e) => setSearchType(e.target.value)}
          value={searchType}>
          <option value="content">제목</option>
        </select>
      </div>
    </div>
  );
};
export default Suggestion;
