import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { addPosts } from "api/communityService";

const CommunityEditor = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      setError(t("community.create.error"));
      return;
    }
    try {
      await addPosts({ title, content });
      navigate("/community");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // 페이지를 떠날 때 질문을 물어봅니다.
  const [isDirty, setIsDirty] = useState(false);
  const handleInputChange = (e) => {
    setIsDirty(true);
  };
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
  return (
    <>
      <h1 className="mt-10 text-xl text-center">Community</h1>
      <form
        onSubmit={handleSubmit}
        className="w-[750px] min-w-96 mx-auto p-8 bg-white rounded shadow-lg mt-10 mb-20">
        <div className="mb-6">
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">
            {t("ask.title")}
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder={t("ask.titleGuide")}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setIsDirty(true);
            }}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="contents" className="block mb-2 text-sm font-medium text-gray-900">
            {t("ask.content")}
          </label>
          <textarea
            id="contents"
            name="contents"
            rows="4"
            className="block p-2.5 w-full h-[300px] text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
            placeholder={t("ask.contentGuide")}
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
          Post
        </button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
};
export default CommunityEditor;
