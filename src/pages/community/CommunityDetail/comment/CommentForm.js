import { useAuth } from "hooks/useAuth";
import { addComment } from "pages/community/api";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const CommentForm = ({ post_id, parent_id = null, setReloadRequired }) => {
  const [content, setContent] = useState("");
  const { isLoggedIn } = useAuth();
  const { i18n } = useTranslation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert(
        i18n.language === "en"
          ? "Please log in to write a comment."
          : "로그인 후 댓글을 작성해주세요."
      );
      return;
    }
    await addComment(post_id, content, parent_id);
    setReloadRequired(true);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2 w-full mx-auto">
      <textarea
        className="border p-2 overflow-y-auto h-16 w-full border-gray-300 rounded resize-none"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={
          parent_id
            ? i18n.language === "en"
              ? "Reply..."
              : "답글을 입력해주세요"
            : i18n.language === "en"
            ? "Write your comment..."
            : "댓글을 입력해주세요"
        }
        required></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        {parent_id
          ? i18n.language === "en"
            ? "Reply"
            : "답글 작성"
          : i18n.language === "en"
          ? "Submit"
          : "댓글 작성"}
      </button>
    </form>
  );
};
export default CommentForm;
