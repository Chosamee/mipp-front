import { getLangUrl } from "locales/utils";
import { Link } from "react-router-dom";

const PostEditBtn = ({ postId, title, content }) => {
  return (
    <Link
      to={getLangUrl(`/community/${postId}/edit`)}
      className="bg-blue-500 text-white px-3 py-1 rounded"
      state={(title, content)}>
      Edit
    </Link>
  );
};

export default PostEditBtn;
