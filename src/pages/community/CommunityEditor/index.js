import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { addPost, fetchPost, updatePost } from "../api";
import { getLangUrl } from "locales/utils";

const CommunityEditor = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const { i18n } = useTranslation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      setError(t("community.create.error"));
      return;
    }
    try {
      if (isEdit) {
        await updatePost(id, title, content);
        navigate(getLangUrl(`/community/${id}`));
      } else {
        await addPost(title, content);
        navigate(getLangUrl("/community"));
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // 페이지를 떠날 때 질문을 물어봅니다.
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isDirty) {
        const message = t("ask.create.confirmExit");
        event.returnValue = message;
        return message;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDirty]);

  const { id } = useParams(); // 수정 시 사용될 id
  const location = useLocation();
  const isEdit = location.pathname.includes("/edit"); // 현재 경로가 수정인지 확인

  useEffect(() => {
    if (isEdit) {
      // 수정 모드일 경우, 기존 포스트 데이터를 불러옵니다.
      const fetchData = async () => {
        try {
          const data = await fetchPost(id);
          if (data.owner === false) {
            navigate(getLangUrl("/community"));
          }
          setTitle(data.post.title);
          setContent(data.post.content);
        } catch (error) {
          console.error("Error fetching post data:", error);
          // setError(t("community.edit.errorFetching"));
        }
      };

      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="mt-10 text-xl text-center">Community</h1>
      <form
        onSubmit={handleSubmit}
        className="w-[750px] min-w-96 mx-auto p-8 bg-white rounded shadow-lg mt-10 mb-20">
        <div className="mb-6">
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">
            {"title"}
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder={"title"}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setIsDirty(true);
            }}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="contents" className="block mb-2 text-sm font-medium text-gray-900">
            {"contents"}
          </label>
          <textarea
            id="contents"
            name="contents"
            rows="4"
            className="block p-2.5 w-full h-[300px] text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
            placeholder={"contents"}
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              setIsDirty(true);
            }}></textarea>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
          {/* {t("ask.submit")} */}
          {i18n.language === "en" ? "Post" : "작성"}{" "}
        </button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
};
export default CommunityEditor;
