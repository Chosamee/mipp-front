const CommentActions = () => {
  const onEdit = () => {};
  const onDelete = () => {};
  return (
    <div className="flex space-x-2">
      <button onClick={onEdit} className="bg-yellow-500 text-white px-2 py-1">
        Edit
      </button>
      <button onClick={onDelete} className="bg-red-500 text-white px-2 py-1">
        Delete
      </button>
    </div>
  );
};
export default CommentActions;
