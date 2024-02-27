import { addComment } from "pages/community/api";
import { useState } from "react";

const CommentForm = ({ post_id, parent_id = null }) => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("post_id", post_id, "content", content, "parent_id", parent_id);
    await addComment(post_id, content, parent_id);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2 w-[700px] mx-auto">
      <textarea
        className="border p-2 overflow-y-auto h-16 w-full border-gray-300 rounded resize-none"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your comment..."
        required></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Submit
      </button>
    </form>
  );
};
export default CommentForm;
