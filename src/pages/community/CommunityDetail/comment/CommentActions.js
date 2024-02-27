import { deleteComment } from "pages/community/api";

const CommentActions = ({ id, setReloadRequired }) => {
  // const onEdit = () => {};
  const onDelete = () => {
    deleteComment(id);
    setReloadRequired(true);
    alert("Comment deleted successfully");
  };
  return (
    <div className="flex space-x-2">
      {/* <button onClick={onEdit} className="bg-yellow-500 text-white px-2 py-1 text-sm">
        Edit
      </button> */}
      <button onClick={onDelete} className="bg-red-300 text-white px-2 py-1 text-sm rounded-lg">
        Delete
      </button>
    </div>
  );
};
export default CommentActions;
