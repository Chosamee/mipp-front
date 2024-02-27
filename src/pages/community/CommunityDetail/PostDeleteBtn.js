import { getLangUrl } from "locales/utils";
import { deletePost } from "../api";
import { useTranslation } from "react-i18next";

const PostDeleteBtn = ({ postId }) => {
  const { i18n } = useTranslation();
  const handleDelete = async () => {
    try {
      const isReal = window.confirm(
        i18n.language === "ko" ? "정말 삭제하시겠습니까?" : "Are you sure you want to delete?"
      );
      if (isReal === false) return;
      await deletePost(postId);
      alert(i18n.language === "ko" ? "삭제되었습니다." : "Delete Completed");
      window.location.href = getLangUrl("/community");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <button onClick={handleDelete} className="bg-red-500 text-white px-3 py-1 rounded">
      Delete
    </button>
  );
};

export default PostDeleteBtn;
