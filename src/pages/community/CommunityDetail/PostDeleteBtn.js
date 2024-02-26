import { deletePost } from "../api";

const PostDeleteBtn = ({ postId }) => {
  const handleDelete = async () => {
    try {
      const isReal = window.confirm("삭제하시겠습니까?");
      if (isReal === false) return;
      await deletePost(postId);
      alert("삭제되었습니다.");
      window.location.href = "/community";
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
